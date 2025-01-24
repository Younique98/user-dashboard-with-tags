'use client'

import { useEffect, useState, ChangeEvent } from 'react'
import { IAdvocate } from '@/types/advocate'

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
        <main style={{ margin: '24px' }}>
            <h1>Solace Advocates</h1>
            <br />
            <br />
            <div>
                <p>Search</p>
                <p>Searching for: {searchTerm}</p>
                <input
                    style={{ border: '1px solid black' }}
                    onChange={onChange}
                />
                <button onClick={onClick}>Reset Search</button>
            </div>
            <br />
            <br />
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Degree</th>
                    <th>Specialties</th>
                    <th>Years of Experience</th>
                    <th>Phone Number</th>
                </thead>
                <tbody>
                    {filteredAdvocates.map((advocate) => {
                        return (
                            <tr>
                                <td>{advocate.firstName}</td>
                                <td>{advocate.lastName}</td>
                                <td>{advocate.city}</td>
                                <td>{advocate.degree}</td>
                                <td>
                                    {advocate.specialties.map((s) => (
                                        <div>{s}</div>
                                    ))}
                                </td>
                                <td>{advocate.yearsOfExperience}</td>
                                <td>{advocate.phoneNumber}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}
