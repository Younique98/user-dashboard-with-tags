import { IAdvocate } from '@/types/advocate'
import { useEffect, useState } from 'react'

export const useAdvocateFilter = (advocates: IAdvocate[]) => {
    const [filtered, setFiltered] = useState<IAdvocate[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        setFiltered(advocates)
    }, [advocates])

    const filteredAdvocates = (term: string) => {
        const searchTerm = term.toLowerCase()
        setSearchTerm(searchTerm)
        const filteredResults = advocates.filter(
            (advocate) =>
                advocate.firstName.includes(searchTerm) ||
                advocate.lastName.includes(searchTerm) ||
                advocate.city.includes(searchTerm) ||
                advocate.degree.includes(searchTerm) ||
                advocate.specialties.includes(searchTerm) ||
                advocate.yearsOfExperience.toString().includes(searchTerm)
        )
        setFiltered(filteredResults)
    }

    return { filteredAdvocates, filtered, searchTerm }
}
