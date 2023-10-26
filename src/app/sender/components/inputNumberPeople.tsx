"use client";
import * as Form from "@radix-ui/react-form";
import { TextField } from "@radix-ui/themes";

export default function InputPeopleNumber() {
  return (
    <>
      <Form.Root className="my-10">
        <Form.Field
          className="w-60 mx-6 shadow-[0px_10px_10px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          name="number"
        >
          <Form.Control type="number" asChild>
            <TextField.Input required placeholder="Ingresa nro comensales" />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    </>
  );
}
