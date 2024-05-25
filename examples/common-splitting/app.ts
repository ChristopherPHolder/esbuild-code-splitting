import { router } from './feature/router';
import { ui1, ui2, ui3 } from "./ui";

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
