export default function SenderView({
  params,
}: {
  params: { senderId: string };
}) {
  return <>{params.senderId}</>;
}
