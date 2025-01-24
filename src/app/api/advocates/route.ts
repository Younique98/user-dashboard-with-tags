import db from '../../../db'
import { advocates } from '../../../db/schema'
import { advocateData } from '../../../db/seed/advocates'

export type TAdvocateKeys =
    | 'firstName'
    | 'lastName'
    | 'city'
    | 'degree'
    | 'yearsOfExperience'
    | 'phoneNumber'

export async function GET(request: Request) {
    // Uncomment this line to use a database
    // const data = await db.select().from(advocates);

    const { searchParams } = new URL(request.url)
    const sortBy: TAdvocateKeys =
        (searchParams.get('sortBy') as TAdvocateKeys) || 'firstName'
    const order = searchParams.get('order') || 'asc'
    const page = Number(searchParams.get('page')) || 1
    const pageSize = Number(searchParams.get('pageSize')) || 10

    try {
        const sortedData = [...advocateData].sort((a, b) => {
            const aValue = a[sortBy as keyof typeof a]
            const bValue = b[sortBy as keyof typeof b]

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return order === 'asc' ? aValue - bValue : bValue - aValue
            }
            return order === 'asc'
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue))
        })

        const start = (page - 1) * pageSize
        const end = start + pageSize
        const paginatedData = sortedData.slice(start, end)

        return Response.json({
            data: paginatedData,
            total: advocateData.length,
            page,
            pageSize,
        })
    } catch (error) {
        return Response.json(
            {
                error: 'Failed to fetch advocates',
                message: (error as Error).message,
            },
            { status: 500 }
        )
    }
}
