import Form from "@/components/Form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <section className="w-full bg-[#007BFF] min-h-[230px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          Submit your startup
        </h1>
      </section>
      <Form />
    </>
  );
};

export default page;
