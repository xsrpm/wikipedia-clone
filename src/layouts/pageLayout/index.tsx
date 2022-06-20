import React from "react";
import "./styles.css";

type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return <main>{children}</main>;
}
