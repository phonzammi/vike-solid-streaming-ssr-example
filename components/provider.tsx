import type { JSX } from 'solid-js'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { SolidQueryDevtools } from '@tanstack/solid-query-devtools'

export default function SQProvider(props: { children: JSX.Element }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: 5000,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <SolidQueryDevtools />
            {props.children}
        </QueryClientProvider>
    )
}