import { type JSX, Show, splitProps } from "solid-js";
import { cx } from "cva";

import { buttonStyle, type ButtonVariants } from "./Button.style";
import { LoadingOval } from "../Icons";
import { useButtonGroupContext } from "./ButtonGroup";

export type ButtonProps = {
  loading?: boolean;
  icon?: JSX.Element;
} & ButtonVariants & JSX.ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  const buttonGroupContext = useButtonGroupContext();

  const [local, others] = splitProps(props, [
    "variant",
    "color",
    "size",
    "uppercase",
    "block",
    "loading",
    "icon",
  ]);

  return (
    <button
      {...others}
      class={cx(
        buttonStyle({
          variant: local.variant ?? buttonGroupContext?.state?.variant,
          color: local.color ?? buttonGroupContext?.state?.color,
          size: local.size ?? buttonGroupContext?.state?.size,
          uppercase: local.uppercase,
          block: local.block,
          disabled: (others.disabled ?? buttonGroupContext?.state?.disabled) || local.loading,
        }),
        others.class,
      )}
      disabled={(others.disabled ?? buttonGroupContext?.state?.disabled) || local.loading}
    >
      <Show when={local.icon || local.loading}>
        <span class="-ml-1 mr-2 w-4 h-4">
          {local.loading ? <LoadingOval size={18} /> : props.icon}
        </span>
      </Show>
      {others.children}
    </button>
  );
}
