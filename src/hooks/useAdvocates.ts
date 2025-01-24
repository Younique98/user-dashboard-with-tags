import { IAdvocate } from '@/types/advocate'
import { useEffect, useState } from 'react'

export const useAdvocates = () => {
    const [advocates, setAdvocates] = useState<IAdvocate[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchAdvocates = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('/api/advocates')
            const { data } = await response.json()
            setAdvocates(data)
        } catch (err) {
            setError(
                err instanceof Error ? err.message : 'Failed to load advocates'
            )
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchAdvocates()
    }, [])

    return { advocates, isLoading, error, retry: fetchAdvocates }
}
