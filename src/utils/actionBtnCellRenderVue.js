import { useRouter } from "vue-router";
import { useSelectedProductStore } from "../stores/selectedProduct";

export default {
  template: `<el-button @click="goToPayment" v-if="isReadyToPay" type="primary">تکمیل</el-button>`,
  setup(props) {
    const isReadyToPay = props.params.data.status === "readyToPay";
    const router = useRouter();
    const selectedProductStore = useSelectedProductStore();
    const goToPayment = () => {
      selectedProductStore.selectedProduct = props.params.data;
      router.push({ path: `/order-detail` });
    };
    return {
      isReadyToPay,
      goToPayment,
    };
  },
};
