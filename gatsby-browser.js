import "./src/styles/global.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

export const wrapPageElement = ({ element }) => (
  <>
    <Analytics />
    {element}
  </>
);
