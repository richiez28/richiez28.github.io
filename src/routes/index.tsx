import { createHashRouter } from 'react-router'

import { RootLayout } from '@/routes/layouts/root-layout'
import { EditorPage } from '@/routes/editor/page'
import { PrintPage } from '@/routes/print/page'
import { NotFoundPage } from '@/routes/not-found/page'

export const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <EditorPage />,
      },
      { path: 'print', element: <PrintPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
