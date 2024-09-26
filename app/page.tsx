import Messages from "@/components/MessageCard";

export default function Home() {
  return (
    <div className=" h-[calc(100dvh-70px)] overflow-y-auto">
      <h2 className="text-center md:text-4xl text-2xl font-semibold py-4 underline">Recent Blog Posts</h2>
      <div className="flex justify-center">
        <div className="px-2 md:grid md:grid-cols-2 md:gap-6 py-4">
          <Messages />
        </div>
      </div>
    </div>
  );
}
