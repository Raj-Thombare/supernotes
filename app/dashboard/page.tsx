import { Logout } from "@/components/logout";
import { PageWrapper } from "@/components/page-wrapper";
import React from "react";

export default function dashboard() {
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      Dashboard
    </PageWrapper>
  );
}
