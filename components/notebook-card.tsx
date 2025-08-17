"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note, Notebook } from "@prisma/client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { deleteNotebook } from "@/server/notebooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface NotebookCardProps {
  notebook: NotebookWithNotes;
}

type NotebookWithNotes = Notebook & { notes: Note[] };

const NotebookCard = ({ notebook }: { notebook: NotebookCardProps }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteNotebook(notebook.notebook.id);

      if (response.success) {
        toast.success("Notebook deleted successfully");
        router.refresh();
      }
    } catch {
      toast.error("Failed to delete notebook");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{notebook?.notebook?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{notebook?.notebook?.notes.length ?? 0} notes</p>
      </CardContent>
      <CardFooter className='flex justify-end gap-2'>
        <Link href={`/dashboard/notebook/${notebook.notebook.id}`}>
          <Button variant='outline'>View</Button>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant='destructive' disabled={isDeleting}>
              {isDeleting ? (
                <Loader2 className='size-4 animate-spin' />
              ) : (
                <Trash2 className='size-4' />
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                notebook and all its notes.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default NotebookCard;
