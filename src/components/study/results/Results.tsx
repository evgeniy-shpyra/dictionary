import { AnimatePresence, Variants, motion } from 'framer-motion'
import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'

import { useNavigate } from 'react-router-dom'
import Button from '../../input/Button'
import { NavigationEnum } from '../../../types/navigation'

interface ResultsProps {
    variants: Variants
}

const Results: React.FC<ResultsProps> = ({
    variants,
}) => {

    const score = useAppSelector(state => state.study.score)

    const [isVisible, setIsVisible] = React.useState(true)
    const deviceType = useAppSelector(state => state.app.deviceType)

    const secondaryColor = useAppSelector(
        (state) => state.app.colors.secondaryColor
    )

    const navigation = useNavigate()

    const handlerGoToHome = () => {
        navigation(NavigationEnum.myDictionaries)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full h-[500px] rounded-[25px] justify-center items-center shadow-primary p-[30px] flex flex-col"
                    style={{ backgroundColor: secondaryColor }}
                >
                    <h1 className="text-[35px] text-bold">
                        Your score: <span className="text-success">{score}</span>
                    </h1>
                    <div className="text-center pt-[50px]">
                        <Button
                            size={deviceType === 'Mobile' ? 'small' : 'medium'}
                            color="#0086EA"
                            hoverColor="#53A0FF"
                            activeColor="#0D6CBD"
                            onClick={handlerGoToHome}
                        >
                            Go to home
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Results
