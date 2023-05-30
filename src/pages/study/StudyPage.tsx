import React from 'react'
import StudyNavigation from '../../components/study/StudyNavigation'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { clearStudyingSessionInfo } from '../../redux/features'
import ArrowCircleLeftIcon from '../../assets/icons/ArrowCircleLeftIcon'
import { useNavigate } from 'react-router-dom'
import { quizApi } from '../../redux/services/quizApi'
import useErrorHandler from '../../hooks/useErrorHandler'
import { getQuizUrl } from '../../utils/navigateUrl'
import { NavigationEnum } from '../../types/navigation'

const StudyPage = () => {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { wordsToStudy } = useAppSelector((state) => state.study)

    const [createQuiz, { isLoading, error, isSuccess: isSuccessCreate, data }] =
        quizApi.useCreateQuizMutation()

    useErrorHandler(error as string)

    React.useEffect(() => {
        if (data) navigate(getQuizUrl({ id: data.quizId }))
    }, [data])

    React.useEffect(() => {
        return () => {
            dispatch(clearStudyingSessionInfo())
        }
    }, [])

    const goToPreviousStep = () => {
        navigate(NavigationEnum.myDictionaries)
    }

    React.useEffect(()=>{
        handleOnCreateQuiz()
    }, [])

    const handleOnCreateQuiz = React.useCallback(() => {
        createQuiz({ words: wordsToStudy })
    }, [wordsToStudy])

    return (
        <>
            <div className="w-full h-[100vh] max-w-[900px] mx-auto pt-[40px] animate-appearance pb-[40px]">
                <StudyNavigation />
            </div>
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
