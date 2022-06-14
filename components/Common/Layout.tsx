import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

type Props = {
    children: JSX.Element
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <div className='bg-zinc-200 font-primary'>
                <Navbar />
                <div className='flex flex-col justify-center items-center gap-4'>
                    <main className='flex-1 antialiased min-w-full min-h-screen'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
