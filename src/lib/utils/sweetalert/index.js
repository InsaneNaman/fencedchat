import Swal from "sweetalert2/src/sweetalert2.js";

export const fireToast = (icon, title, timer = 3000) => {
  //toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon,
    title,
  });
};

//modals

export const fireModal = (config) => {
  return Swal.fire(config);
};
