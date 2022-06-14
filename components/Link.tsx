import React from "react";
import Link from "next/link";

const NextLink = (props: any) => {
  return (
    <Link href={props.href} as={props.as}>
      <a
        className={props.className}
        onClick={props.onClick}
        target={props.target}
        ref={props.ref}
        style={props.style}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default NextLink;
