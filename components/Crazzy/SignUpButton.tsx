type Props = {
    label?: string
}

export const SignUpButton = ({ label }: Props) => {
    return (
        <div className="p-3">
            <button className="text-white bg-blue-500 rounded-sm font-bold px-4 py-2 w-full">
                {label || 'Start Free Trial'}
            </button>
        </div>
    )
}
