import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";
import { Suspense } from "react";
export default function InformationHeader() {
  const navigation = useNavigation();
  const isLoadingOutlet = navigation.state === "loading";

  if (isLoadingOutlet) return <Loader />;
  return (
    <div className="h-full w-full bg-grey-0 dark:bg-grey-100-dark">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
