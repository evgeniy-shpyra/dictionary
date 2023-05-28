import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import classNames from 'classnames'

interface DateSessionProps {
    date: string
    isFirst: boolean
}

const DateSession: React.FC<DateSessionProps> = ({ date, isFirst }) => {
    const primaryColor = useAppSelector(
        (state) => state.app.colors.primaryColor
    )

    const lineStyles = classNames('h-[20px] py-[15px]', {'pt-[25px]': !isFirst})

    return (
        <div className={lineStyles}>
            <div className="w-full h-[1px] relative bg-[#fff] rounded-sm">
                <span
                    style={{ background: primaryColor }}
                    className="px-[10px] absolute top-0 translate-y-[calc(-50%-1px)] translate-x-[-50%] left-[50%] h-[20px] text-[#fff] text-[12px]"
                >
                    {date}
                </span>
            </div>
        </div>
    )
}

export default DateSession
