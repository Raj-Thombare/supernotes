import * as React from "react";

import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getNotebooks } from "@/server/notebooks";
import Image from "next/image";
import Link from "next/link";
import SidebarData from "./sidebar-data";
import { Suspense } from "react";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const notebooks = await getNotebooks();

  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
      ...(notebooks.data?.map((notebook) => ({
        title: notebook.name,
        url: `/dashboard/${notebook.id}`,
        items: notebook.notes.map((note) => ({
          title: note.title,
          url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
        })),
      })) ?? []),
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href='/' className='flex items-center gap-2 p-2'>
          <Image src='/logo.png' alt='SuperNotes Logo' width={32} height={32} />
          <span className='text-xl font-bold tracking-tight bg-gradient-to-r from-red-700 to-yellow-400 bg-clip-text text-transparent'>
            SuperNotes
          </span>
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchForm />
        </Suspense>
      </SidebarHeader>
      <SidebarContent className='gap-0'>
        <SidebarData data={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
