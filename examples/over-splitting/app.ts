import { ui1 } from "./ui/ui1";
import { ui2 } from "./ui/ui2";
import { ui3 } from "./ui/ui3";

export const router = [
  { path: '1', loader: () => import('./feature/feature1') },
  { path: '2', loader: () => import('./feature/feature2') },
  { path: '3', loader: () => import('./feature/feature3') }
]

function getPath() {
  return process.argv[process.argv.length - 1]
}

const path = router.find(({path}) => path === getPath());

if (path) {
  const feature = await path.loader().then(m => m.default);
  console.log(feature);
} else {
  console.log('Available Uis', ui1, ui2, ui3);
}
