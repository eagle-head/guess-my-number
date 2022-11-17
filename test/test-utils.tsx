import React, { FC, type PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react-native";

type Options = Parameters<typeof render>[1];

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<Options, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";
export { customRender as render };
