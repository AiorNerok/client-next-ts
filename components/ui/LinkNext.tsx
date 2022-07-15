import React, { CSSProperties } from "react";
import Link from "next/link";
import { Button, Link as LinkNextUI } from "@nextui-org/react";
import { useRouter } from "next/router";
import { type } from "os";

type TLink = {
  href: string;
  text?: string;
  children?: React.ReactNode;
  css?: string;
  type: "link" | "wrapper";
};

interface IStyle {
  padding?: CSSProperties;
  color?: CSSProperties;
  fontWeight?: CSSProperties;
}

export default function LinkNext({
  href,
  text,
  children,
  css,
  type,
}: TLink): JSX.Element {

  function Style() {
    if (type === "link") {
      const { asPath } = useRouter();

      return {
        padding: "$4 $6",
        color: asPath === href ? "$primary" : "#687076",
        fontWeight: asPath === href ? "600" : "400",
      };
    } else if (type === "wrapper") {
      return {
        widht: '100%'
      };
    }
  }

  return (
    <Link href={href}>
      <LinkNextUI
        css={{...Style()}}
      >
        {text}
        {children}
      </LinkNextUI>
    </Link>
  );
}
