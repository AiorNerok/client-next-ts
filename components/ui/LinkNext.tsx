import React, { useEffect } from "react";
import Link from "next/link";
import { Button, Link as LinkNextUI } from "@nextui-org/react";
import { useRouter } from "next/router";
import { type } from "os";

type TLink = {
  href: string;
  text?: string;
  children?: React.ReactNode;
  css?: string
};

export default function LinkNext({ href, text, children, css }: TLink): JSX.Element {
  const Router = useRouter();

  const StyleActiveLink = {
    fontWeight: "600",
    color: `$primary`,
  };

  const StyleLink = {
    fontWeight: "400",
    color: `#687076`,
  };

  const activeStyle = Router.asPath === href ? StyleActiveLink : StyleLink;

  return (
    <Link href={href}>
      <LinkNextUI
        css={{
          ...activeStyle,
          padding: "$4 $6",
          css
        }}
      >
        {text}
        {children}
      </LinkNextUI>
    </Link>
  );
}
