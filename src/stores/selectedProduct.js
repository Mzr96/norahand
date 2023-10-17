import { defineStore } from "pinia";
import { ref, watch } from "vue";
import ApiService from "../core/services/ApiServices";
import { useToastStore } from "../stores/toastStore";
const useSelectedProductStore = defineStore("selectedProduct", () => {
  const selectedProduct = ref({});
  const selectedProductDetail = ref({});
  const allDetail = ref({});
  const toastStore = useToastStore();
  const isLoading = ref(false);
  watch(
    () => selectedProduct.value,
    async (newVal) => {
      try {
        isLoading.value = true;
        const response = await ApiService.get("order-detail");
        selectedProductDetail.value = response.data.result;
        selectedProductDetail.value.picture = `https://norahand.com${selectedProductDetail.value.picture}`;
        allDetail.value = {
          ...selectedProduct.value,
          ...selectedProductDetail.value,
        };
        isLoading.value = false;
      } catch (error) {
        toastStore.errorMessage = "خطا در دریافت اطلاعات";
      }
    }
  );
  return { selectedProduct, selectedProductDetail, isLoading, allDetail };
});

export { useSelectedProductStore };
