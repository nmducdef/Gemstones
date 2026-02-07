import MainLayout from '@/presentation/layouts/main-layout'
import HomePage from '@/presentation/pages/home/index.page'
import ProductsPage from '@/presentation/pages/products/index.page'
import AuthGuard from '@/presentation/routes/auth-guard'
import { AppRoutes } from '@/shared/appRoutes'
import { createBrowserRouter } from 'react-router-dom'

export const RootRouter = createBrowserRouter([
  {
    element: <AuthGuard />,
    children: [
      {
        element: <MainLayout mode='home' />,
        children: [
          {
            index: true,
            element: <HomePage />
          }
        ]
      },
      {
        element: <MainLayout mode='common' />,
        children: [
          {
            path: AppRoutes.PUBLIC.ALL_PRODUCTS,
            element: <ProductsPage />
          }
        ]
      }
    ]
  }
])
