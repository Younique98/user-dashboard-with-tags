import { useDebounce } from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'

interface ISearchBar {
    searchTerm: string
    onChange: (term: string) => void
    onClick: () => void
    isLoading: boolean
}

export const SearchBar = ({
    searchTerm,
    onChange,
    onClick,
    isLoading,
}: ISearchBar) => {
    const [inputValue, setInputValue] = useState(searchTerm)
    const debouncedValue = useDebounce(inputValue, 300)

    useEffect(() => {
        onChange(debouncedValue)
    }, [debouncedValue])

    return (
        <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Search</label>
            <div className="flex gap-4">
                <input
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-200 focus:border-green-900 outline-none"
                    placeholder="Search advocates"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    onClick={onClick}
                    disabled={isLoading}
                    className="px-4 py-3 bg-green-900 whitespace-nowrap text-white rounded-lg hover:bg-green-800 disabled:bg-green-700/50"
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg
                                className="animate-spin h-4 w-4 mr-2"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                            Searching...
                        </span>
                    ) : (
                        'Reset Search'
                    )}
                </button>
            </div>

            <p className="mt-2 text-sm text-gray-600">
                Searching for: {searchTerm}
            </p>
        </div>
    )
}
