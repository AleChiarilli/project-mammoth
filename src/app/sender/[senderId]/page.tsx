import "@radix-ui/themes/styles.css";
import { Table, Button } from "@radix-ui/themes";

export default function SenderView({
  params,
}: {
  params: { senderId: string };
}) {
  return (
    <>
      {params.senderId}
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Resumen del Pedido</Table.ColumnHeaderCell>
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
    </>
  );
}
