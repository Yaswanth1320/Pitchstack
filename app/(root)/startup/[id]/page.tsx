import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import {
  PLAYLIST_BY_SLUG_QUERY,
  STARTUP_BY_ID_QUERY,
} from "@/sanity/lib/queries";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import markdownit from "markdown-it";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import StartupCard, { StartupCardProps } from "@/components/StartupCard";
const md = markdownit();
export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const [post, { select: editorPicks }] = await Promise.all([
    client.fetch(STARTUP_BY_ID_QUERY, { id }),
    client.fetch(PLAYLIST_BY_SLUG_QUERY, {
      slug: "editor-picks",
    }),
  ]);

  if (!post) {
    return notFound();
  }
  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="w-full bg-[#007BFF] min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          {post.title}
        </h1>
        <p className="font-medium text-[20px] text-white max-w-5xl text-center break-words mb-6">
          {post.description}
        </p>
        <p className="bg-[#ff006e] px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-black before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-black after:border-l-[10px] after:border-l-transparent">
          {formatDate(post?._createdAt)}
        </p>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <img
          src={post.image}
          alt="thumnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex gap-5 justify-between items-center">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author?.image || "/default-avatar.png"}
                alt="author"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-[20px] text-black">
                  {post.author?.name}
                </span>
                <span className="text-gray-500 font-medium text-[16px]">
                  @{post.author?.username}
                </span>
              </div>
            </Link>
            <p className="font-medium text-[18px] px-4 py-2 rounded-sm bg-[#000814] text-white">
              {post.category}
            </p>
          </div>
          <h3 className="text-[30px] font-bold text-black">Startup Details</h3>
          {parsedContent ? (
            <article
              className="prose w-[1500px] break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="text-black text-sm font-normal">
              No details provided
            </p>
          )}
        </div>
        <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto" />

        {editorPicks?.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <p className="font-semibold text-[30px] text-black">Editor Picks</p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-5">
              {editorPicks.map((post: StartupCardProps, i: number) => (
                <StartupCard key={i} post={post} />
              ))}
            </ul>
          </div>
        )}

        <Suspense
          fallback={
            <Skeleton className="bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3" />
          }
        >
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
