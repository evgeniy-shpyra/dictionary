import React from 'react'

interface DateSessionProps {
    date: string
}

const DateSession: React.FC<DateSessionProps> = ({ date }) => {
    return (
        <div className="w-full h-[1px]">
            <span>{date}</span>
        </div>
    )
}

export default DateSession
