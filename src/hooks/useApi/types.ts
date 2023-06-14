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
  titel: string;
};

export type JholderPostType = JholderAlbumType & {
  body: string;
};
