import React from "react";
import "../css/footer.scss";
import { Container } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <div className="footer">
            <Container maxW="container.xl" className="footer__wrapper">
                <div>О нас</div>
            </Container>
        </div>
    );
};
