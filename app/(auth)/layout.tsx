import React from "react";

const AuthLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {props.children}
    </div>
  );
};

export default AuthLayout;
