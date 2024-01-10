import React from "react";
import { Field, Formik } from "formik";
import { registration } from "../api/registration";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from "@chakra-ui/react";

export const ModalRegistration = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Регистрация</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>Введите данные для регистрации</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                            }}
                            onSubmit={(values) => {
                                registration(values);
                            }}
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <FormControl
                                        isInvalid={
                                            !!errors.name && touched.name
                                        }
                                    >
                                        <FormLabel htmlFor="name">
                                            Имя
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="name"
                                            name="name"
                                            type="text"
                                            variant="filled"
                                            validate={(value: string) => {
                                                let error;

                                                if (!value) {
                                                    error = "Name is required";
                                                }

                                                return error;
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {errors.name}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        isInvalid={
                                            !!errors.email && touched.email
                                        }
                                    >
                                        <FormLabel htmlFor="email">
                                            Email Address
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="email"
                                            name="email"
                                            type="email"
                                            variant="filled"
                                            validate={(value: string) => {
                                                let error;

                                                if (!value) {
                                                    error = "Email is required";
                                                }

                                                return error;
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {errors.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        isInvalid={
                                            !!errors.password &&
                                            touched.password
                                        }
                                    >
                                        <FormLabel htmlFor="password">
                                            Password
                                        </FormLabel>
                                        <Field
                                            as={Input}
                                            id="password"
                                            name="password"
                                            type="password"
                                            variant="filled"
                                            validate={(value: string) => {
                                                let error;

                                                if (value.length < 6) {
                                                    error =
                                                        "Password must contain at least 6 characters";
                                                }

                                                return error;
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {errors.password}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <ModalFooter>
                                        <Button
                                            type="submit"
                                            colorScheme="purple"
                                            width="full"
                                        >
                                            Зарегистрироваться
                                        </Button>
                                    </ModalFooter>
                                </form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
