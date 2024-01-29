import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Buku } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async(request : Request) => {
    const body: Buku = await request.json();
    const buku = await prisma.buku.create({
        data: {
            judul: body.judul,
            penulis: body.penulis,
            tahun: body.tahun,
        }
    })
    return NextResponse.json(buku, {status:201});
    }
