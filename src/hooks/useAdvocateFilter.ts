import { IAdvocate } from '@/types/advocate'
import { useCallback, useEffect, useState } from 'react'

export const useAdvocateFilter = (advocates: IAdvocate[]) => {
    const [filtered, setFiltered] = useState<IAdvocate[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        setFiltered(advocates)
    }, [advocates])

    const filteredAdvocates = useCallback(
        (term: string) => {
            const searchTerm = term.toLowerCase()

            setSearchTerm(searchTerm)
            const filteredResults = advocates.filter(
                (advocate) =>
                    advocate.firstName.toLowerCase().startsWith(searchTerm) ||
                    advocate.lastName.toLowerCase().startsWith(searchTerm) ||
                    advocate.city.toLowerCase().startsWith(searchTerm) ||
                    advocate.degree.toLowerCase().startsWith(searchTerm) ||
                    advocate.specialties.some((specialty) =>
                        specialty.toLowerCase().includes(searchTerm)
                    ) ||
                    advocate.yearsOfExperience.toString().includes(searchTerm)
            )
            setFiltered(filteredResults)
        },
        [advocates]
    )

    return { filteredAdvocates, filtered, searchTerm }
}
