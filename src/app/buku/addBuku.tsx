"use client"
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { parse } from "path";

const AddBuku = () => {
    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState("");
    const [tahun, setTahun] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    
    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('api/buku', {
            judul : judul,
            penulis : penulis,
            tahun : parseInt(tahun),
        })
        setJudul("");
        setPenulis("");
        setTahun("");
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button className="btn" onClick={handleModal}> add New Book</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add Buku</h3>
                    <form onSubmit={handleSubmit}>
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
                            <input type="text" value={tahun} onChange={(e) => setTahun(e.target.value)} className="input input-bordered" placeholder="Tahun" />
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

export default AddBuku; 