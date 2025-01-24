/**
 * @file ErrorBoundry.tsx
 * @description ErrorBoundry component to catch errors and display a fallback UI instead of crashing the component tree.
 * @link https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

import { Component, ReactNode } from 'react'

interface IErrorBoundry {
    children: ReactNode
    fallback?: ReactNode
}

interface IErrorBoundryState {
    hasError: boolean
}

export class ErrorBoundry extends Component<IErrorBoundry, IErrorBoundryState> {
    state = {
        hasError: false,
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="p-4 bg-red-50 rounded">
                        <h2 className="text-red-700">Something went wrong</h2>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-2 bg-red-100 px-4 py-2 rounded"
                        >
                            Refresh Page
                        </button>
                    </div>
                )
            )
        }

        return this.props.children
    }
}
