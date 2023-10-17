import statusCellRender from "./statusCellRenderVue";
import actionBtnCellRender from "./actionBtnCellRenderVue";
import Formatter from "./formatter";

const rowColDef = {
  headerName: "ردیف",
  suppressMenu: "true",
  valueGetter: (params) => Number(params.node.id) + 1,
  width: 70,
};
const priceColDef = {
  field: "price",
  headerName: "مبلغ (ریال)",
  valueFormatter: (params) => Formatter.priceFormatter(params.value),
};
const purchaseDateColDef = {
  field: "purchaseDate",
  headerName: "تاریخ و زمان سفارش",
  valueFormatter: (params) => Formatter.dateTimeFormatter(params.value),
};
const titleColDef = {
  field: "title",
  headerName: "عنوان",
  // flex: 1
};
const statusColDef = {
  field: "status",
  headerName: "وضعیت",
  cellRenderer: statusCellRender,
};
const actionColDef = {
  field: "id",
  headerName: "عملیات",

  cellRenderer: actionBtnCellRender,
};
const weightColDef = {
  field: "weight",
  headerName: "وزن",
  valueFormatter: (params) => Formatter.weightFormatter(params.value),
};
const cableColDef = {
  field: "cable",
  headerName: "نوع کابل",
};
const extVoltColDef = {
  field: "extVolt",
  headerName: "ولتاژ خروجی",
  valueFormatter: (params) => Formatter.voltFormmater(params.value),
};

const orderHistoryColDefs = [
  rowColDef,
  titleColDef,
  priceColDef,
  purchaseDateColDef,
  statusColDef,
  actionColDef,
];
const adaptorColDefs = [
  rowColDef,
  titleColDef,
  priceColDef,
  purchaseDateColDef,
  weightColDef,
  cableColDef,
  extVoltColDef,
];

const defaultColDef = {
  suppressMenu: "true",
  cellStyle: { "text-align": "center" },
};

export { orderHistoryColDefs, adaptorColDefs, defaultColDef };
