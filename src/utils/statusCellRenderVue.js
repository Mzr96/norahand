export default {
  template: `<el-tag class="ml-2" :type="statusTag">{{displayStatus}}</el-tag>`,
  setup(props) {
    const statusMap = {
      failed: "ناموفق",
      success: "موفق",
      readyToPay: "آماده پرداخت",
    };
    const statusTypeMap = {
      failed: "danger",
      success: "success",
      readyToPay: "",
    };
    const statusTag = statusTypeMap[props.params.value];
    console.log(props.params.value);
    const displayStatus = statusMap[props.params.value];
    return {
      displayStatus,
      statusTag,
    };
  },
};
