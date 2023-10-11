import "@radix-ui/themes/styles.css";
import { Table, Button, ScrollArea, Box, TextField } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import InputPeopleNumber from "../components/inputNumberPeople";
import SelectDemo from "../components/tableSelector";
import TabsCategories from "../components/sections";

export default function SenderView({
  params,
}: {
  params: { senderId: string };
}) {
  return (
    <>
      {params.senderId}
      <ScrollArea type="always" size="1" scrollbars="vertical" className="h-56">
        <Box p="2" pr="8" className="h-56 w-screen">
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>
                  Resumen del Pedido
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>
                  <Button size="1" variant="solid" radius="full">
                    -
                  </Button>
                  Unidades
                  <Button size="1" variant="solid" radius="full">
                    +
                  </Button>
                </Table.RowHeaderCell>
                <Table.Cell>Nombre del Producto</Table.Cell>
                <Table.Cell>Descripción del Producto</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Box>
      </ScrollArea>

      <div className="flex justify-between">
        <div>
          <InputPeopleNumber />
          <SelectDemo />
        </div>

        <div className="m-5 flex flex-col gap-5">
          <Button variant="surface" color="crimson" className="h-16 w-60">
            Borrar orden
          </Button>
          <Button variant="surface" color="cyan" className="h-16 w-60">
            Enviar orden a cocina
          </Button>
        </div>
      </div>
      <TabsCategories />
    </>
  );
}
