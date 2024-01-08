import React from "react";
import { Field, Form, Formik } from "formik";

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
    function validateName(value: any) {
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value.toLowerCase() !== "naruto") {
            error = "Jeez! You're not a fan 😱🎃";
        }
        return error;
    }

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent className="modal">
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{ name: "Sasuke" }}
                            onSubmit={(values: any, actions: any) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {(props: any) => (
                                <Form>
                                    <Field name="name" validate={validateName}>
                                        {({
                                            field,
                                            form,
                                        }: {
                                            field: any;
                                            form: any;
                                        }) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.name &&
                                                    form.touched.name
                                                }
                                            >
                                                <FormLabel>
                                                    First name
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="name"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Button
                                        mt={4}
                                        colorScheme="teal"
                                        isLoading={props.isSubmitting}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
