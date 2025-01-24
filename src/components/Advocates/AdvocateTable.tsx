import { formatPhoneNumber } from "@/helpers/formatters"
import { IAdvocate } from "@/types/advocate"

interface IAdvocateTable { 
    advocates: IAdvocate[]
}

export const AdvocateTable = ({advocates}: IAdvocateTable) => ( 
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full border-collapse bg-white">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    First Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Last Name
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    City
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Degree
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Specialties
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Years of Experience
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Phone Number
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {advocates.map((advocate) => {
                                return (
                                    <tr
                                        key={advocate.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.firstName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.lastName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.city}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.degree}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.specialties.map(
                                                (specialty) => (
                                                    <span
                                                        key={specialty}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-700 text-white mr-2 mb-1"
                                                    >
                                                        {specialty}
                                                    </span>
                                                )
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {advocate.yearsOfExperience}
                                        </td>
                                        <td className="px-2 py-4 text-sm text-gray-900">
                                            {formatPhoneNumber(advocate.phoneNumber)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
)