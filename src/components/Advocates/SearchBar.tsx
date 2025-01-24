interface ISearchBar {
    searchTerm: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick: () => void
    isLoading: boolean
}

export const SearchBar = ({
    searchTerm,
    onChange,
    onClick,
    isLoading,
}: ISearchBar) => (
    <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Search</label>
        <div className="flex gap-4">
            <input
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Search advocates"
                value={searchTerm}
                onChange={onChange}
                disabled={isLoading}
            />
            <button
                onClick={onClick}
                disabled={isLoading}
                className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 disabled:bg-green-700/50"
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
