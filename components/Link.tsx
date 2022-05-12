import React from "react";
import Link from "next/link";

const NextLink = (props: any) => {
  return (
    <Link href={props.href}>
      <a
        className={props.className}
        target={props.target}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default NextLink;
