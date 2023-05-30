import { Variants } from 'framer-motion'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import Iteration from './iteration/Iteration'
import { NavigationEnum } from '../../types/navigation'


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.15,
        },
    },
}

const StudyNavigation: React.FC = () => {

    return (
        <div className="h-full w-full flex items-center justify-center">
             <Routes>
                <Route
                    path={NavigationEnum.quiz}
                    element={<Iteration variants={variants} />}
                />
            </Routes>
        </div>
    )
  
}

export default StudyNavigation
