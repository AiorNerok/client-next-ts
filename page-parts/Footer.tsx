import { Container, Row } from "@nextui-org/react";
import Image from "next/image";
import { LinkNext } from "../components/ui";

export default function Footer() {
    return (
        <Row as='footer'>
            <Container>
                <LinkNext type="link" href="/">
                    <Image
                        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                        objectFit="contain"
                        alt="Default Image"
                        height={40}
                        width={80}
                        className='noneclass'
                    />
                </LinkNext>
            </Container>
        </Row>
    )
}