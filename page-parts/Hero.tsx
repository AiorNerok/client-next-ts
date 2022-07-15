import { Col, Container, Image, Row, Text } from "@nextui-org/react";

export default function Hero() {
  return (
    <Row
      css={{
        background:
          "url(https://www.pixel4k.com/wp-content/uploads/2020/01/alien-moon-nature_1580055622.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: '560px',
        height: '100%'
      }}
    >
      <Container
        display="flex"
        css={{
          minHeight: '560px'
          
        }}
      >
        <Row css={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Let's Make the Web Prettier
          </Text>
        </Row>
      </Container>
    </Row>
  );
}
