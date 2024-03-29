import React from 'react'
import { IIcon } from '../../types/models'

const SearchFindIcon: React.FC<IIcon> = ({ height, width, color, onClick }) => {
    return (
        <span onClick={onClick}>
            <svg
                width={width}
                height={height}
                viewBox="0 0 24 24"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.875 3.75C6.93997 3.75 3.75 6.93997 3.75 10.875C3.75 14.81 6.93997 18 10.875 18C14.81 18 18 14.81 18 10.875C18 6.93997 14.81 3.75 10.875 3.75ZM2.25 10.875C2.25 6.11154 6.11154 2.25 10.875 2.25C15.6385 2.25 19.5 6.11154 19.5 10.875C19.5 15.6385 15.6385 19.5 10.875 19.5C6.11154 19.5 2.25 15.6385 2.25 10.875Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9133 15.9135C16.2062 15.6206 16.681 15.6206 16.9739 15.9135L21.5302 20.4697C21.8231 20.7626 21.8231 21.2375 21.5302 21.5304C21.2373 21.8233 20.7624 21.8233 20.4695 21.5304L15.9133 16.9741C15.6204 16.6812 15.6204 16.2064 15.9133 15.9135Z"
                />
            </svg>
        </span>
    )
}

export default SearchFindIcon
