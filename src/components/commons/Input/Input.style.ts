import { cva, type VariantProps } from 'cva';

export const inputStyle = cva(
  'text-gray-900 shadow-sm block w-full rounded-md border border-gray-300 focus:border-blue-600 focus:ring-blue-500',
  {
    variants: {
      status: {
        success: null,
        warning: null,
        error: null,
      },
      size: {
        small: 'p-2 text-xs',
        default: 'p-2.5 text-sm',
        large: 'p-3 text-base',
      },
      disabled: {
        true: 'bg-gray-200 text-gray-400 cursor-not-allowed',
        false: null,
      },
    },
    compoundVariants: [
      {
        status: 'success',
        class: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      },
      {
        status: 'warning',
        class: 'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500',
      },
      {
        status: 'error',
        class: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      },
    ],
    defaultVariants: {
      size: 'default',
    },
  },
);

export type InputVariants = VariantProps<typeof inputStyle>;
