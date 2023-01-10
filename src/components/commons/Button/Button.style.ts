import { cva, type VariantProps } from 'cva';

export const buttonStyle = cva(
  'group flex h-min items-center justify-center text-center font-medium shadow-sm rounded-md',
  {
    variants: {
      variant: {
        default: null,
        filled: null,
        light: null,
        outline: null,
        subtle: null,
      },
      color: {
        primary: null,
        info: null,
        warning: null,
        success: null,
        danger: null,
      },
      size: {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-3 py-2 text-sm leading-4',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-4 py-3 text-base',
        xl: 'px-6 py-4 text-base',
      },
      uppercase: {
        true: 'uppercase tracking-wider',
        false: null,
      },
      block: {
        true: 'w-full',
        false: null,
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: null,
      },
    },
    compoundVariants: [
      // Variant Default
      {
        variant: 'default',
        class: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
      },
      // Variant Filled
      {
        variant: 'filled',
        color: 'primary',
        class: 'text-white bg-blue-500 border border-transparent hover:bg-blue-600 disabled:hover:bg-blue-500',
      },
      {
        variant: 'filled',
        color: 'info',
        class: 'text-white bg-cyan-500 border border-transparent hover:bg-cyan-600 disabled:hover:bg-cyan-500',
      },
      {
        variant: 'filled',
        color: 'warning',
        class: 'text-white bg-yellow-500 border border-transparent hover:bg-yellow-600 disabled:hover:bg-yellow-500',
      },
      {
        variant: 'filled',
        color: 'success',
        class: 'text-white bg-green-500 border border-transparent hover:bg-green-600 disabled:hover:bg-green-500',
      },
      {
        variant: 'filled',
        color: 'danger',
        class: 'text-white bg-red-500 border border-transparent hover:bg-red-600 disabled:hover:bg-red-500',
      },
      // Variant Outline
      {
        variant: 'outline',
        color: 'primary',
        class: 'text-blue-500 hover:text-white disabled:hover:text-blue-500 bg-transparent hover:bg-blue-500 disabled:hover:bg-transparent border border-blue-500',
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'text-cyan-500 hover:text-white disabled:hover:text-cyan-500 bg-transparent hover:bg-cyan-500 disabled:hover:bg-transparent border border-cyan-500',
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'text-yellow-500 hover:text-white disabled:hover:text-yellow-500 bg-transparent hover:bg-yellow-500 disabled:hover:bg-transparent border border-yellow-500',
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'text-green-500 hover:text-white disabled:hover:text-green-500 bg-transparent hover:bg-green-500 disabled:hover:bg-transparent border border-green-500',
      },
      {
        variant: 'outline',
        color: 'danger',
        class: 'text-red-500 hover:text-white disabled:hover:text-red-500 bg-transparent hover:bg-red-500 disabled:hover:bg-transparent border border-red-500',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      block: false,
      disabled: false,
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonStyle>;
