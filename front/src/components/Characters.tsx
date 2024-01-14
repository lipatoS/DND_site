import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SimpleGrid,
    Heading,
    Text,
    Button,
} from "@chakra-ui/react";

export const Characters = () => {
    return (
        <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size="md"> Имя</Heading>
                </CardHeader>
                <CardBody>
                    <Text>Краткое описание</Text>
                </CardBody>
                <CardFooter>
                    <Button>Подробности</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
};
