import { JholderCommentType, JholderPostType } from "@/hooks/useApi/types";
import useApi from "@/hooks/useApi/useApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type PostCommentsParamsType = {
  userId: string | undefined;
  postId: string | undefined;
};

export default function UserPosts() {
  const api = useApi();
  const params = useParams<PostCommentsParamsType>();
  console.log(params);

  const [comments, setComments] = useState<JholderCommentType[]>();
  const [post, setPost] = useState<JholderPostType>();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      if (params.postId && !params.userId) {
        return <p>The problem is not with you. Please try again later!</p>;
      }

      const promises = [];

      promises.push(api.getPost(parseInt(params.postId as string)));
      promises.push(api.getComments(parseInt(params.postId as string)));

      const results = await Promise.all(promises);

      setPost(results[0] as JholderPostType);
      setComments(results[1] as JholderCommentType[]);
      setInitialized(true);
    })();
  }, []);
  if (!initialized) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }
  return (
    <div>
      <h5 className="m-3 text-center text-2xl font-bold tracking-tight text-violet-600 my-5">
        <span className="text-black">Post Name:</span>
        <hr />
        {post?.title}
      </h5>
      <h5 className="m-3 text-center text-2xl font-bold tracking-tight text-violet-600 my-5">
        <span className="text-black my-5">Comments:</span>
        <hr />
      </h5>
      <div className="md:columns-3 gap-3 my-3">
        {comments
          ?.filter(
            (comment) => parseInt(comment.postId) === parseInt(params.postId)
          )
          .map((comment, index) => {
            return (
              <div className="flex justify-center flex-wrap m-3">
                <div
                  key={index}
                  className="w-full max-w-md p-4 m-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li className="py-1 sm:py-2">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Comment Name:
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {comment.name}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-1 sm:py-2">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Writer:
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {comment.email}
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-1 sm:py-2">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Comment Text:
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400 text-ellipsis">
                              {comment.body}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
