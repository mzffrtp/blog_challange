import useApi, { JHolderApi } from "@/hooks/useApi/useApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type UserDetailParamType = {
  userId: string | undefined;
};

export default function UserDetails() {
  const api = useApi();
  const params: Readonly<Partial<UserDetailParamType>> =
    useParams<UserDetailParamType>();

  useEffect(() => {
    (async () => {
      if (params.userId) {
        const userDetail = await api.getUser(parseInt(params.userId));
      }
    })();
  }, []);
  return (
    <>
      <p className="text-2xl font-bold text-center leading-10 my-1">
        User Detail Page
      </p>
      <hr />
    </>
  );
}
