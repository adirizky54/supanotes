import { createContext, type JSX, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { cx } from "cva";

import { type ButtonProps } from "./Button";

type ButtonGroupOptions = Pick<ButtonProps, "variant" | "color" | "size" | "disabled">;

export type ButtonGroupProps = ButtonGroupOptions & JSX.IntrinsicElements['div'];

type ButtonGroupContextValue = {
  state: ButtonGroupOptions;
}

const ButtonGroupContext = createContext<ButtonGroupContextValue>();

export function ButtonGroup(props: ButtonGroupProps) {
  const [state] = createStore<ButtonGroupOptions>({
    get variant() {
      return props.variant ?? "default";
    },
    get color() {
      return props.color;
    },
    get size() {
      return props.size ?? "md";
    },
    get disabled() {
      return props.disabled;
    },
  });

  const context: ButtonGroupContextValue = {
    state,
  };

  return (
    <ButtonGroupContext.Provider value={context}>
      <div
        class={cx([
          "button-group",
          props.class,
        ])}
        role="group"
      >
        {props.children}
      </div>
    </ButtonGroupContext.Provider>
  );
}

export function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}