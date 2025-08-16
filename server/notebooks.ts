"use server";

import { prisma } from "@/db/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Prisma } from "@prisma/client";

export const createNotebook = async (values: Prisma.NotebookCreateInput) => {
    try {
        await prisma.notebook.create({
            data: values
        })

        return { success: true, message: "Notebook created successfully" }
    } catch {
        return { success: true, message: "Failed to create notebook" }

    }
}

export const getNotebooks = async () => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        const notebooksByUser = await prisma.notebook.findMany({
            where: {
                userId: userId
            },
            include: {
                notes: true
            }
        })

        return { success: true, data: notebooksByUser }
    } catch {
        return { success: true, message: "Failed to get notebooks" }

    }
}

export const getNotebookById = async (id: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        const notebook = await prisma.notebook.findFirst({
            where: {
                id: id
            },
            include: {
                notes: true
            }
        })

        return { success: true, data: notebook }
    } catch {
        return { success: true, message: "Failed to get notebook" }

    }
}

export const updateNotebook = async (id: string, values: Prisma.NotebookUpdateInput) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        await prisma.notebook.update({
            where: {
                id: id
            },
            data: values
        })

        return { success: true, message: "Notebook updated successfully" }
    } catch {
        return { success: true, message: "Failed to update notebook" }
    }
}

export const deleteNotebook = async (id: string) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        })

        const userId = session?.user?.id;

        if (!userId) {
            return { success: false, message: "User not found" }
        }

        await prisma.notebook.delete({
            where: {
                id: id
            }
        })

        return { success: true, message: "Notebook deleted successfully" }
    } catch {
        return { success: true, message: "Failed to delete notebook" }

    }
}
