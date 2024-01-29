export const metadata = {
    title : 'Buku',
}

export default function BukuLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="py-10 px-10">{children} </div>
    )
}