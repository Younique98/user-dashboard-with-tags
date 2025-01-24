'use client'

import { useEffect, useState, ChangeEvent } from 'react'
import { IAdvocate } from '@/types/advocate'
import { formatPhoneNumber } from '@/helpers/formatters'
import { AdvocateTable } from '@/components/Advocates/AdvocateTable'
import { SearchBar } from '@/components/Advocates/SearchBar'

export default function Home() {
    const [advocates, setAdvocates] = useState<IAdvocate[]>([])
    const [filteredAdvocates, setFilteredAdvocates] = useState<IAdvocate[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        const fetchAdvocates = async () => {
            const response = await fetch('/api/advocates')
            const { data } = await response.json()
            setAdvocates(data)
            setFilteredAdvocates(data)
        }
        fetchAdvocates()
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase()
        setSearchTerm(searchTerm)

        const filteredAdvocates = advocates.filter(
            (advocate) =>
                advocate.firstName.includes(searchTerm) ||
                advocate.lastName.includes(searchTerm) ||
                advocate.city.includes(searchTerm) ||
                advocate.degree.includes(searchTerm) ||
                advocate.specialties.includes(searchTerm) ||
                advocate.yearsOfExperience.toString().includes(searchTerm)
        )

        // Note (ET) - removed this as its an antipattern and shouldn't manipulate DOM directly    document.getElementById("search-term").innerHTML = searchTerm;
        setFilteredAdvocates(filteredAdvocates)
    }

    const onClick = () => {
        setFilteredAdvocates(advocates)
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Solace Advocates</h1>

            <SearchBar
                searchTerm={searchTerm}
                onChange={onChange}
                onClick={onClick}
            />

            <AdvocateTable advocates={filteredAdvocates} />
        </main>
    )
}
