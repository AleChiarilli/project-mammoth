import "@radix-ui/themes/styles.css";
import { Table, Button, ScrollArea, Box } from "@radix-ui/themes";

export default function SenderView({
  params,
}: {
  params: { senderId: string };
}) {
  return (
    <>
      {params.senderId}
      <ScrollArea type="always" size="1" scrollbars="vertical" className="h-80">
        <Box p="2" pr="8" className="h-80 w-screen">
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
            </Table.Body>
          </Table.Root>
        </Box>
      </ScrollArea>
    </>
  );
}
