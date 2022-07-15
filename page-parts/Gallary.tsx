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
import MockItemCardProdict from "../components/ui/MockItemCardProdict";

export default function Gallary() {
  return (
    <Row
      css={{
        flexDirection: "column",
        w: '100%'
      }}

    >
      <Spacer y={4} />
      <Container>
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
            >
              Посмотреть еще
            </Button>
          </LinkNext>
        </Row>
        <Spacer y={1} />
        <Row>
          <Grid.Container wrap="wrap" gap={1} justify="center">
            <Grid xs={12} sm={4}>
              <MockItemCardProdict text="1 of 3" />
            </Grid>
            <Grid xs={12} sm={5}>
              <MockItemCardProdict text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={3}>
              <MockItemCardProdict text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={5}>
              <MockItemCardProdict text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={3}>
              <MockItemCardProdict text="2 of 3" />
            </Grid>
            <Grid xs={12} sm={4}>
              <MockItemCardProdict text="3 of 3" />
            </Grid>
          </Grid.Container>
        </Row>
      </Container>
    </Row>
  );
}
