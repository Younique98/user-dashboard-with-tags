import db from '../../../db'
import { advocates } from '../../../db/schema'
import { advocateData } from '../../../db/seed/advocates'

export async function GET(request: Request) {
    // Uncomment this line to use a database
    // const data = await db.select().from(advocates);

    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get('page')) || 1
    const pageSize = Number(searchParams.get('pageSize')) || 10

    try {
        const start = (page - 1) * pageSize
        const end = start + pageSize

        const paginatedData = advocateData.slice(start, end)

        return Response.json({
            data: paginatedData,
            total: advocateData.length,
        })
    } catch (error) {
        return Response.json(
            { error: 'Failed to fetch advocates' },
            { status: 500 }
        )
    }
}
