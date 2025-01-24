import { IAdvocate } from '@/types/advocate'
import { useCallback, useEffect, useState } from 'react'

export const useAdvocates = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const pageSize = 10
    const [advocates, setAdvocates] = useState<IAdvocate[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchAdvocates = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `/api/advocates?page=${page}&pageSize=${pageSize}`
            )
            const { data, total } = await response.json()

            setAdvocates(data)
            setTotalPages(Math.ceil(total / pageSize))
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to load advocates'
            )
        } finally {
            setIsLoading(false)
        }
    }, [page])

    useEffect(() => {
        fetchAdvocates()
    }, [fetchAdvocates])

    return {
        advocates,
        isLoading,
        error,
        retry: fetchAdvocates,
        totalPages,
        setPage,
        page,
    }
}
