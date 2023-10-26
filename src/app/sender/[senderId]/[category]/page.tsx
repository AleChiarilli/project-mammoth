import { getMenuItems } from "../../actions/menuItems";
import { TabsContent } from "../../components/TabsCategories/client";

export default async function CategoryView({
  params,
  children,
}: {
  params: { category: string };
  children: React.ReactNode;
}) {
  const items = await getMenuItems(params.category);
  return <TabsContent items={items} category={params.category} />;
}
