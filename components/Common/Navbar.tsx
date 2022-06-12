import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex flex-col md:flex-row justify-center items-center gap-4 list-none">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/crazzy'>Crazzy</Link></li>
                <li><Link href='/cartel'>Cartel</Link></li>
                <li><Link href='/redirect'>Redirect</Link></li>
            </ul>
        </nav>
    )
}
