import { Expandable } from '../Expandable';

export type FormErrorProps = {
  name?: string;
  error?: string;
};

/**
 * Input error that tells the user what to do to fix the problem.
 */
export function FormError(props: FormErrorProps) {
  return (
    <Expandable expanded={!!props.error}>
      <div class="pt-1 text-sm text-red-600" id={`${props.name}-error`}>
        {props.error}
      </div>
    </Expandable>
  );
}
