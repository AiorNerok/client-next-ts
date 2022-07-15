import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../Layout";
import { FAQ, Gallary, Hero } from "../page-parts";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Gallary />
      <FAQ />
    </Layout>
  );
};

export default Home;
