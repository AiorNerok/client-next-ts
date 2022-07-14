import { Footer, Header } from "../page-parts";
import { motion } from "framer-motion";
import { Row } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({ children }: Props) {
  return (
    <Row
      css={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
        style={{
          flex: "1",
        }}
      >
        {children}
      </motion.div>
      <Footer />
    </Row>
  );
}
