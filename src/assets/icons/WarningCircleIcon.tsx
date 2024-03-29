import React from 'react'
import { IIcon } from '../../types/models'

const WarningCircleIcon: React.FC<IIcon> = ({ height, width, color, onClick }) => {
    return (
        <span onClick={onClick}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.797 6.20304 16.875 10 16.875C13.797 16.875 16.875 13.797 16.875 10C16.875 6.20304 13.797 3.125 10 3.125ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
                    fill="#FE2836"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 5.625C10.3452 5.625 10.625 5.90482 10.625 6.25V10.625C10.625 10.9702 10.3452 11.25 10 11.25C9.65482 11.25 9.375 10.9702 9.375 10.625V6.25C9.375 5.90482 9.65482 5.625 10 5.625Z"
                    fill={color}
                />
                <path
                    d="M10 14.375C10.5178 14.375 10.9375 13.9553 10.9375 13.4375C10.9375 12.9197 10.5178 12.5 10 12.5C9.48223 12.5 9.0625 12.9197 9.0625 13.4375C9.0625 13.9553 9.48223 14.375 10 14.375Z"
                    fill={color}
                />
            </svg>
        </span>
    )
}

export default WarningCircleIcon
