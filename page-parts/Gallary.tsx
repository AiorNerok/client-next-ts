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

const MockItem = ({ text }:any) => {
  return (
    <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
      <Card.Body>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
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
          }}
        >
          <Col span={12} css={{ padding: 0 }}>
            <Text
              h3
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Продукция
            </Text>
          </Col>
          <Col
            css={{
              textAlign: "end",
            }}
          >
            <LinkNext href="/">
              <Button shadow>Посмотреть еще</Button>
            </LinkNext>
          </Col>
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
