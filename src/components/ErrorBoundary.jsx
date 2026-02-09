import { Component } from "react"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by boundary:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
                    <div className="text-center p-8">
                        <h1 className="text-4xl font-bold [color:var(--text-primary)] mb-4">
                            Something went wrong
                        </h1>
                        <p className="[color:var(--text-secondary)] mb-6">
                            Please refresh the page to try again.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 rounded-full [background-color:var(--accent)] text-white font-medium"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
