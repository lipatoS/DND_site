import React, { useState } from "react";
import { Field, Formik, FormikHelpers, ErrorMessage } from "formik";
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

interface FormData {
    name: string;
    email: string;
    password: string;
}

export const ModalRegistration = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [serverError, setServerError] = useState<{
        errorText: string;
    } | null>(null);

    const handleSubmit = async (
        values: FormData,
        { setSubmitting, setErrors }: FormikHelpers<FormData>
    ) => {
        try {
            // Ваш код запроса
            const response = await registration(values);

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
            <Button onClick={onOpen}>Регистрация</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => {
                    if (serverError) {
                        setServerError(null);
                    }

                    onClose();
                }}
                isCentered
            >
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>Введите данные для регистрации</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {serverError && (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                                {serverError.errorText}
                            </div>
                        )}
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                password: "",
                            }}
                            onSubmit={handleSubmit}
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
                                                    error = "Введите имя";
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

                                                if (value.length < 6) {
                                                    error =
                                                        "Пароль должен сосстоять минимум из 6 символов";
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
