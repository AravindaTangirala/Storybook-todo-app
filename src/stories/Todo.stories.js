import React from "react";
import Todo from "../Todo";

import { Button } from "./Button";

export default {
  title: "Todo",
  component: Todo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
export const NormalTodo = () => <Todo title="My First Todo" />;
