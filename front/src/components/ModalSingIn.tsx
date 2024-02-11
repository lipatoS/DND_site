import React, { useState } from "react";
import { Field, Formik, FormikHelpers } from "formik";
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
import { useNavigate, redirect } from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

export const ModalSingIn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [serverError, setServerError] = useState<{
        errorText: string;
    } | null>(null);
    const navigate = useNavigate();
    const handleSubmit = async (
        values: FormData,
        { setSubmitting, setErrors }: FormikHelpers<FormData>
    ) => {
        try {
            // Ваш код запроса
            const response = await singin(values);
            if (response.status == 200) {
                onClose();
                navigate("/account");
            }

            // Обработка успешного ответа, если необходимо
        } catch (error: any) {
            console.log(error);
            // Обработка ошибок
            if (error.response) {
                // Ошибка от сервера
                setServerError(error.response.data);
            } else {
                // Общая ошибка
                console.error("Ошибка при отправке запроса:", error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Button onClick={onOpen}>Вход</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>Введите данные для входа</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {serverError && (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                                {serverError.errorText}
                            </div>
                        )}
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit, errors, touched }) => (
                                <form onSubmit={handleSubmit}>
                                    <FormControl
                                        isInvalid={
                                            !!errors.email && touched.email
                                        }
                                    >
                                        <FormLabel htmlFor="email">
                                            Email
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
                                                    error = "Введите email";
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
                                            Пароль
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
                                                    error = "Введите пароль";
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
