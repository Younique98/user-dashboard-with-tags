interface IPaginationControls {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
    isLoading: boolean
}

export const PaginationControls = ({
    currentPage,
    totalPages,
    onPageChange,
    isLoading,
}: IPaginationControls) => {
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    return (
        <div className="flex justify-center gap-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isFirstPage || isLoading}
                className="px-3 py-1 bg-green-900 text-white rounded disabled:bg-green-700/50"
            >
                Previous
            </button>
            <span className="flex items-center">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isLastPage || isLoading}
                className="px-3 py-1 bg-green-900 text-white rounded disabled:bg-green-700/50"
            >
                Next
            </button>
        </div>
    )
}
