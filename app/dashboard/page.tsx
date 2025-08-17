import React from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebooks";
import CreateNotebookButton from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";

export default async function dashboard() {
  const notebooks = await getNotebooks();
  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <div className='flex justify-between'>
        <h1 className='font-bold text-xl'>Notebooks</h1>
        <CreateNotebookButton />
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {notebooks.success &&
          notebooks.data?.map((notebook) => {
            return <NotebookCard key={notebook.id} notebook={{ notebook }} />;
          })}
      </div>

      {notebooks.success && notebooks.data?.length === 0 && (
        <div>No notebooks found.</div>
      )}
    </PageWrapper>
  );
}
