import { type JSX } from 'solid-js';
import { cx } from 'cva';

import { FormLabel } from './FormLabel';
import { FormError } from './FormError';

export type FormControlProps = {
  class?: string;
  name?: string;
  label?: string;
  required?: boolean;
  error?: string;
  children: JSX.Element;
};

export function FormControl(props: FormControlProps) {
  return (
    <div class={cx("w-full flex flex-col mb-3", props.class)}>
      <FormLabel
        name={props.name}
        label={props.label}
        required={props.required}
      />
      {props.children}
      <FormError
        name={props.name}
        error={props.error}
      />
    </div>
  );
}
