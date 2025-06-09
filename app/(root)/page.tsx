import { auth } from "@/auth";
import SerachForm from "@/components/SerachForm";
import StartupCard, { StartupCardProps } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();
  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });
  return (
    <>
      <section className="w-full bg-[#007BFF] min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 font-abc">
        <h1 className="uppercase bg-black px-6 py-3 font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Launch Your Dream. Pitch Your Startup to the World.
        </h1>
        <p className="font-medium text-[20px] text-white max-w-2xl text-center break-words">
          Turn your startup pitch into momentum with community, visibility, and
          investor reach.
        </p>
        <SerachForm query={query} />
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardProps) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">
              No startups found
            </p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
