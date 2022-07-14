import { Container } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../Layout";
import { FAQ, Hero } from "../page-parts";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <FAQ />
    </Layout>
  );
};

export default Home;
