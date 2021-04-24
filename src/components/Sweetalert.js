import Swal from "sweetalert2";

export const errorMessage = (message) => {
  Swal.fire({
    background: "#f1f1f1",
    width: 400,
    html: `<div style="color:#707070; font-size:24px;">
        ${message}</div>`,
    icon: "error",
    showConfirmButton: false,
    timer: 1500,
  });
};
