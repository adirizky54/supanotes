import { type JSX, Show } from 'solid-js';
import { cx } from 'cva';

export type CardProps = {
  /** Card title  */
  title?: string;

  /** Content to render in the top-right corner of the card  */
  extra?: JSX.Element;

  /** Class name to apply to the card head */
  headerClass?: string;

  /** Class name to apply to the card body */
  bodyClass?: string;
} & JSX.ButtonHTMLAttributes<HTMLDivElement>;

export function Card(props: CardProps) {
  return (
    <div
      class={cx(
        ["divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow"],
        [props.class],
      )}
    >
      <Show when={typeof props.title !== 'undefined' || typeof props.extra !== 'undefined'}>
        <div class={cx(["px-4 py-5 sm:px-5"], [props.headerClass])}>
          {props.title}
        </div>
      </Show>
      <div class={cx(["px-4 py-5 sm:p-5"], [props.bodyClass])}>
        {props.children}
      </div>
    </div>
  );
}
