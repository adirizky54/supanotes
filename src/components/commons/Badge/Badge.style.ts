import { cva, type VariantProps } from 'cva';

export const badgeStyle = cva(
  'inline-flex items-center px-2 py-1 text-xs font-medium rounded-md',
  {
    variants: {
      variant: {
        filled: null,
        light: null,
      },
      color: {
        primary: null,
        info: null,
        warning: null,
        success: null,
        danger: null,
      },
      uppercase: {
        true: 'uppercase tracking-wider',
        false: null,
      },
    },
    compoundVariants: [
      // Variant Filled
      {
        variant: 'filled',
        color: 'primary',
        class: 'text-white bg-blue-500',
      },
      {
        variant: 'filled',
        color: 'info',
        class: 'text-white bg-[#2BBCE0]',
      },
      {
        variant: 'filled',
        color: 'warning',
        class: 'text-white bg-yellow-500',
      },
      {
        variant: 'filled',
        color: 'success',
        class: 'text-white bg-[#16BF45]',
      },
      {
        variant: 'filled',
        color: 'danger',
        class: 'text-white bg-[#E0362B]',
      },
      // Variant Light
      {
        variant: 'light',
        color: 'primary',
        class: 'text-blue-500 bg-blue-50',
      },
      {
        variant: 'light',
        color: 'info',
        class: 'text-cyan-500 bg-cyan-50',
      },
      {
        variant: 'light',
        color: 'warning',
        class: 'text-yellow-500 bg-yellow-50',
      },
      {
        variant: 'light',
        color: 'success',
        class: 'text-green-500 bg-green-50',
      },
      {
        variant: 'light',
        color: 'danger',
        class: 'text-red-500 bg-red-50',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'primary',
      uppercase: false,
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeStyle>;
