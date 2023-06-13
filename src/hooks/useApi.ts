import axios, { Axios, AxiosResponse } from "axios"

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
