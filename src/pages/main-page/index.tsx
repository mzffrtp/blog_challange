import UsersList from "@/components/users-list";
import { JHolderUserType } from "@/hooks/useApi/types";
import useApi, { JHolderApi } from "@/hooks/useApi/useApi";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [users, setUsers] = useState<JHolderUserType[] | null>(null);

  const api: JHolderApi = useApi();
  useEffect(() => {
    (async () => {
      const result: AxiosResponse<JHolderUserType[]> = await api.users();
      setUsers(result.data);
    })();
  }, []);
  return (
    <>
      {users === null ? (
        // TODO: Error component may be created.
        <p>Loading</p>
      ) : (
        <>
          <p className="text-2xl font-bold text-center leading-10 my-1">
            Bloggers List
          </p>
          <hr />
          <div className="m-auto p-3 gap-3 flex flex-auto flex-wrap">
            {users.map((user, index) => (
              <UsersList key={index} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
