import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

import Header from "../Header/Header";

const WebAppTemplate = () => {
  return ( 
    <>
      <Header/>
      <main>
        <Suspense fallback={<div><Loader width="80" height="80"/></div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
   );
}
 
export default WebAppTemplate;