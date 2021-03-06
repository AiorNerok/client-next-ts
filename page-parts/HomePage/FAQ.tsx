import { Collapse, Container, Row, Spacer, Text } from "@nextui-org/react";
import React from "react";

interface IFAQList<S = string, N = number> {
  id: N;
  title: S;
  desc: S;
  subtitle?: S;
}

const FAQList: IFAQList[] = [
  {
    id: 1,
    title: "option a",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "option b",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "option z",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FAQ() {
  return (
    <Row
      css={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Spacer y={4} />

      <Container sm>
        <Text
          h3
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            flex: "1",
          }}
          weight="bold"
        >
          Частые вопросы
        </Text>
        <Collapse.Group splitted>
          {FAQList.map(({ id, title, desc }: IFAQList) => (
            <Collapse key={id} title={title}>
              <Text>{desc}</Text>
            </Collapse>
          ))}
        </Collapse.Group>
      </Container>
    </Row>
  );
}
