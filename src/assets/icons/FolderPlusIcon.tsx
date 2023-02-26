import React from 'react'
import { IconTypes } from '../../types/models'

const FolderPlusIcon: React.FC<IconTypes> = ({ height, width, color }) => {
    return (
        <span>
            <svg
                width={width}
                height={height}
                viewBox="0 0 32 32"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M27 9H16.4137L12.9925 5.57875C12.6225 5.21125 12.1125 5 11.5938 5H5C3.8975 5 3 5.8975 3 7V25.075C3 26.1363 3.86375 27 4.925 27H27.1125C28.1537 27 29 26.1537 29 25.1125V11C29 9.8975 28.1025 9 27 9ZM11.58 6.995L13.585 9H5V7L11.58 6.995ZM27 25H5V11H27V25Z" />
                <path d="M15 15V17H13C12.4475 17 12 17.4475 12 18C12 18.5525 12.4475 19 13 19H15V21C15 21.5525 15.4475 22 16 22C16.5525 22 17 21.5525 17 21V19H19C19.5525 19 20 18.5525 20 18C20 17.4475 19.5525 17 19 17H17V15C17 14.4475 16.5525 14 16 14C15.4475 14 15 14.4475 15 15Z" />
            </svg>
        </span>
    )
}

export default FolderPlusIcon
