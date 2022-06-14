type Props = {
    noOfViews: number
}

export const NoOfViews = ({ noOfViews }: Props) => {
    const formatted = new Intl.NumberFormat('en-IN').format(noOfViews)
    return (
        <div className="text-center">
            <p>{formatted}</p>
            <p className="text-gray-600 text-sm">impressions / views</p>
        </div>
    )
}
