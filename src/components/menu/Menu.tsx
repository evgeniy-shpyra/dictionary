import React from 'react'
import './../../css/menu.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import classNames from 'classnames'
import { userApi } from '../../redux/services'
import useErrorHandler from '../../hooks/useErrorHandler'
import { openInfoBlock, logOut } from '../../redux/features'

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="absolute top-[15px] right-[15px]">
            <div
                onClick={() => {
                    setIsOpen((prev) => !prev)
                }}
                className={`menu-button${isOpen ? ' menu-button-active' : ''} `}
            >
                <span />
            </div>
            <DropDown isOpen={isOpen} />
        </div>
    )
}

const dropDownVariants = {
    hidden: {
        x: 95,
    },
    visible: () => ({
        x: 10,
        transition: { delay: 0.2 },
    }),
}

interface DropDownProps {
    isOpen: boolean
}

const DropDown: React.FC<DropDownProps> = ({ isOpen }) => {
    const [logout, { isSuccess, error }] = userApi.useLogoutMutation()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (isSuccess) {
            dispatch(
                openInfoBlock({
                    type: 'success',
                    title: 'Success',
                    text: 'You are logged out',
                })
            )
            dispatch(logOut())
        }
       
    }, [isSuccess])
    
    useErrorHandler(error as string)


    const colors = useAppSelector((state) => state.app.colors)
    const username = useAppSelector(
        (state) => state.user.userData?.username
    )

    const itemStyle = classNames(
        'pl-[15px] pr-[25px] text-textDark text-[14px]'
    )

    const handleLogout = () => {
        logout()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={dropDownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className={`py-[15px] rounded-l-[12px] absolute top-[40px] right-[-15px] select-none`}
                    style={{ backgroundColor: colors.secondaryColor }}
                >
                    <ul className="w-max">
                        {username && (
                            <li className={`${itemStyle} font-bold pb-[7px] `}>
                                {username}
                            </li>
                        )}
                        <li
                            className={`${itemStyle} py-[3px] transition-colors hover:opacity-[0.5] cursor-pointer`}
                            onClick={handleLogout}
                        >
                            Log out
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Menu
