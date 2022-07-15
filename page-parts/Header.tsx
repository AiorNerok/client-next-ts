import {
  Button,
  Container,
  Modal,
  Row,
  Text,
  useModal,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { LinkNext } from "../components/ui";

export default function Header() {
  const { setVisible, bindings } = useModal();
  const links = [
    {
      href: "/",
      text: "Главная",
      key: "main",
    },
    {
      href: "/contact",
      text: "Контакты",
      key: "contact",
    },
    {
      href: "/about",
      text: "О Нас",
      key: "about",
    },
  ];
  return (
    <>
      <Row
        css={{
          shadow: "$lg",
          padding: "$5 0",
          display: "none",
          "@xs": { display: "block" },
        }}
      >
        <Container css={{}}>
          {links.map(({ href, key, text }) => (
            <LinkNext href={href} text={text} key={key} />
          ))}
        </Container>
      </Row>
      <Row
        css={{
          shadow: "$lg",
          padding: "$5 0",
          display: "block",
          "@xs": { display: "none" },
        }}
      >
        <Container display="flex" justify="space-between" alignItems="center">
          <LinkNext href="/" css="padding:0px">
            <Image
              src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
              objectFit="contain"
              alt="Default Image"
              height={40}
              width={80}
              className='noneclass'
            />
          </LinkNext>
            <Button auto shadow onClick={() => setVisible(true)}>
              Меню
            </Button>
            <Modal
              scroll
              width="90%"
              css={{
                height: "100%",
              }}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Меню
                </Text>
              </Modal.Header>
              <Modal.Body>
                {links.map(({ href, key, text }) => (
                  <LinkNext href={href} text={text} key={key} />
                ))}
              </Modal.Body>
            </Modal>
        </Container>
      </Row>
    </>
  );
}
