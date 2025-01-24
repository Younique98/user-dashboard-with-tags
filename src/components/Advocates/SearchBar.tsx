interface ISearchBar {
    searchTerm: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick: () => void
}

export const SearchBar = ({ searchTerm, onChange, onClick }: ISearchBar) => (
    <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Search</label>
        <div className="flex gap-4">
            <input
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Search advocates"
                value={searchTerm}
                onChange={onChange}
            />
            <button
                onClick={onClick}
                className="px-4 py-1 bg-green-900 text-white rounded-lg hover:bg-blue-600"
            >
                Reset Search
            </button>
        </div>

        <p className="mt-2 text-sm text-gray-600">
            Searching for: {searchTerm}
        </p>
    </div>
)
