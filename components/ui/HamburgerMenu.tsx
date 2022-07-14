import { Dropdown } from "@nextui-org/react";
import React from "react";
import { LinkNext } from ".";

export default function HamburgerMenu({ links }: any) {
  return (
    <Dropdown>
      <Dropdown.Button animated shadow >
        Меню
      </Dropdown.Button>
      <Dropdown.Menu css={{}} aria-label="menu">
        {links.map((link: any) => (
          <Dropdown.Item key={link.key}>
            <LinkNext href={link.href} text={link.text} />
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
