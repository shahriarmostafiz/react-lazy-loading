import { lazy } from "react";

export default function importDemo(file) {
  return lazy(() => import(`../../components/LazyLoading/${file}`));
  //   returns a promise
}
