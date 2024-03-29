import React from 'react'
import { IIcon } from '../../types/models'

const CircleCloseIcon: React.FC<IIcon> = ({ height, width, color, onClick }) => {
    return (
        <span onClick={onClick}>
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
                    d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071C10.9024 20.3166 10.9024 19.6834 11.2929 19.2929L19.2929 11.2929C19.6834 10.9024 20.3166 10.9024 20.7071 11.2929Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929Z"
                />
            </svg>
        </span>
    )
}

export default CircleCloseIcon
