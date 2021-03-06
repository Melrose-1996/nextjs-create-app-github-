const api = require("../lib/api");

import { Button, Tabs } from "antd";
import { MailOutlined } from "@ant-design/icons";

import { connect } from "react-redux";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

import Repo from "../components/Repo";

// 存储 tabs 栏的状态,以参数的形式传递下去
import Router, { withRouter } from "next/router";

import { useEffect } from "react";

// 加入缓存策略
import LRU from "lru-cache";

import { setCache } from "../lib/repo-basic-cache";

const cache = new LRU({
  // 表示最长的事件不去使用缓存在里面 key 的数据，就会把该数据删除
  maxAge: 1000 * 60 * 10,
});

// const Index = ({ Component, pageProps, reduxStore }) => {
//   // console.log(isLogin);
//   // console.log(userRepos);
//   // console.log(userStaredRepos);
//   return <span>去登录</span>;
// };

// 用于存储传递过来的数据
// 注意：这个是在模块的全局作用域里面的，会一直存在的，永远都会有值
// 所以对于服务端渲染，我们需要做层判断，不应该使用这个全局变量的值

let userLocalRepos, userLocalStaredRepos;

let userFlag;

const isServer = typeof window === "undefined";

function Index({ userRepos, userStaredRepos, user, router }) {
  const tabKey = router.query.key || "1";

  const handelTabChange = (activeKey) => {
    Router.push(`/?key=${activeKey}`);
  };

  // 第一进来的时候，如果请求的有数据，就应该把数据缓存起来了
  // 如果不传递参数，则之后在 mounted 的时候调用一次
  useEffect(() => {
    if (!isServer) {
      // 防止值为 null 的时候也缓存
      // if (userRepos) {
      //   cache.set("userRepos", userRepos);
      // }
      // if (userStaredRepos) {
      //   cache.set("userStaredRepos", userStaredRepos);
      // }

      // 这种方法是不管有没有发起请求获取到数据，一到时间就会刷新数据
      userLocalRepos = userRepos;
      userLocalStaredRepos = userStaredRepos;
      setTimeout(() => {
        userLocalRepos = null;
        userLocalStaredRepos = null;
      }, 1000 * 60 * 10);
    }
  }, [userRepos, userStaredRepos]);

  if (!user || !user.id) {
    return (
      <div className="root">
        <p>亲，您还没有登录哦~</p>
        <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>
          点击登录
        </Button>
        <style jsx>
          {`
            .root {
              height: 400px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}
        </style>
      </div>
    );
  }

  useEffect(() => {
    // 服务端渲染对于这段代码是没有必要去执行的，如果重复执行会导致我们的内存没有意义的使用，这段是跟用户的搜索有关的，跟服务端整体渲染是没有关系的，所以需要屏蔽掉。
    if (!isServer) {
      setCache(userRepos);
      setCache(userStaredRepos);
    }
  });

  return (
    <div className="root">
      <div className="user-info">
        <img src={user.avatar_url} className="avatar" alt="user avatar" />
        <span className="login">{user.login || "--"}</span>
        <span className="name">{user.name || "--"}</span>
        <span className="bio">{user.bio || "--"}</span>
        <p className="email">
          <MailOutlined style={{ marginRight: 10 }} />
          <a href={`mailto:${user.email}`}>{user.email || "--"}</a>
        </p>
      </div>
      <div className="user-repos">
        <Tabs activeKey={tabKey} onChange={handelTabChange} animated={false}>
          <Tabs.TabPane tab="你的仓库" key="1">
            {userRepos.map((repo) => (
              <Repo repo={repo} key={repo.id}></Repo>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="你关注的仓库" key="2">
            {userStaredRepos.map((repo) => (
              <Repo repo={repo} key={repo.id}></Repo>
            ))}
          </Tabs.TabPane>
        </Tabs>
      </div>
      <style jsx>
        {`
          .root {
            display: flex;
            align-items: flex-start;
            padding: 20px 0;
          }
          .user-info {
            width: 200px;
            margin-right: 40px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
          }
          .login {
            font-weight: 800;
            font-size: 20px;
            margin-top: 20px;
          }
          .name {
            margin-top: 20px;
            color: #333;
          }
          .bio {
            margin-top: 20px;
            color: #333;
          }
          .avatar {
            width: 100%;
            border-radius: 5px;
          }
          .user-repos {
            flex-grow: 1;
          }
        `}
      </style>
    </div>
  );
}
// 注意我们在组件中（getInitialProps）中，只会使用到 request ，因为 request 会帮助我们去判断是客户端还是服务端

// 注意 getInitialProps 会在客户端不同页面跳转的时候使用，同样服务端如果我们访问的是 index 这个页面，也会调用 getInitialProps，在服务端渲染的时候调用的时候，我们的运行环境处于 node.js 环境，而不是浏览器的环境，如果我们在 node.js 的环境下请求就会出现请求的是 http://localhost:3000/ 这样的地址，所以会失败（默认的端口是80）

// 注意这里是 ctx 而不是 {ctx}
Index.getInitialProps = async (ctx) => {
  if (!userFlag || !userFlag.id) {
    return {};
  }
  // if (ctx.response.status == 401) {
  // return {};
  // }
  // console.log(ctx, 3333);
  // return {};
  // 报 Error: connect ECONNREFUSED 127.0.0.1:80 的错误
  // 如果是在浏览器里面发送的，会根据我们提供的路径会自动加上我们当前网站的域名（就是http://localhost:3000/）所以它完整请求路径就是 http://localhost:3000/github/search/repositories?q=react
  // 如果是在服务端渲染的时候进行执行的话，所以没有浏览器里面的域名的，这个时候请求的路径自动在 axios 里面增加的 http://127.0.0.1（默认80端口）/github/search/repositories?q=react，这个时候就不对了，我们 80 端口没有启动，也不是我们想请求的地址
  // const result = await axios
  //   .get("/github/search/repositories?q=react")
  //   .then((resp) => console.log(resp));

  // 注意 req 和 res 只有在服务端渲染的时候才会有

  // 注意一旦登出了，我们需要做个请求的判断
  // 可以通过 ctx.req 和 ctx.res （node.js 对象，不会存在于浏览器运行环境里面的）来进行判断，但是在符合在服务端可以判断。在客户端进行判断，是没有 ctx 对象的。

  if (!isServer) {
    // if (cache.get("userRepos") && cache.get("userStaredRepos")) {
    //   return {
    //     userRepos: cache.get("userRepos"),
    //     userStaredRepos: cache.get("userStaredRepos"),
    //   };
    // }
    if (userLocalRepos && userLocalStaredRepos) {
      return {
        userRepos: userLocalRepos,
        userStaredRepos: userLocalStaredRepos,
      };
    }
  }

  // 发起请求，列出你所有的创建的仓库
  const userRepos = await api.request({ url: "/user/repos" }, ctx.req, ctx.res);
  // 被关注的仓库
  const userStaredRepos = await api.request(
    { url: "/gists/starred" },
    ctx.req,
    ctx.res
  );

  return {
    isLogin: true,
    userRepos: userRepos.data,
    userStaredRepos: userStaredRepos.data,
  };
};

// 注意在写 withRouter 和 connect 的时候，需要把 withRouter 放在外面
export default withRouter(
  connect(function mapState(state) {
    userFlag = state.user;
    return {
      user: state.user,
    };
  })(Index)
);
