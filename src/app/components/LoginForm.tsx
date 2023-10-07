"use client";
import * as Form from "@radix-ui/react-form";
import { Button, Heading, TextField } from "@radix-ui/themes";

export default function LoginForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  return (
    <Form.Root
      action={action}
      className="flex flex-col w-80 h-80 gap-6 justify-center items-center bg-white rounded-md shadow border border-zinc-200"
    >
      <Heading as="h1" size="2">
        INICIAR SESIÓN
      </Heading>
      <Form.Field className="w-full px-6" name="email">
        <Form.Control type="email" asChild>
          <TextField.Input placeholder="john.doe@restaurant.com" />
        </Form.Control>
      </Form.Field>

      <Form.Field className="w-full px-6" name="password">
        <Form.Control type="password" asChild>
          <TextField.Input placeholder="Password" />
        </Form.Control>
      </Form.Field>
      <Form.Submit className="hover:cursor-pointer" asChild>
        <Button variant="solid">Log In</Button>
      </Form.Submit>
    </Form.Root>
  );
}
