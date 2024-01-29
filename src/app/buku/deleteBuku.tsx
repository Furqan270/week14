"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { parse } from "path";
type Buku = {
    id: number;
    judul: string;
    penulis: string;
    tahun: number;
}

const DeleteBuku = ({buku} : {buku : Buku}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const router = useRouter();

    const handleDelete = async (bukuId : Number) => {
        await axios.delete(`api/buku/${bukuId}`);
    router.refresh();
    setIsOpen(false);
        }

    

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="btn btn-error btn-sm" onClick={handleModal}> Delete</button>
            <div className={isOpen ? 'modal modal-open' : 'modal'}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure To Delete {buku.judul}?</h3>
                    
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>No</button>
                            <button type="button" onClick={()=> handleDelete(buku.id)} className="btn btn-primary">Yes</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBuku; 