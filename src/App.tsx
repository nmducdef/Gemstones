import { RepositoryProvider } from '@/di/RepositoriesProvider'
import { RootRouter } from '@/presentation/routes/root-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <RepositoryProvider>
          <RouterProvider router={RootRouter} />
        </RepositoryProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
