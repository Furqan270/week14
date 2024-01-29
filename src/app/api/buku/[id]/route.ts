import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Buku } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async(request : Request, {params} : {params: {id: string}}) => {
    const buku = await prisma.buku.delete({
        where: {
            id: parseInt(params.id),
        }
    })
    return NextResponse.json(buku, {status:200});
    }

export const PATCH = async(request : Request, {params} : {params: {id: string}}) => {
    const body: Buku = await request.json();
    const buku = await prisma.buku.update({
        where: {
            id: parseInt(params.id),
        },
        data: {
            judul: body.judul,
            penulis: body.penulis,
            tahun: body.tahun,
        }
    })
    return NextResponse.json(buku, {status:200});
    }
