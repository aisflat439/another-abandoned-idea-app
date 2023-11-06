import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const hello = trpc.idea.list.useQuery({ name: "hello" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <p>{hello.data.yee}</p>
      </div>
    </>
  );
}
