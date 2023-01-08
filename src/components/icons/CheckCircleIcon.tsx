import React from 'react'
import { IconTypes } from '../../types'

const CheckCircleIcon: React.FC<IconTypes> = ({ height, width, color }) => {
    return (
        <span>
            <svg
                width={width}
                height={height}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.2236 12.3097C22.6048 12.7093 22.5899 13.3423 22.1903 13.7236L14.8528 20.7236C14.4662 21.0924 13.8579 21.0921 13.4716 20.723L9.80912 17.223C9.40983 16.8414 9.39547 16.2084 9.77704 15.8091C10.1586 15.4098 10.7916 15.3955 11.1909 15.777L14.1631 18.6174L20.8097 12.2765C21.2093 11.8952 21.8423 11.9101 22.2236 12.3097Z"
                    fill={color}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                    fill={color}
                />
            </svg>
        </span>
    )
}

export default CheckCircleIcon
