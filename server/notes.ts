"use server";

import { prisma } from "@/db/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Prisma } from "@prisma/client";

export const createNote = async (values: { title: string; content: any; notebookId: string }) => {
    try {
        await prisma.note.create({
            data: {
                title: values.title,
                content: values.content,
                notebook: {
                    connect: { id: values.notebookId },
                },
            },
        });

        return { success: true, message: "Note created successfully" };
    } catch {
        return { success: false, message: "Failed to create note" };
    }
};

export const getNoteById = async (id: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        const notes = await prisma.note.findFirst({
            where: {
                id: id
            },
            include: {
                notebook: true
            }
        })

        return { success: true, data: notes }
    } catch {
        return { success: false, message: "Failed to get note" }

    }
}

export const updateNote = async (id: string, values: Partial<Prisma.NoteUpdateInput>) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        await prisma.note.update({
            where: {
                id: id
            },
            data: values
        })

        return { success: true, message: "Note updated successfully" }
    } catch {
        return { success: false, message: "Failed to update note" }
    }
}

export const deleteNote = async (id: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        await prisma.note.delete({
            where: {
                id: id
            }
        })

        return { success: true, message: "Note deleted successfully" }
    } catch {
        return { success: false, message: "Failed to delete note" }

    }
}