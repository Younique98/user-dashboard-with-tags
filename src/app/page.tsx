'use client'

import { AdvocateTable } from '@/components/Advocates/AdvocateTable'
import { SearchBar } from '@/components/Advocates/SearchBar'
import { useAdvocates } from '@/hooks/useAdvocates'
import { useAdvocateFilter } from '@/hooks/useAdvocateFilter'
import { ErrorBoundry } from '@/components/ErrorBoundry'
import { PaginationControls } from '@/components/Pagination/PaginationControls'

export default function Home() {
    const { advocates, isLoading, error, retry, page, totalPages, setPage } =
        useAdvocates()

    const { filtered, filteredAdvocates, searchTerm } =
        useAdvocateFilter(advocates)

    return (
        <ErrorBoundry>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Solace Advocates</h1>

                <SearchBar
                    searchTerm={searchTerm}
                    onChange={filteredAdvocates}
                    onClick={() => filteredAdvocates('')}
                    isLoading={isLoading}
                />

                <AdvocateTable
                    advocates={filtered}
                    error={error}
                    onRetry={retry}
                    isLoading={isLoading}
                />
                <PaginationControls
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                    isLoading={isLoading}
                />
            </main>
        </ErrorBoundry>
    )
}
