import { PrismaClient } from "@prisma/client";
import AddBuku from "./addBuku";
import DeleteBuku from "./deleteBuku";
import UpdateBuku from "./updateBuku";
const prisma = new PrismaClient();

const getBuku = async () => {
    const res = await prisma.buku.findMany({
        select: {
            id: true,
            judul: true,
            penulis: true,
            tahun: true,
        },
    });
    return res;
}
const Buku = async () => {
    const buku = await getBuku();

    return (
        <div>
            <div className="mb-2 px-4 py-4   overflow-auto">
                <AddBuku />
            </div>
            <table className="table w-full overflow-x-auto">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Penulis</th>
                        <th>Tahun</th>
                        <th className="text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {buku.map((buku, index) => (
                        <tr key={buku.id}>
                            <td>{index + 1}</td>
                            <td>{buku.judul}</td>
                            <td>{buku.penulis}</td>
                            <td>{buku.tahun}</td>
                            <td className="flex justify-center  space-x-1">
                                <UpdateBuku buku={buku} />
                                <DeleteBuku buku={buku} />
                            </td>
                            <td>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Buku;

