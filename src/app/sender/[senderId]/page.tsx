import "@radix-ui/themes/styles.css";
import { Table, Button, ScrollArea, Box } from "@radix-ui/themes";
import InputPeopleNumber from "../components/inputNumberPeople";
import SelectDemo from "../components/tableSelector";
import { getMenuItemsCategories } from "../actions/menuItems";
import { TabsRoot } from "../components/TabsCategories/client";

export default async function SenderView({
  params,
  children,
}: {
  params: { senderId: string };
  children: React.ReactNode;
}) {
  const categories = await getMenuItemsCategories();
  return (
    <div className="h-screen flex flex-col">
      <ScrollArea
        type="always"
        size="1"
        scrollbars="vertical"
        className="h-2/5"
      >
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

      <div className="flex justify-between h-1/5">
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

      {/* TODO: Tabs.Content must be within Tabs.Root */}
      <TabsRoot categories={categories}>{children}</TabsRoot>
    </div>
  );
}
