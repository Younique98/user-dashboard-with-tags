' use client'
import { IAdvocate } from '@/types/advocate'
import { useQueryClient } from '@tanstack/react-query'

interface IPaginationControls {
    currentPage: number
    totalPages: number
    isLoading: boolean
    setPage: (page: number) => void
}

export const PaginationControls = ({
    currentPage,
    totalPages,
    isLoading,
    setPage,
}: IPaginationControls) => {
    const queryClient = useQueryClient()
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const handlePageChange = (page: number) => {
        queryClient.setQueryData(['advocates'], (oldData: IAdvocate[]) => ({
            ...oldData,
            page,
        }))
        setPage(page)
    }
    return (
        <div className="flex justify-center gap-2 mt-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage || isLoading}
                className="px-3 py-1 bg-green-900 text-white rounded disabled:bg-green-700/50"
            >
                Previous
            </button>
            <span className="flex items-center">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage || isLoading}
                className="px-3 py-1 bg-green-900 text-white rounded disabled:bg-green-700/50"
            >
                Next
            </button>
        </div>
    )
}
