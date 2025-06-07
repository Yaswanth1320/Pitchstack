import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Startup, Author } from "@/sanity/types";

export type StartupCardProps = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupCardProps }) => {
  const {
    _createdAt,
    _id,
    views,
    author,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className="group bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-[5px_5px_0_0_black] hover:border-[#007BFF] transition-all duration-500 hover:shadow-[5px_5px_0_0_#007BFF] hover:bg-[#b3d9ff]">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100  py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-[#007BFF]" />
          <span className="font-medium text-[16px] text-black">{views}</span>
        </div>
      </div>
      <div className="mt-3 gap-5 flex items-center justify-between">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-[16px] text-black line-clamp-1">
              {author?.name || "Unknown Author"}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={"https://placehold.co/400x400"}
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
          {description}
        </p>
        <img
          src={image}
          alt="placeholder"
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>
      <div className="mt-5 flex justify-between gap-3">
        <Link href={`?/query=${category?.toLowerCase()}`}>
          <p className="font-medium text-[16px] text-black">{category}</p>
        </Link>
        <Button
          className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important"
          asChild
        >
          <Link href={`/startup/${_id}`}>View Startup</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
