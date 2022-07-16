import React from "react";

import Link from "next/link";
import { Link as LinkNextUI } from "@nextui-org/react";
import { useRouter } from "next/router";

import { ILink, ILinkStyle } from "../../types/interface";

export default function LinkNext({
  href,
  text,
  children,
  type,
}: ILink): JSX.Element {

  function Style(): ILinkStyle | "" {
    if (type === "link") {
      const isPath = useRouter().asPath === href

      return {
        padding: "$4 $6",
        color: isPath ? "$primary" : "#687076",
        fontWeight: isPath ? "600" : "400",
      };
    } else if (type === "wrapper") {
      return {
        width: "100%",
        '&:hover': {
          opacity: 1
        }
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
