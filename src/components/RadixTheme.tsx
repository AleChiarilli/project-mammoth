"use client";
import { Theme } from "@radix-ui/themes";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const RadixTheme: React.FC<Props> = ({ children }) => (
  <Theme>{children}</Theme>
);
