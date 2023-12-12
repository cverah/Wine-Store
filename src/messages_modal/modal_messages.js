import Swal from "sweetalert2";

export const messageSuccess = (message_title = "Registered Successfully") =>
  Swal.fire({
    icon: "success",
    title: message_title,
    showConfirmButton: true,
    customClass: {
      title: "custom-title-class", // Nombre de la clase CSS personalizada para el título
    },
  });

export const messageError = (error) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error,
  });

export const alertDelete = (textConfirmButton = "Yes, delete it!") =>
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: textConfirmButton,
  });

export const messageDelete = (
  title = "Deleted!",
  text = "Your file has been deleted."
) =>
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 1300,
  });
