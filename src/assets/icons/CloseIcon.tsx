import React from 'react'
import { IIcon } from '../../types/models'

const CloseIcon: React.FC<IIcon> = ({ height, width, color, onClick }) => {
    return (
        <span onClick={onClick}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 20 20"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0669 3.93306C16.311 4.17714 16.311 4.57286 16.0669 4.81694L4.81694 16.0669C4.57286 16.311 4.17714 16.311 3.93306 16.0669C3.68898 15.8229 3.68898 15.4271 3.93306 15.1831L15.1831 3.93306C15.4271 3.68898 15.8229 3.68898 16.0669 3.93306Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.93306 3.93306C4.17714 3.68898 4.57286 3.68898 4.81694 3.93306L16.0669 15.1831C16.311 15.4271 16.311 15.8229 16.0669 16.0669C15.8229 16.311 15.4271 16.311 15.1831 16.0669L3.93306 4.81694C3.68898 4.57286 3.68898 4.17714 3.93306 3.93306Z"
                />
            </svg>
        </span>
    )
}

export default CloseIcon
