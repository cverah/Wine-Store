import * as Yup from "yup";

export const initialValues = {
  fullname: "",
  company: "",
  email: "",
  phone: "",
  city: "",
};

export const RegistrationContact = {
  Contact: Yup.object().shape({
    fullname: Yup.string().required("campo requerido"),
    email: Yup.string().email("Email Invalido").required("campo requerido"),
    phone: Yup.string()
      .min(9, "Muy corto el celular tiene 9 numeros")
      .required("campo requerido"),
  }),
};
