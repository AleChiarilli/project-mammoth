"use client";
import * as Form from "@radix-ui/react-form";
import { Button, Heading, TextField } from "@radix-ui/themes";
import { useFormStatus } from "react-dom";
import { loginAction } from "../actions/login";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Form.Submit
      aria-disabled={pending}
      disabled={pending}
      className={`hover:cursor-pointer ${!pending && "bg-rt-primary"}`}
      asChild
    >
      <Button variant="solid">Log In</Button>
    </Form.Submit>
  );
}

export default function LoginForm({ action }: { action: typeof loginAction }) {
  return (
    <Form.Root
      action={action}
      className="flex flex-col w-80 h-80 gap-6 justify-center items-center bg-white rounded-md shadow border border-zinc-200"
    >
      <Heading as="h1" size="2">
        INICIAR SESIÓN
      </Heading>
      <Form.Field className="w-full px-6" name="username">
        <Form.Control type="text" asChild>
          <TextField.Input required placeholder="Username" />
        </Form.Control>
      </Form.Field>

      <Form.Field className="w-full px-6" name="password">
        <Form.Control type="password" asChild>
          <TextField.Input required placeholder="Password" />
        </Form.Control>
      </Form.Field>
      <SubmitButton />
    </Form.Root>
  );
}
