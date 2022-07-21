import { Container, Grid, Row, Text } from "@nextui-org/react";
import MockItemCardProdict from "../../components/ui/MockItemCardProdict";
import { Layout } from "../../Layout";

export default function index() {
  return (
    <Layout>
      <Row>
        <Container>
          <Row>
            <Text h1>Производство</Text>
          </Row>
          <Row>
            <Grid.Container wrap="wrap" gap={1} justify="center">
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/1" text="1 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/2" text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/3" text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/4" text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/5" text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href="/product/6" text="3 of 3" />
              </Grid>
            </Grid.Container>
          </Row>
        </Container>
      </Row>
    </Layout>
  );
}
