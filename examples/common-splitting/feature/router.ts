export const router = [
  { path: '1', loader: () => import('./feature1') },
  { path: '2', loader: () => import('./feature2') },
  { path: '3', loader: () => import('./feature3') }
]
