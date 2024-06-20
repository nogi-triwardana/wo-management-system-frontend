import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeUIProvider } from 'theme-ui'
import { GlobalStyles, theme } from '../components/themes'
import { css, Global } from '@emotion/react'
import App from '../App'

// @ts-ignore
// @ts-nocheck
export const Route = createRootRoute({
  component: () => (
    <ThemeUIProvider theme={theme}>
      <GlobalStyles />
      <Outlet />
      <TanStackRouterDevtools />
    </ThemeUIProvider>
  ),
})