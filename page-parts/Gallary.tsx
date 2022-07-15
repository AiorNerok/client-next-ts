import { Col, Container, Row, Text } from "@nextui-org/react";
import { LinkNext } from "../components/ui";

export default function Gallary() {
    return(
        <Row>
            <Container>
                <Row>
                    <Col><Text>Продукция</Text></Col>
                    <Col><LinkNext href='/'>Посмотреть еще</LinkNext></Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </Row>
    )
}