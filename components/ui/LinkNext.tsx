import React, { CSSProperties, useEffect, useRef } from "react";

import CSS from "csstype";

import Link from "next/link";
import { Button, Link as LinkNextUI } from "@nextui-org/react";
import { useRouter } from "next/router";

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
  "@hover"?: { opacity: 1 };
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
        "@hover": { opacity: 1 },
      };
    } else {
      return "";
    }
  }

  const test = useRef(null);
  useEffect(() => {
    // hello my first KOSTIL`
    // @ts-ignore
    test.current.classList.remove("nextui-c-gUrcXm");
  }, []);
  return (
    <Link href={href}>
      <LinkNextUI ref={test} css={{ ...Style() }}>
        {text}
        {children}
      </LinkNextUI>
    </Link>
  );
}
