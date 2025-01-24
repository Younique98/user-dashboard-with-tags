import { IAdvocate } from '@/types/advocate'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'
import { TAdvocateKeys } from '@/app/api/advocates/route'

export type TSortOrder = 'asc' | 'desc'

export const useAdvocates = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [sortBy, setSortBy] = useState<TAdvocateKeys>('firstName')
    const [order, setOrder] = useState<TSortOrder>('asc')
    const [totalPages, setTotalPages] = useState(0)
    const [advocates, setAdvocates] = useState<IAdvocate[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchAdvocates = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `/api/advocates?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&order=${order}`
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
    }, [page, pageSize, sortBy, order])

    useEffect(() => {
        fetchAdvocates()
        setIsLoading(false)
    }, [fetchAdvocates])

    const retry = () => {
        setError(null)
        fetchAdvocates()
    }

    return {
        advocates,
        setPageSize,
        pageSize,
        setSortBy,
        sortBy,
        setOrder,
        order,
        isLoading,
        error,
        retry,
        totalPages,
        setPage,
        page,
    }
}
