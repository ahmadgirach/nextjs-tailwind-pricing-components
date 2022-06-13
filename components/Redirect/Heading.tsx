type Props = {
    label: string
}

export const Heading = ({ label }: Props) => {
    return (
        <div>
            <h4 className="text-sm text-pink-500 uppercase font-semibold">{label}</h4>
        </div>
    )
}
