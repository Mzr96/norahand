<template>
  <div class="mr-8 px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">تاریخچه سفارشات</h1>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <ag-grid-vue
              class="ag-theme-alpine test"
              :columnDefs="orderHistoryColDefs"
              :defaultColDef="defaultColDef"
              @grid-ready="onGridReady"
              @first-data-rendered="autoSizeAll(false)"
              rowModelType="serverSide"
              :enableRtl="true"
              :generalMenuTab="false"
              :animateRows="true"
              :suppressSizeToFit="true"
              :localeText="AG_GRID_LOCALE_FA"
            ></ag-grid-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridVue } from "ag-grid-vue3";

import { ref } from "vue";
import ApiService from "../core/services/ApiServices";

import { useToastStore } from "../stores/toastStore";
import AG_GRID_LOCALE_FA from "../utils/agGridFaLocale";
import { orderHistoryColDefs, defaultColDef } from "../utils/tableColDefs";

const toastStore = useToastStore();
const gridApi = ref();
const gridColumnApi = ref();

const onGridReady = (params) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;
  gridApi.value.setDomLayout("autoHeight");
  const getRows = async (params) => {
    try {
      const response = await ApiService.get("order-history");
      if (response.status === 200) {
        params.success({ rowData: response.data.result });
      } else {
        params.fail();
        toastStore.errorMessage = "خطا در دریافت اطلاعات";
      }
    } catch (error) {
      toastStore.errorMessage = "خطا در دریافت اطلاعات";
    }
  };
  params.api.setServerSideDatasource({ getRows });
};
const autoSizeAll = (skipHeader) => {
  const allColumnIds = [];
  gridColumnApi.value?.getColumns().forEach((column) => {
    allColumnIds.push(column.getId());
  });
  if (allColumnIds.length === 0) return;
  gridColumnApi.value.autoSizeColumns(allColumnIds, skipHeader);
};
</script>

<style scoped>
.ag-theme-alpine {
  max-width: 900px;
  margin: 0 auto;
}
</style>
