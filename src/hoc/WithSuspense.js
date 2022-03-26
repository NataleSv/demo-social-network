import React from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const WithSuspense = (Component) => {

        return <React.Suspense fallback={<Preloader/>}>
            <Component />
        </React.Suspense>
}