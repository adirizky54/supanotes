import { Show, type JSX, splitProps } from "solid-js";
import { cx } from "cva";

import { inputStyle, type InputVariants } from "./Input.style";

export type InputProps = {
  /** The prefix icon for the Input */
  leftIcon?: JSX.Element;

  /** The suffix icon for the Input */
  rightIcon?: JSX.Element;
} & InputVariants & JSX.InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  const [local, others] = splitProps(props, [
    "status",
    "size",
    "leftIcon",
    "rightIcon",
  ]);

  return (
    <div class="relative w-full">
      <Show
        when={local.leftIcon}
        children={
          <span class="input-prefix">
            {local.leftIcon}
          </span>
        }
      />
      <input
        {...others}
        class={cx(
          inputStyle({
            status: local.status,
            size: local.size,
            disabled: others.disabled,
          }),
          local.leftIcon ? "pl-9" : null,
          local.rightIcon ? "pr-9" : null,
          others.class,
        )}
      />
      <Show
        when={local.rightIcon}
        children={
          <span class="input-suffix">
            {local.rightIcon}
          </span>
        }
      />
    </div>
  );
}