import axios, { Axios, AxiosResponse } from "axios";
import {
  JHolderUserType,
  JholderAlbumPhotoType,
  JholderAlbumType,
  JholderPostType,
} from "./types";

export class JHolderApi {
  private readonly axiosClient: Axios;

  constructor(private readonly baseUrl: string) {
    this.axiosClient = axios;
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async users(start?: number, limit?: number) {
    const result: AxiosResponse<JHolderUserType[]> = await this.axiosClient.get<
      JHolderUserType[]
    >("users", {
      params: {
        _start: start,
        _limit: limit,
      },
    });
    return result;
  }

  async getUser(userId: number) {
    const user: AxiosResponse<JHolderUserType> =
      await this.axiosClient.get<JHolderUserType>("users/" + userId);

    return user.data;
  }

  async getAlbums(userId?: number, start?: number, limit?: number) {
    const userAlbums: AxiosResponse<JholderAlbumType[]> =
      await this.axiosClient.get<JholderAlbumType[]>("albums", {
        params: {
          userId: userId,
          _start: start,
          _limit: limit,
        },
      });
    return userAlbums.data;
  }

  async getAlbum(albumId: number) {
    const album: AxiosResponse<JholderAlbumType> =
      await this.axiosClient.get<JholderAlbumType>("albums/" + albumId);
    return album.data;
  }

  async getPosts(userId?: number, start?: number, limit?: number) {
    const userPosts = await this.axiosClient.get<JholderPostType[]>("posts", {
      params: {
        userId: userId,
        _start: start,
        _limit: limit,
      },
    });
    return userPosts.data;
  }

  async getAlbumPhotos(albumId?: number, start?: number, limit?: number) {
    const albumPhotos = await this.axiosClient.get<JholderAlbumPhotoType[]>(
      "photos",
      {
        params: {
          albumId: albumId,
          _start: start,
          _limit: limit,
        },
      }
    );
    return albumPhotos.data;
  }
}

export default function useApi(): JHolderApi {
  return new JHolderApi("https://jsonplaceholder.typicode.com");
}
