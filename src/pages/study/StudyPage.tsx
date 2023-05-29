import React from 'react'
import StudyNavigation from '../../components/study/StudyNavigation'

import { useAppDispatch } from '../../hooks/reduxHooks'
import { clearStudyingSessionInfo } from '../../redux/features'
import ArrowCircleLeftIcon from '../../assets/icons/ArrowCircleLeftIcon'
import { useNavigate } from 'react-router-dom'

const StudyPage = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    React.useEffect(() => {
        return () => {
            dispatch(clearStudyingSessionInfo())
        }
    }, [])

    const goToPreviousStep = () => {
        navigate(-1)
    }

    return (
        <>
            <div className="w-full max-w-[900px]  h-full mx-auto pt-[40px] animate-appearance pb-[40px]"></div>
            <div
                onClick={goToPreviousStep}
                className="absolute top-[50%] translate-y-[-50%] left-[15px] fill-white hover:fill-[#d1d4d6] transition-colors"
            >
                <ArrowCircleLeftIcon width="45px" height="45px" />
            </div>
        </>
    )
}

export default StudyPage
