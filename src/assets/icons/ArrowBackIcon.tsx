import React from 'react'
import { IIcon } from '../../types/models'

const ArrowBackIcon: React.FC<IIcon> = ({ width, height, color, onClick }) => {
    return (
        <span onClick={onClick}>
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
                    d="M10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711L5.41421 11L10.7071 16.2929C11.0976 16.6834 11.0976 17.3166 10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929L9.29289 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.29289Z"
                    fill={color}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 11C3 10.4477 3.44772 10 4 10H21C23.1217 10 25.1566 10.8429 26.6569 12.3431C28.1571 13.8434 29 15.8783 29 18C29 20.1217 28.1571 22.1566 26.6569 23.6569C25.1566 25.1571 23.1217 26 21 26H10C9.44772 26 9 25.5523 9 25C9 24.4477 9.44772 24 10 24H21C22.5913 24 24.1174 23.3679 25.2426 22.2426C26.3679 21.1174 27 19.5913 27 18C27 16.4087 26.3679 14.8826 25.2426 13.7574C24.1174 12.6321 22.5913 12 21 12H4C3.44772 12 3 11.5523 3 11Z"
                    fill={color}
                />
            </svg>
        </span>
    )
}

export default ArrowBackIcon
