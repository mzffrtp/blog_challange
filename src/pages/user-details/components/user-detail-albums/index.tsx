import { JholderAlbumType } from "@/hooks/useApi/types";

export type UserDetailAlbumsType = {
  album: JholderAlbumType;
};

export default function UserDetailAlbums(props: UserDetailAlbumsType) {
  console.log("albums", props.album.title);

  return (
    <div className="w-60 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-center text-l font-bold tracking-tight text-amber-400">
        Name:
        <hr />
      </h5>

      <p className="mb-3 font-normal text-teal-400 text-center h-20">
        {props.album.title}
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          className="focus:outline-none text-white bg-amber-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Details
        </button>
      </div>
    </div>
  );
}
