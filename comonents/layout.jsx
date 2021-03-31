import Link from "next/link";
import { Button } from "antd";
// import { Children } from "react";

export default ({children}) => (
    <>
      <Link href="./a?id=1" as="/a/1">
        <Button>A</Button>
      </Link>
      <Link href="./test/b" >
        <Button>B</Button>
        </Link>
        {children}
    </>
)