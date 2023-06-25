import UsersList from "@/pages/user-details/users-list";
import { JHolderUserType } from "@/hooks/useApi/types";
import useApi, { JHolderApi } from "@/hooks/useApi/useApi";
import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { UserStateType, setUsers } from "@/redux/userSlice";

export default function MainPage() {
  const api: JHolderApi = useApi();

  const userState: UserStateType = useSelector(
    (state: RootState) => state.userState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (userState.users === null) {
        const result: AxiosResponse<JHolderUserType[]> = await api.users();
        dispatch(setUsers(result.data));
      }
    })();
  }, []);
  return (
    <>
      {userState.users === null ? (
        // TODO: Error component may be created.
        <p>Loading</p>
      ) : (
        <>
          <p className="text-2xl font-bold text-center leading-10 my-1">
            Bloggers List
          </p>
          <hr />
          <div className="m-auto p-3 gap-3 flex flex-auto flex-wrap">
            {userState.users.map((user, index) => (
              <UsersList key={index} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
