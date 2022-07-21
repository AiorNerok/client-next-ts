import { Button, Container, Grid, Row, Spacer, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import { LinkNext } from "../components/ui";
import MockItemCardProdict from "../components/ui/MockItemCardProdict";
import { Layout } from "../Layout";
import { FAQ, Hero } from "../page-parts/HomePage";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Spacer y={2} />
      <Row>
        <Container>
          <Row
            gap={2}
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: 0,
            }}
          >
            <Text
              h3
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                flex: "1",
                m: 0,
              }}
              weight="bold"
            >
              Продукция
            </Text>
            <Button shadow ripple auto className="button_up">
              <LinkNext type="link" href="/product">
                <Text color="#fff">Посмотреть еще</Text>
              </LinkNext>
            </Button>
          </Row>
          <Spacer y={1} />
          <Row>
            <Grid.Container wrap="wrap" gap={1} justify="center">
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/1' text="1 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/2' text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/3' text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/4' text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/5' text="2 of 3" />
              </Grid>
              <Grid xs={12} sm={4}>
                <MockItemCardProdict href='/product/6' text="3 of 3" />
              </Grid>
            </Grid.Container>
          </Row>
        </Container>
      </Row>
      <FAQ />
    </Layout>
  );
};

export default Home;
