'use client'

import { AdvocateTable } from '@/components/Advocates/AdvocateTable'
import { SearchBar } from '@/components/Advocates/SearchBar'
import { useAdvocates } from '@/hooks/useAdvocates'
import { useAdvocateFilter } from '@/hooks/useAdvocateFilter'
import { ErrorBoundry } from '@/components/ErrorBoundry'
import { PaginationControls } from '@/components/Pagination/PaginationControls'
import { SearchProvider, useSearch } from '@/context/SearchContext'

export default function Home() {
    const {
        advocates,
        isLoading,
        error,
        retry,
        page,
        setPage,
        totalPages,
        setSortBy,
        setOrder,
        sortBy,
        order,
    } = useAdvocates()
    const { filtered, filteredAdvocates, searchTerm } =
        useAdvocateFilter(advocates)

    const { setSearchTerm } = useSearch()

    return (
        <ErrorBoundry>
            <SearchProvider>
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8">
                        Solace Advocates
                    </h1>

                    <SearchBar
                        isLoading={isLoading}
                        onChange={filteredAdvocates}
                    />

                    <AdvocateTable
                        advocates={filtered}
                        error={error?.message || null}
                        onRetry={retry}
                        isLoading={isLoading}
                        setSortBy={setSortBy}
                        setOrder={setOrder}
                        sortBy={sortBy}
                        order={order}
                        onSort={() => {
                            setSearchTerm('')
                        }}
                    />
                    <PaginationControls
                        currentPage={page}
                        totalPages={totalPages}
                        isLoading={isLoading}
                        setPage={setPage}
                    />
                </main>
            </SearchProvider>
        </ErrorBoundry>
    )
}
