import Marketplace from "@/components/Marketplace";
import SideNav from "@/components/SideNav";
import React from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";

const Page = () => {
  return (
    <>
      <div className="flex px-5 lg:px-0">
        <SideNav
          option1={"Marketplace"}
          option2={"Purchase History"}
          option3={"Cart"}
          userType={"Buyer"}
        />
        <Marketplace />
      </div>
    </>
  );
}

// export default Page;
export default function ProtectedMarketPlace() {
  return (
    <ProtectedRoute>
      <Page />
    </ProtectedRoute>
  );
}
