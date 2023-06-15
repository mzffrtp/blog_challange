import { JholderPostType } from "@/hooks/useApi/types";

export type UserDetailPostsType = {
  post: JholderPostType;
};

export default function UserDeailPosts({ post }: UserDetailPostsType) {
  console.log(post.body);

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white h-24 text-center">
          <span className="flex-1 ml-3 whitespace-nowrap text-lime-400 ">
            Post Title:
          </span>{" "}
          <hr />
          <span className="text-fuchsia-400 py-3">"{post.title}"</span>
        </h5>
        <ul className="my-4 space-y-3">
          <li>
            <p className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white h-60 text-center">
              {post.body}
            </p>
          </li>
        </ul>
        <div className="flex justify-center">
          <button
            type="button"
            className="focus:outline-none text-white bg-lime-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}
