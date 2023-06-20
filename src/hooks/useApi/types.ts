export type JHolderUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type JholderAlbumType = {
  userId: number;
  id: number;
  title: string;
};

export type JholderPostType = JholderAlbumType & {
  body: string;
};

export type JholderAlbumPhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type JholderCommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
