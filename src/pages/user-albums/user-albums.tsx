import { JholderAlbumPhotoType, JholderAlbumType } from "@/hooks/useApi/types";

import useApi from "@/hooks/useApi/useApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AlbumPhotos from "./components/album-photos/album-photos";

export type AlbumsParamsType = {
  userId: string | undefined;
  albumId: string | undefined;
};

export default function UserAlbums() {
  const params = useParams<AlbumsParamsType>();
  const api = useApi();

  console.log("albumparams", params);

  const [album, setAlbum] = useState<JholderAlbumType | null>(null);
  const [photos, setPhotos] = useState<JholderAlbumPhotoType[] | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      if (!params.albumId && !params.userId) {
        return <p>The problem is not with you. Please try again later!</p>;
      }
      const promises = [];

      promises.push(api.getAlbum(parseInt(params.albumId as string)));
      promises.push(api.getAlbumPhotos(parseInt(params.albumId as string)));

      const results = await Promise.all(promises);

      setAlbum(results[0] as JholderAlbumType);
      setPhotos(results[1] as JholderAlbumPhotoType[]);

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
      <h5 className="m-2 text-center text-2xl font-bold tracking-tight text-amber-400 my-5">
        <span className="text-black my-5">Album Name:</span>
        <hr />
        {album?.title}
      </h5>
      <h5 className="m-2 text-center text-2xl font-bold tracking-tight text-amber-400">
        <span className="text-black">Album Photos:</span>
        <hr />
        <AlbumPhotos photos={photos} />
      </h5>
    </div>
  );
}
