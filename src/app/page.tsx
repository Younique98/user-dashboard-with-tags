'use client'

import { AdvocateTable } from '@/components/Advocates/AdvocateTable'
import { SearchBar } from '@/components/Advocates/SearchBar'
import { useAdvocates } from '@/hooks/useAdvocates'
import { useAdvocateFilter } from '@/hooks/useAdvocateFilter'

export default function Home() {
     const advocates = useAdvocates()
   const { filtered, filteredAdvocates, searchTerm } = useAdvocateFilter(advocates)

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Solace Advocates</h1>

            <SearchBar
                searchTerm={searchTerm}
                onChange={(e) => filteredAdvocates(e.target.value)}
                onClick={() => filteredAdvocates('')}
            />

            <AdvocateTable advocates={filtered} />
        </main>
    )
}
