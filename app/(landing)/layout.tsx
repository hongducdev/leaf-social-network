import Header from "@/components/Header/Header";
import React from "react";

const LandingLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="dark:ctp-mocha">
      <Header />
      {props.children}
    </div>
  );
};

export default LandingLayout;
