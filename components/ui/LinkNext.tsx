import React, { CSSProperties } from "react";

import CSS from "csstype";

import Link from "next/link";
import { Button, Link as LinkNextUI } from "@nextui-org/react";
import { useRouter } from "next/router";
import { type } from "os";

type TLink = {
  href: string;
  text?: string;
  children?: React.ReactNode;
  type: "link" | "wrapper";
};

interface IStyle {
  padding?: string;
  color?: string;
  fontWeight?: string;
  width?: number | string;
}

export default function LinkNext({
  href,
  text,
  children,
  type,
}: TLink): JSX.Element {
  function Style(): IStyle | "" {
    if (type === "link") {
      const { asPath } = useRouter();
      return {
        padding: "$4 $6",
        color: asPath === href ? "$primary" : "#687076",
        fontWeight: asPath === href ? "600" : "400",
      };
    } else if (type === "wrapper") {
      return {
        width: "100%",
        padding: "0",
      };
    } else {
      return "";
    }
  }
  return (
    <Link href={href}>
      <LinkNextUI css={{ ...Style() }}>
        {text}
        {children}
      </LinkNextUI>
    </Link>
  );
}
