import { AnchorTag } from "./AnchorTag"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t border-gray-300 mx-auto text-center">
            <div>
                Made with <span className="text-red-700">&#9829;</span> using&nbsp;
                <AnchorTag href="https://nextjs.org" label="Next.js" /> and&nbsp;
                <AnchorTag href="https://tailwindcss.com" label="Tailwind CSS" />.
            </div>
            <div>
                &copy; {new Date().getFullYear()} <AnchorTag href="https://bio.link/ahmadgirach" label="Ahmad Girach" />.
            </div>
            <div>
                Code is released under Creative Commons Zero v1.0 Universal License <AnchorTag href="https://github.com/ahmadgirach/nextjs-tailwind-pricing-components" label="here" />.
            </div>
        </footer>
    )
}
