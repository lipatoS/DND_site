import React from "react";
import logo from "../logo.svg";
import { Box, Image, Container } from "@chakra-ui/react";
import { ModalRegistration } from "./ModalRegistration";
import { ModalSingIn } from "./ModalSingIn";
import "../css/header.scss";

export const Header = () => {
    return (
        <header className="header">
            <Container maxW="container.xl">
                <Box maxH="60px" h="100%" className="header__wrapper">
                    <Image src={logo} boxSize="55px" objectFit="contain" />
                    <Box className="header__registration-block">
                        <ModalRegistration />
                        <ModalSingIn />
                    </Box>
                </Box>
            </Container>
        </header>
    );
};
