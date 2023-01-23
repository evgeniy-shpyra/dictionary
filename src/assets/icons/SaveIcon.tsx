import React from 'react'
import { IconTypes } from '../../types'

const SaveIcon: React.FC<IconTypes> = ({ width, height, color }) => {
    return (
        <span>
            <svg
                width={width}
                height={height}
                viewBox="0 0 30 30"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M25.7062 9.37969L20.618 4.29258C20.2664 3.94219 19.8 3.75 19.3078 3.75H5.625C4.59141 3.75 3.75 4.59141 3.75 5.625V24.375C3.75 25.4086 4.59141 26.25 5.625 26.25H24.375C25.4086 26.25 26.25 25.4086 26.25 24.375V10.7004C26.2512 10.2094 26.0531 9.72891 25.7062 9.37969ZM19.6875 24.375H10.3125V17.8125H19.6875V24.375ZM24.375 24.375H21.5625V17.8125C21.5625 16.7789 20.7211 15.9375 19.6875 15.9375H10.3125C9.27891 15.9375 8.4375 16.7789 8.4375 17.8125V24.375H5.625V5.625L19.2937 5.62031L24.375 10.7016V24.3762V24.375Z" />
                <path d="M17.8125 7.5H11.25C10.732 7.5 10.3125 7.91953 10.3125 8.4375C10.3125 8.95547 10.732 9.375 11.25 9.375H17.8125C18.3305 9.375 18.75 8.95547 18.75 8.4375C18.75 7.91953 18.3305 7.5 17.8125 7.5Z" />
            </svg>
        </span>
    )
}

export default SaveIcon
