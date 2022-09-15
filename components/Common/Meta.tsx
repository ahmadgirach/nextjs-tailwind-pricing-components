import Head from "next/head";

type Props = {
    title?: string,
    keywords?: string,
    description?: string,
}

export const Meta = ({
    title = 'Pricing Component - Jazz',
    keywords = 'Pricing components, next.js, tailwind css, typescript, responsive web design, ui',
    description = 'These are some pricing components developed by Ahmad Girach using Next.js, TypeScript and Tailwind CSS.' }: Props
) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link rel="icon" href="./favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};