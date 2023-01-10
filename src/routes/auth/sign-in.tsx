import { createForm, email, Field, Form, required } from "@modular-forms/solid";
import { Title } from "solid-start";

import type { LoginType } from "~/types";

import { Card } from "~/components/commons/Card";
import { FormControl } from "~/components/commons/Form";
import { Input } from "~/components/commons/Input";
import { Button } from '~/components/commons/Button';

export default function Login() {
  const form = createForm<LoginType>();

  const handleSubmit = (values: LoginType) => {
    console.log(values);
  };

  return (
    <>
      <Title>Sign in - Supanotes</Title>
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
          Register now!
        </a>
      </p>
      <Card class="mt-8">
        <Form of={form} class="space-y-6" onSubmit={handleSubmit}>
          <Field
            of={form}
            name="email"
            validate={[
              required('Email tidak boleh kosong!'),
              email('Email tidak valid!'),
            ]}
          >
            {(field) => (
              <FormControl
                label="Email"
                name={field.name}
                error={field.error}
                required
              >
                <Input
                  {...field.props}
                  value={field.value}
                  type="email"
                  placeholder="Masukkan Email"
                  autocomplete="off"
                />
              </FormControl>
            )}
          </Field>
          <Field
            of={form}
            name="password"
            validate={[
              required('Password tidak boleh kosong!'),
            ]}
          >
            {(field) => (
              <FormControl
                label="Password"
                name={field.name}
                error={field.error}
                required
              >
                <Input
                  {...field.props}
                  value={field.value}
                  type="password"
                  placeholder="Masukkan Password"
                  autocomplete="off"
                />
              </FormControl>
            )}
          </Field>
          <div class="flex items-center justify-end">
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
            </div>
          </div>
          <div class="flex flex-col space-y-4">
            <Button variant="filled" color="primary" type="submit" block>
              Sign in
            </Button>
            <Button variant="default" block>
              Sign in with Google
            </Button>
          </div>
        </Form>
      </Card>
    </>
  );
}
