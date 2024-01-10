import React from "react";
import { Field, Formik } from "formik";
import { singin } from "../api/singin";
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

export const ModalSingIn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Вход</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>Введите данные для входа</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            onSubmit={(values) => {
                                singin(values);
                            }}
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
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

                                                if (!value) {
                                                    error = "введите пароль";
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
                                            Войти
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
