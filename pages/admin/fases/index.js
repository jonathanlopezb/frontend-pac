import React, { Component } from "react";
import Router from "next/router";

export default function IndexFases() {
  React.useEffect(() => {
    Router.push("/admin/dashboard");
  });

  return <div />;
}
