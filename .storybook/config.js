import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/components/shared/global";
import "storybook-chromatic";

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
