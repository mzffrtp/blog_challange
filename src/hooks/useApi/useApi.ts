import axios, { Axios, AxiosResponse } from "axios"
import { JHolderUserType } from "./types";



export class JHolderApi {

    private readonly axiosClient: Axios;

    constructor(private readonly baseUrl:string){
        this.axiosClient = axios
        this.axiosClient.defaults.baseURL = baseUrl;
    }

    async users (start?: number, limit?:number) {
       const result: AxiosResponse<JHolderUserType[]> =
       await this.axiosClient.get<JHolderUserType[]> ("users", {
        params: {
            _start: start,
            _limit: limit
        },
       });
       return result
    }
}


export default function useApi ():JHolderApi {
    return new JHolderApi("https://jsonplaceholder.typicode.com")
}
