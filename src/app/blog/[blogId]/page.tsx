export default async function DynamicBlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-4xl">
        This is Dynamic Blog Page component: {blogId}
      </h1>
    </div>
  );
}
