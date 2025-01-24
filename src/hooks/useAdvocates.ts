import { IAdvocate } from '@/types/advocate'
import { useState } from 'react'
import { TAdvocateKeys } from '@/app/api/advocates/route'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

export type TSortOrder = 'asc' | 'desc'

export const useAdvocates = () => {
    const [sortBy, setSortBy] = useState<TAdvocateKeys>('firstName')
    const [ order, setOrder ] = useState<TSortOrder>( 'asc' )
const [page, setPage] = useState<number>(1);

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['advocates', { page , sortBy, order, searchTerm: '' }],
        queryFn: async ({queryKey}) => {
            const response = await fetch(
                `/api/advocates?sortBy=${sortBy}&order=${order}&page=${page}`
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
    } )
    return {
        advocates : data?.advocates ?? [],
        setSortBy,
        setPage,
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
