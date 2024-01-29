"use client"
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Buku = {
    id: number;
    judul: string;
    penulis: string;
    tahun: number;
}
const UpdateBuku = ({buku} : {buku : Buku}) => {
    const [judul, setJudul] = useState(buku.judul);
    const [penulis, setPenulis] = useState(buku.penulis);
    const [tahun, setTahun] = useState(buku.tahun);
    const [isOpen, setIsOpen] = useState(false);
    
    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.patch(`api/buku/${buku.id}`, {
            judul : judul,
            penulis : penulis,
            tahun : Number(tahun),
        })
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button className="btn btn-info btn-sm" onClick={handleModal}> Edit</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Buku</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control w-full">
                            <label className="label fontbold">Nama Buku</label>
                            <input type="text" value={judul} onChange={(e) => setJudul(e.target.value)} className="input input-bordered" placeholder="Book Name" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label fontbold">Penulis</label>
                            <input type="text" value={penulis} onChange={(e) => setPenulis(e.target.value)} className="input input-bordered" placeholder="Penulis" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label fontbold">Tahun</label>
                            <input type="text" value={tahun} onChange={(e) => setTahun(Number(e.target.value))} className="input input-bordered" placeholder="Tahun" />
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateBuku; 