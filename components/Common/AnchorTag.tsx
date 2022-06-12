type Props = {
    href: string,
    label: string
}

export const AnchorTag = ({ href, label }: Props) => {
    return (
        <a className="text-blue-800" href={href} rel="noopener noreferrer" target="_blank">{label}</a>
    );
};
