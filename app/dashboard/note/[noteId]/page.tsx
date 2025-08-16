import React from "react";
import { getNoteById } from "@/server/notes";
import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { JSONContent } from "@tiptap/react";

const page = async ({ params }: { params: Promise<{ noteId: string }> }) => {
  const { noteId } = await params;

  const note = await getNoteById(noteId);
  const content = note?.data?.content ? JSON.parse(note?.data?.content) : null;

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: note?.data?.notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${note?.data?.notebook?.id}`,
        },
        {
          label: note?.data?.title ?? "Note",
          href: `/dashboard/note/${noteId}`,
        },
      ]}>
      <h1>{note?.data?.title}</h1>
      <RichTextEditor content={content as JSONContent[]} noteId={noteId} />
    </PageWrapper>
  );
};

export default page;
