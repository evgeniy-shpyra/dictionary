import React from 'react'
import { IconTypes } from '../../types/assetsTypes'

const PluseIcon: React.FC<IconTypes> = ({ width, height, color }) => {
    return (
        <span>
            <svg
                width={width}
                height={height}
                viewBox="0 0 32 32"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 4C16.5523 4 17 4.44772 17 5V27C17 27.5523 16.5523 28 16 28C15.4477 28 15 27.5523 15 27V5C15 4.44772 15.4477 4 16 4Z"
                />
            </svg>
        </span>
    )
}

export default PluseIcon
