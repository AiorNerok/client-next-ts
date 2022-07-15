import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import { LinkNext } from "../components/ui";

const MockItem = ({ text }: any) => {
  return (
    <LinkNext type="wrapper" href="/about">
      <Card
        css={{
          h: "$24",
          w: "100%",
          minHeight: "360px",
          "@hover": {
            shadow: "0 4px 14px 0 var(--nextui-colors-primaryShadow)",
          },
        }}
        variant="flat"
      >
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              New
            </Text>
            <Text h3 color="black">
              Acme camera
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: "0" }}>
          <Card.Image
            src="https://nextui.org/images/card-example-6.jpeg"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                Available soon.
              </Text>
              <Text color="#000" size={12}>
                Get notified.
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button shadow auto rounded >
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Подробнее
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </LinkNext>
  );
};

export default function Gallary() {
  return (
    <Row
      css={{
        flexDirection: "column",
      }}
    >
      <Spacer y={4} />
      <Container fluid>
        <Row
          gap={2}
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Text
            h3
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              flex: "1",
            }}
            weight="bold"
          >
            Продукция
          </Text>
          <LinkNext type="link" href="/">
            <Button
              shadow
              ripple
              css={{ "@hover": { transform: "translateY(-3px)" } }}
            >
              Посмотреть еще
            </Button>
          </LinkNext>
        </Row>
        <Spacer y={1} />
        <Row>
          <Grid.Container wrap="wrap" gap={2} justify="center">
            <Grid xs={12} sm={4}>
              <MockItem text="1 of 3" />
            </Grid>
            <Grid xs={12} sm={5}>
              <MockItem text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={3}>
              <MockItem text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={5}>
              <MockItem text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={3}>
              <MockItem text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={4}>
              <MockItem text="3 of 3" />
            </Grid>
          </Grid.Container>
        </Row>
      </Container>
    </Row>
  );
}
