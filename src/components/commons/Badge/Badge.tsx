import { type JSX, Show, splitProps } from 'solid-js';
import { cx } from 'cva';

import { badgeStyle, type BadgeVariants } from './Badge.style';

export type BadgeProps = {
  /** Adds icon before badge label  */
  leftIcon?: JSX.Element;

  /** Adds icon after badge label  */
  rightIcon?: JSX.Element;
} & BadgeVariants & JSX.ButtonHTMLAttributes<HTMLSpanElement>;

export function Badge(props: BadgeProps) {
  const [local, others] = splitProps(props, [
    "variant",
    "color",
    "leftIcon",
    "rightIcon",
    "uppercase",
  ]);

  return (
    <span
      class={cx(
        badgeStyle({
          variant: local.variant,
          color: local.color,
          uppercase: local.uppercase,
        }),
        others.class,
      )}
      {...others}
    >
      <Show when={local?.leftIcon}>
        <span class="-ml-1 mr-1 w-4 h-4">{local?.leftIcon}</span>
      </Show>
      <span>{others.children}</span>
      <Show when={local?.rightIcon}>
        <span class="ml-1 -mr-1 w-4 h-4">{local?.rightIcon}</span>
      </Show>
    </span>
  );
}
