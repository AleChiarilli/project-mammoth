import { getEmployeesList, getFirstMenuItemCategory } from "@/actions/login";
import { RowCell } from "@/components/RowCell";
import { Table } from "@radix-ui/themes";

export default async function Home() {
  const employees = await getEmployeesList();
  const firstMenuItem = await getFirstMenuItemCategory();

  return (
    <div className="h-screen flex items-center justify-center">
      <Table.Root
        className="flex flex-col w-80 h-88 gap-6 justify-center items-center bg-white rounded-md shadow border border-zinc-200"
        size="3"
        variant="surface"
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Employee</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <RowCell employee={employee} category={firstMenuItem?.category} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
