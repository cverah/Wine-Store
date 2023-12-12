import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PhonePausedOutlinedIcon from "@mui/icons-material/PhonePausedOutlined";
import CircularProgress from "@mui/material/CircularProgress";

import emailjs from "@emailjs/browser";
import {
  Button,
  Container,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import {
  RegistrationContact,
  initialValues,
} from "../../formik/formik_contact";
import { credential_send_email } from "../../credentail_send_email";
import {
  messageError,
  messageSuccess,
} from "../../messages_modal/modal_messages";
import { useRef } from "react";

const RegisterContact = () => {
  const form = useRef();
  function handleForm(values, { setSubmitting }) {
    // console.log(values);
    //creando formulario invisible para que acpete emailjs
    const form = document.createElement("form");
    form.style.display = "none"; // Hace que el formulario sea invisible
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = values[key];
        form.appendChild(input);
      }
    }
    document.body.appendChild(form);
    //console.log(form);
    emailjs
      .sendForm(
        credential_send_email.service_id,
        credential_send_email.template_id,
        form,
        credential_send_email.user_id
      )
      .then((result) => {
        if (result.text === "OK") {
          setSubmitting(false);
          messageSuccess(
            "!Correo Enviado¡, me contactare contigo en el menor tiempo posible, gracias por contactarme"
          );
        } else {
          messageError(`Ocurrio un problema ${result.text}`);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative mb-2">
      <h2
        className="text-2xl font-extrabold uppercase"
        style={{ color: "darkred" }}
      >
        Contactanos
      </h2>
      <hr className="mb-4 border-2" />
      <div className="mb-3">
        <p className="text-base sm:text-2xl max-w-xl text-center mx-auto">
          !Dejanos tus datos e inmediatamente nos pondremos en contacto contigo!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleForm}
        validationSchema={RegistrationContact.Contact}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className=" backdrop-blur-md p-2 rounded-lg" ref={form}>
            <div className="flex flex-col space-y-4 mb-3 sm:grid sm:grid-cols-2 sm:gap-1 sm:space-y-0 sm:mb-8 md:gap-x-4 md:gap-y-6">
              <div className="flex flex-col space-y-1">
                <label htmlFor="fullname" className="font-bold">
                  Nombre Completo
                </label>
                <Field
                  component={TextField}
                  name="fullname"
                  id="fullname"
                  type="text"
                  placeholder="Ejm. Juan Perez"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentityIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="company" className="font-bold">
                  Compañia
                </label>
                <Field
                  component={TextField}
                  name="company"
                  id="company"
                  type="text"
                  placeholder="Ejm. Viñeria Abancay S.A.C"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeWorkOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <Field
                  component={TextField}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Ejm. juan@gmail.com"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachEmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="flex flex-col space-y-1">
                <FormControl>
                  <label htmlFor="phone" className="font-bold">
                    Celular
                  </label>
                  <Field
                    component={TextField}
                    name="phone"
                    id="phone"
                    as={Text}
                    placeholder="Ejm: 958415624"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhonePausedOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>

              <div className="flex flex-col space-y-1">
                <FormControl>
                  <label htmlFor="city" className="font-bold">
                    Ciudad
                  </label>
                  <Field id="city" name="city" as={Select}>
                    <MenuItem value="">--Seleccione--</MenuItem>
                    <MenuItem value="Abancay">Abancay</MenuItem>
                    <MenuItem value="Andahuaylas">Andahuaylas</MenuItem>
                    <MenuItem value="Chincheros">Chincheros</MenuItem>
                    <MenuItem value="Antabamba">Antabamba</MenuItem>
                    <MenuItem value="Cotabambas">Cotabambas</MenuItem>
                    <MenuItem value="Aymaraes">Aymaraes</MenuItem>
                    <MenuItem value="otro">Soy de otro Lugar</MenuItem>
                  </Field>
                </FormControl>
              </div>
            </div>
            {isSubmitting && <LinearProgress />}
            <div className="w-full">
              <Button
                variant="contained"
                disabled={isSubmitting}
                onClick={submitForm}
                style={{
                  backgroundColor: "darkred",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                {isSubmitting ? (
                  <CircularProgress
                    color="warning"
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                    }}
                  />
                ) : (
                  "Enviar Informacion"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterContact;
