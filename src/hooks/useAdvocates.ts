import { IAdvocate } from '@/types/advocate'
import { useState } from 'react'
import { TAdvocateKeys } from '@/app/api/advocates/route'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export type TSortOrder = 'asc' | 'desc'

export const useAdvocates = () => {
    const [sortBy, setSortBy] = useState<TAdvocateKeys>('firstName')
    const [order, setOrder] = useState<TSortOrder>('asc')

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['advocates', sortBy, order],
        queryFn: async () => {
            const response = await fetch(
                `/api/advocates?sortBy=${sortBy}&order=${order}`
            )
            if ( !response.ok ) throw new Error( 'Failed to fetch advocates' )
            const data = await response.json()
            return {
                advocates: data.data as IAdvocate[],
                totalPages: data.totalPages,
                pageSize: data.pageSize,
                total: data.total,
                page: data.page,
            }
        },
        retry: 3,
        placeholderData: keepPreviousData,
        staleTime: 5000,
    })


    return {
        advocates : data?.advocates ?? [],
        setSortBy,
        sortBy,
        setOrder,
        order,
        isLoading,
        error,
        totalPages: data?.totalPages ?? 1,
        page: data?.page ?? 1,
        retry: refetch,
        pageSize: data?.pageSize || 10,
    }
}
