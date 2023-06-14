import {
  JHolderUserType,
  JholderAlbumType,
  JholderPostType,
} from "@/hooks/useApi/types";
import useApi from "@/hooks/useApi/useApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type UserDetailParamType = {
  userId: string | undefined;
};

export default function UserDetails() {
  const [user, setUser] = useState<JHolderUserType | null>(null);
  const [albums, setAlbums] = useState<JholderAlbumType[] | null>(null);
  const [posts, setPosts] = useState<JholderPostType[] | null>(null);
  const [initialized, setInitialized] = useState(false);

  const api = useApi();
  const params: Readonly<Partial<UserDetailParamType>> =
    useParams<UserDetailParamType>();

  useEffect(() => {
    (async () => {
      if (params.userId) {
        const promises = [];
        promises.push(api.getUser(parseInt(params.userId)));
        promises.push(api.getAlbums(parseInt(params.userId)));
        promises.push(api.getPosts(parseInt(params.userId)));

        const results = await Promise.all(promises);

        setUser(results[0] as JHolderUserType);
        setAlbums(results[1] as JholderAlbumType[]);
        setPosts(results[2] as JholderPostType[]);
        setInitialized(true);
      }
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
    <>
      <p className="text-2xl font-bold text-center leading-10 my-1">
        Blogger Detail Page
      </p>
      <hr />
    </>
  );
}
