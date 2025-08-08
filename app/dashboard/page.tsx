import React from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import CreateNotebookButton from "@/components/create-notebook-button";

export default async function dashboard() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>
      <CreateNotebookButton />
      {notebooks.success &&
        notebooks.data?.map((notebook) => {
          return <div key={notebook.id}>{notebook?.name}</div>;
        })}

      {notebooks.success && notebooks.data?.length === 0 && (
        <div>No notebooks found.</div>
      )}
    </PageWrapper>
  );
}
