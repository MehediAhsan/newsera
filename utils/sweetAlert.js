import Swal from "sweetalert2";

export const showAlert = ({
  title,
  text,
  icon = "success",
  confirmButtonText,
  timer = 1500,
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    timer,
    allowOutsideClick: false,
    customClass: {
      popup: "bg-gray-900 text-white rounded-lg",
    },
  });
};

export const showConfirmAlert = ({
  title,
  text,
  icon = "warning",
  confirmButtonText = "Yes",
  cancelButtonText = "Cancel",
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      popup: "bg-gray-900 text-white rounded-lg",
    },
  });
};
