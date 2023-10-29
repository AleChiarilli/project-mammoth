"use client";
import { Table } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export function RowCell({
  employee,
  category,
}: {
  employee: { id: number; name: string; username: string };
  category?: string;
}) {
  const router = useRouter();
  const path = `/sender/${employee.id}/${category}`;
  const navigate = () => router.push(path);

  return (
    <Table.Cell
      className="hover:cursor-pointer hover:bg-zinc-100"
      onClick={navigate}
    >
      {employee.name}
    </Table.Cell>
  );
}
