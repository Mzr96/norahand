import { defineStore } from "pinia";
import { ref, watch } from "vue";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import { ElNotification, ElMessage } from "element-plus";

const useToastStore = defineStore("toast", () => {
  const successMessage = ref("");
  const warningMessage = ref("");
  const errorMessage = ref("");

  const toastMainObject = {
    showClose: false,
    duration: 3000,
    position: "bottom-left",
    onClose: () => {
      successMessage.value = "";
      errorMessage.value = "";
      warningMessage.value = "";
    },
  };

  watch(successMessage, (newVal) => {
    if (!newVal) return;
    ElNotification({
      ...toastMainObject,
      message: successMessage.value,
      type: "success",
    });
  });
  watch(errorMessage, (newVal) => {
    if (!newVal) return;
    ElNotification({
      ...toastMainObject,
      message: errorMessage.value,
      type: "error",
    });
  });
  watch(warningMessage, (newVal) => {
    if (!newVal) return;
    ElNotification({
      message: warningMessage.value,
      type: "warning",
    });
  });

  return {
    successMessage,
    errorMessage,
    warningMessage,
  };
});

export { useToastStore };
