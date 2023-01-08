import { Show } from 'solid-js';

export type FormLabelProps = {
  name?: string;
  label?: string;
  required?: boolean;
};

/**
 * Input label for a form field.
 */
export function FormLabel(props: FormLabelProps) {
  return (
    <Show when={props.label}>
      <label class='text-sm font-medium text-gray-700 mb-2' for={props.name}>
        {props.label}{' '}
        {props.required && (
          <span class="ml-0.5 text-red-600 dark:text-red-400">*</span>
        )}
      </label>
    </Show>
  );
}
