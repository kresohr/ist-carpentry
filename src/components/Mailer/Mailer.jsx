import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useFormik, Formik } from "formik";
import {
  FormHeader,
  ErrorMessage,
  FormWrapper,
  Form,
  FormButton,
  Field,
  MessageSent,
  MessageSentDescription,
} from "../../assets/styles/MailerStyle";
import * as Yup from "yup";

const Mailer = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Ime mora sadržavati minmalno 2 znaka")
      .required("Ime je obavezno polje"),
    email: Yup.string().email("test").required("E-mail je obavezno polje."),
    message: Yup.string()
      .min(5, "Poruka mora imati minimalno 5 znakova.")
      .required("Poruka je obavezno polje"),
  });
  const sendEmail = async (values) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMPLATE,
        values,
        import.meta.env.VITE_VALUES
      );
      setMessageSent(true);
    } catch (error) {
      console.log(error.text);
      setMessageFailed(true);
    }
  };

  return (
    <>
      <FormWrapper>
        <FormHeader>Pošaljite poruku</FormHeader>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            sendEmail(values)
              .then(() => {
                setSubmitting(false);
              })
              .catch((error) => {
                console.error(error);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Vaše ime" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Vaš e-mail" />
              <ErrorMessage name="email" component="div" />

              <Field
                type="text"
                name="message"
                placeholder="Vaša poruka"
                $isTextArea
              />
              <ErrorMessage name="message" component="div" />
              <FormButton type="submit" disabled={messageSent}>
                Pošalji
              </FormButton>
              {messageSent && (
                <>
                  <MessageSent>Poruka uspješno poslana!</MessageSent>

                  <MessageSentDescription>
                    Zaprimili smo Vašu poruku, povratno ćemo Vam se javiti u
                    najkraćem mogućem roku.
                  </MessageSentDescription>
                </>
              )}
              {messageFailed && (
                <>
                  <MessageSent>Poruka neuspješno poslana!</MessageSent>
                  <MessageSentDescription>
                    Poruka nije dostavljena, molimo Vas kontaktirajte nas na
                    telefon ili ručno pošaljite poruku na e-mail.
                  </MessageSentDescription>
                </>
              )}
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default Mailer;
