import { SkeletonRow } from './SkeletonRow'

export const TableSkeleton = () => (
    <table className="w-full">
        <thead className="bg-gray-50">
            <tr>
                {[
                    'First Name',
                    'Last Name',
                    'City',
                    'Degree',
                    'Specialties',
                    'Experience',
                    'Phone',
                ].map((header) => (
                    <th key={header} className="px-6 py-3 text-left">
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {[...Array(5)].map((_, i) => (
                <SkeletonRow key={i} />
            ))}
        </tbody>
    </table>
)
