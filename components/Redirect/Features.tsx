import React from "react"

type Feature = {
    name: string,
    available: boolean
}

type Props = {
    features: Feature[]
}

export const Features = ({ features }: Props) => {
    return (
        <ul>
            {
                React.Children.toArray(
                    features.map(({ name, available }) => (
                        <li>
                            <span
                                className='text-xl'
                                dangerouslySetInnerHTML={{ __html: available ? '&rarr;' : '&otimes;' }}>
                            </span>
                            &nbsp;
                            <span className={`${!available ? 'line-through opacity-60' : ''}`}>{name}</span>
                        </li>
                    ))
                )
            }
        </ul>
    )
}
