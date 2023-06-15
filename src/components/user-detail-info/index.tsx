import { JHolderUserType } from "@/hooks/useApi/types";

export type UserDetailInfoPropsType = {
  user: JHolderUserType | null;
};

export default function UserDetailInfo({ user }: UserDetailInfoPropsType) {
  return (
    <div className="w-full max-w-md p-4 mb-3 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-1">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {user?.name}
        </h5>
      </div>
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
                  User Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.username}
                </p>
              </div>
            </div>
          </li>
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Email
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </div>
          </li>
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Phone
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.phone}
                </p>
              </div>
            </div>
          </li>
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Website
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.website}
                </p>
              </div>
            </div>
          </li>
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Proficion
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.company.bs}
                </p>
              </div>
            </div>
          </li>
          <li className="py-1 sm:py-2">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Qutoe
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {user?.company.catchPhrase}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
