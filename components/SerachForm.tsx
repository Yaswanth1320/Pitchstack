import Form from "next/form";
import SerachFormReset from "./SerachFormReset";
import { Search } from "lucide-react";

const SerachForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black  text-[24px] mt-8 px-5 flex flex-row items-center gap-5"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none"
        placeholder="Search for startups, founders, or investors"
      />
      <div className="flex gap-2">
        {query && <SerachFormReset />}
        <button
          type="submit"
          className="size-[40px] bg-black flex justify-center items-center !important text-white"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SerachForm;
