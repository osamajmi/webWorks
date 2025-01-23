import { configureStore } from "@reduxjs/toolkit";
import tableOrder from "../slice/tableOrder";

export const store = configureStore({
  reducer: {
    tableOrder: tableOrder,
  },
});
