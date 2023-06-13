import useApi, { JHolderApi } from "@/hooks/useApi"
import { useEffect } from "react";

export default function MainPage () {
    const api:JHolderApi = useApi();
    useEffect(()=>{
        (async ()=>{
            const result = await api.users();
            console.log("result", result);
        })()
    }, [])
    return (
        <>
        main page

        </>
    )
}
