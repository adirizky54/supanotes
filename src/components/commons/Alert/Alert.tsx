import { type JSX, Show, Switch, Match, createSignal } from "solid-js";
import { Transition } from "solid-headless";
import { cx } from "cva";
import { HiOutlineCheckCircle, HiOutlineX, HiOutlineXCircle, HiOutlineInformationCircle, HiOutlineExclamation } from 'solid-icons/hi';

import { alertCloseStyle, alertStyle, type AlertVariants } from "./Alert.style";

export type AlertProps = {
  /** Alert title */
  title?: string;

  /** Show Icon Alert */
  showIcon?: boolean;

  /** Whether Alert can be closed */
  closable?: boolean;

  /** Custom class */
  class?: string;

  /** Alert message */
  children: JSX.Element;
} & AlertVariants;

export function Alert(props: AlertProps) {
  const [visible, setVisible] = createSignal(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Transition
      show={visible()}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        class={cx(
          alertStyle({
            variant: props.variant,
            status: props.status,
          }),
          props.class,
        )}
      >
        <div class="flex">
          <Show when={props.showIcon}>
            <div class="flex-shrink-0 mr-2">
              <Switch>
                <Match when={props.status === "danger"}>
                  <HiOutlineXCircle class="w-5 h-5" />
                </Match>
                <Match when={props.status === "info"}>
                  <HiOutlineInformationCircle class="w-5 h-5" />
                </Match>
                <Match when={props.status === "success"}>
                  <HiOutlineCheckCircle class="w-5 h-5" />
                </Match>
                <Match when={props.status === "warning"}>
                  <HiOutlineExclamation class="w-5 h-5" />
                </Match>
              </Switch>
            </div>
          </Show>
          <div>
            <Show when={typeof props.title === "string"}>
              <h3 class="text-sm font-medium">{props.title}</h3>
            </Show>
            <p class="text-sm mt-0.5">
              {props.children}
            </p>
          </div>
          <Show when={props.closable}>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  class={alertCloseStyle({ variant: props.variant, status: props.status })}
                  onClick={handleClose}
                >
                  <span class="sr-only">Dismiss</span>
                  <HiOutlineX class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Show>
        </div>
      </div>
    </Transition>
  );
}
