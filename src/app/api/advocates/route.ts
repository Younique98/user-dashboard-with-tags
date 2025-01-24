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
    const page = Number(searchParams.get('page')) || 1
    const pageSize = Number(searchParams.get('pageSize')) || 10
    const sortBy: TAdvocateKeys =
        (searchParams.get('sortBy') as TAdvocateKeys) || 'firstName'
    const order = searchParams.get('order') || 'asc'

    try {
        let sortedData = [...advocateData].sort((a, b) => {
            const aValue = a[sortBy]
            const bValue = b[sortBy]
            return order === 'asc'
                ? String(aValue).localeCompare(String(bValue))
                : String(bValue).localeCompare(String(aValue))
        })

        const start = (page - 1) * pageSize
        const paginatedData = sortedData.slice(start, start + pageSize)
        const totalPages = Math.ceil(advocateData.length / pageSize) 
        return Response.json({
            data: paginatedData,
            total: advocateData.length,
            pageSize,
            page,
            totalPages,
        })
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch advocates' },
            { status: 500 }
        )
    }
}
