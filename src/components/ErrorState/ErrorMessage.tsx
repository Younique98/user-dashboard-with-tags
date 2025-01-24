interface IErrorMessage {
    error: string
    onRetry: () => void
}

export const ErrorMessage = ( { error, onRetry }: IErrorMessage ) => (
      <div className="rounded-md bg-red-50 p-4">
    <div className="flex">
      <div className="text-red-700">
        <h3>Error loading advocates</h3>
        <p>{error}</p>
        <button 
          onClick={onRetry}
          className="mt-2 bg-red-100 px-4 py-2 rounded hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
)