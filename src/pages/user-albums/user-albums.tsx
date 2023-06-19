import {
  JHolderUserType,
  JholderAlbumPhotoType,
  JholderAlbumType,
} from "@/hooks/useApi/types";
import useApi from "@/hooks/useApi/useApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type AlbumsParamsType = {
  userId: string | undefined;
  albumId: string | undefined;
};

export default function UserAlbums() {
  const params = useParams<AlbumsParamsType>();
  const api = useApi();

  const [user, setUser] = useState<JHolderUserType | null>(null);
  const [album, setAlbum] = useState<JholderAlbumType | null>(null);
  const [photos, setPhotos] = useState<JholderAlbumPhotoType[] | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      if (!params.albumId && !params.userId) {
        return <p>The problem is not with you. Please try again later!</p>;
      }
      const promises = [];
      promises.push(api.getUser(parseInt(params.userId as string)));
      promises.push(api.getAlbum(parseInt(params.albumId as string)));
      promises.push(api.getAlbumPhotos(parseInt(params.albumId as string)));

      const results = await Promise.all(promises);

      setUser(results[0] as JHolderUserType);
      setAlbum(results[1] as JholderAlbumType);
      setPhotos(results[2] as JholderAlbumPhotoType[]);

      setInitialized(true);

      console.log("user", results[0]);
    })();
  }, []);
  if (!initialized) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  return <div>{album?.title}</div>;
}
