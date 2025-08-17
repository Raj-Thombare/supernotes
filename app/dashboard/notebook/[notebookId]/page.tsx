import CreateNoteButton from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{
  notebookId: string;
}>;

export default async function NotebookPage({ params }: { params: Params }) {
  const { notebookId } = await params;

  const { data } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: data?.name ?? "Notebook",
          href: `/dashboard/notebook/${notebookId}`,
        },
      ]}>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold'>{data?.name}</h1>

        <CreateNoteButton notebookId={notebookId} />
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data?.notes?.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
}
