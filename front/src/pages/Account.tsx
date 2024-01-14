import React from "react";
import { Container } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Characters } from "../components/Characters";

export const AccountPage = () => {
    return (
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab>Персонажи</Tab>
                <Tab>Игры</Tab>
            </TabList>
            <Container maxW="container.xl">
                <TabPanels>
                    <TabPanel>
                        <Characters />
                    </TabPanel>
                    <TabPanel>
                        <p>Игры</p>
                    </TabPanel>
                </TabPanels>
            </Container>
        </Tabs>
    );
};
