import React from "react";
import TodoContainer from "../TodoContainer";

import { Button } from "./Button";

export default {
  title: "TodoContainer",
  component: TodoContainer,
};
export const NormalTodo = () => (
  <TodoContainer todos={["storybook demo", "first time storybook"]} />
);
