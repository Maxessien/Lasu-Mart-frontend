"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import store from "../src/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function Providers({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  );
}
