import { AnimatePresence, Variants, motion } from 'framer-motion'
import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Modes from './Modes'

interface SettingsProps {
    variants: Variants
    isVisible: boolean
    goToNextStep: () => void
}

const Settings: React.FC<SettingsProps> = ({
    variants,
    isVisible,
    goToNextStep,
}) => {
    const secondaryColor = useAppSelector(
        (state) => state.app.colors.secondaryColor
    )

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="w-full  rounded-[25px] shadow-primary p-[30px] flex flex-col"
                    style={{ backgroundColor: secondaryColor }}
                >
                    <Modes goToNextStep={goToNextStep} />
                    
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Settings