<template>
  <div class="sm:mx-4 px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">تکمیل و پرداخت</h1>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="md:px-1 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg detail-conteiner"
          >
            <ag-grid-vue
              class="ag-theme-alpine"
              :columnDefs="adaptorColDefs"
              :defaultColDef="defaultColDef"
              @grid-ready="onGridReady"
              @first-data-rendered="autoSizeAll(false)"
              :enableRtl="true"
              :generalMenuTab="false"
              :animateRows="true"
              :suppressSizeToFit="true"
              :localeText="AG_GRID_LOCALE_FA"
              :rowData="rowData"
              domLayout="autoHeight"
            ></ag-grid-vue>
            <div
              class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 product-card"
            >
              <img
                class="p-8 rounded-t-lg"
                :src="selectedProductStore.selectedProductDetail.picture"
                alt="product image"
              />
              <div class="px-5 pb-5">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ selectedProductStore.allDetail.title }}
                </h5>
                <div class="flex items-center"></div>
                <div class="flex items-center justify-end">
                  <span
                    class="text-3xl mt-2.5 mb-5 font-bold text-gray-900 dark:text-white"
                    >{{
                      Formatter.priceFormatter(
                        selectedProductStore.allDetail.price
                      )
                    }}</span
                  >
                </div>
                <ul role="list" class="flex justify-between my-7">
                  <li class="flex items-base">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z"
                      />
                    </svg>
                    <span
                      class="text-xs font-small leading-tight text-gray-500 dark:text-gray-400"
                      >{{
                        Formatter.voltFormmater(
                          selectedProductStore.allDetail.extVolt
                        )
                      }}</span
                    >
                  </li>
                  <li class="flex items-base">
                    <svg
                      class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M12,3A4,4 0 0,1 16,7C16,7.73 15.81,8.41 15.46,9H18C18.95,9 19.75,9.67 19.95,10.56C21.96,18.57 22,18.78 22,19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19C2,18.78 2.04,18.57 4.05,10.56C4.25,9.67 5.05,9 6,9H8.54C8.19,8.41 8,7.73 8,7A4,4 0 0,1 12,3M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5Z"
                      />
                    </svg>
                    <span
                      class="text-xs font-normal leading-tight text-gray-500 dark:text-gray-400"
                      >{{
                        Formatter.weightFormatter(
                          selectedProductStore.allDetail.weight
                        )
                      }}</span
                    >
                  </li>
                  <li class="flex items-base">
                    <svg
                      class="flex-shrink-0 w-5 h-4 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M6 12H18C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14H6C5.45 14 5 13.55 5 13C5 12.45 5.45 12 6 12M6 10C4.34 10 3 11.34 3 13C3 14.66 4.34 16 6 16H18C19.66 16 21 14.66 21 13C21 11.34 19.66 10 18 10H6M6 8H18C20.76 8 23 10.24 23 13C23 15.76 20.76 18 18 18H6C3.24 18 1 15.76 1 13C1 10.24 3.24 8 6 8Z"
                      />
                    </svg>
                    <span
                      class="text-xs font-normal leading-tight text-gray-500 dark:text-gray-400"
                      >{{ selectedProductStore.allDetail.cable }}</span
                    >
                  </li>
                </ul>
                <button
                  type="button"
                  class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                >
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useSelectedProductStore } from "../stores/selectedProduct";
const selectedProductStore = useSelectedProductStore();

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import { AgGridVue } from "ag-grid-vue3";

import { ref } from "vue";
import AG_GRID_LOCALE_FA from "../utils/agGridFaLocale";
import Formatter from "../utils/formatter";
import { adaptorColDefs, defaultColDef } from "../utils/tableColDefs";

const gridApi = ref();
const gridColumnApi = ref();
const rowData = ref([]);

const onGridReady = (params) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;
  gridApi.value.setDomLayout("autoHeight");
  rowData.value = [selectedProductStore.allDetail];
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
  max-width: 930px;
}

.detail-conteiner {
  display: grid;
  grid-template-columns: 10fr 3fr;
  gap: 1rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .detail-conteiner {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
