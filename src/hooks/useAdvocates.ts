import { IAdvocate } from "@/types/advocate";
import { useEffect, useState } from "react";

export const useAdvocates = () => {
    const [ advocates, setAdvocates ] = useState<IAdvocate[]>( [] );
    
        useEffect(() => {
            const fetchAdvocates = async () => {
                const response = await fetch('/api/advocates')
                const { data } = await response.json()
                setAdvocates(data)
            }
            fetchAdvocates()
        }, [] )
    
    return advocates;
}