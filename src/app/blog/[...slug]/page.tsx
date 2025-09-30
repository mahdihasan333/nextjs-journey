export default async function CatchAllRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  console.log(await params);
  return (
    <div>
      <h1 className="text-4xl">This is Catch All Route component</h1>
    </div>
  );
}
