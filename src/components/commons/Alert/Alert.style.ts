import { cva, type VariantProps } from 'cva';

export const alertStyle = cva('p-4 mb-2 rounded-md', {
  variants: {
    variant: {
      filled: null,
      light: null,
    },
    status: {
      info: null,
      warning: null,
      success: null,
      danger: null,
    },
  },
  compoundVariants: [
    // Variant Filled
    {
      variant: 'filled',
      status: 'info',
      class: 'text-white bg-cyan-500',
    },
    {
      variant: 'filled',
      status: 'warning',
      class: 'text-white bg-yellow-500',
    },
    {
      variant: 'filled',
      status: 'success',
      class: 'text-white bg-green-500',
    },
    {
      variant: 'filled',
      status: 'danger',
      class: 'text-white bg-red-500',
    },
    // Variant Light
    {
      variant: 'light',
      status: 'info',
      class: 'text-cyan-500 bg-cyan-100',
    },
    {
      variant: 'light',
      status: 'warning',
      class: 'text-yellow-500 bg-yellow-100',
    },
    {
      variant: 'light',
      status: 'success',
      class: 'text-green-500 bg-green-100',
    },
    {
      variant: 'light',
      status: 'danger',
      class: 'text-red-500 bg-red-100',
    },
  ],
  defaultVariants: {
    variant: 'filled',
    status: 'info',
  },
});

export const alertCloseStyle = cva(
  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        filled: null,
        light: null,
      },
      status: {
        info: null,
        warning: null,
        success: null,
        danger: null,
      },
    },
    compoundVariants: [
      // Variant Filled
      {
        variant: 'filled',
        class: 'text-white bg-transparent focus:ring-offset-slate-100 focus:ring-slate-500',
      },
      // Variant Light
      {
        variant: 'light',
        status: 'info',
        class: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-offset-cyan-100 focus:ring-cyan-600',
      },
      {
        variant: 'light',
        status: 'warning',
        class: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-offset-yellow-100 focus:ring-yellow-600',
      },
      {
        variant: 'light',
        status: 'success',
        class: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-offset-green-100 focus:ring-green-600',
      },
      {
        variant: 'light',
        status: 'danger',
        class: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-offset-red-100 focus:ring-red-600',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      status: 'info',
    },
  },
);

export type AlertVariants = VariantProps<typeof alertStyle>;
