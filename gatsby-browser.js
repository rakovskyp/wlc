import "./src/styles/global.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/playfair-display"

export const wrapPageElement = ({ element }) => (
  <>
    <Analytics />
    {element}
  </>
);
