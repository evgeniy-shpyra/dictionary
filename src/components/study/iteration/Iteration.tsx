import { AnimatePresence, motion, Variants } from 'framer-motion'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import Button from '../../input/Button'
import TextInput from '../../input/TextInput'
import { quizApi } from '../../../redux/services/quizApi'
import useErrorHandler from '../../../hooks/useErrorHandler'
import { IQuiz } from './../../../types/models/IQuiz'
import { useNavigate } from 'react-router-dom'

interface IterationProps {
    variants: Variants
}

const Iteration: React.FC<IterationProps> = ({ variants }) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const [value, setValue] = React.useState('')


    const navigate = useNavigate()

    const secondaryColor = useAppSelector(
        (state) => state.app.colors.secondaryColor
    )
    const quizId = useAppSelector((state) => state.study.currentQuizId)

    const {
        data: dataGet,
        isLoading,
        error: errorGet,
    } = quizApi.useGetQuizQuery(quizId ? quizId : 0)

    useErrorHandler(errorGet as string)

    const [
        verifyQuiz,
        { isLoading: isLoadingVerify, error, isSuccess: isSuccessVerify },
    ] = quizApi.useVerifyQuizMutation()

    React.useEffect(() => {
        !isLoadingVerify && setValue('')
    }, [isLoadingVerify])


    React.useEffect(() => {
        if(dataGet?.quizId) setIsVisible(true)
        // console.log(dataGet)
        if(dataGet?.results){

            navigate('/quiz/results')
        }
    }, [dataGet])

    const onChangeValue = (e: React.ChangeEvent<any>) => {
        setValue(e.target.value)
    }

    const onAnswerBtnHandler = () => {
        if (quizId && dataGet) {
            if (dataGet?.name) {
                verifyQuiz({
                    body: {
                        translation: value,
                    },
                    quizId,
                })
                setIsVisible(false)
            }
            if (dataGet?.translation) {
                verifyQuiz({
                    body: {
                        name: value,
                    },
                    quizId,
                })
                setIsVisible(false)
            }

        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                        backgroundColor: secondaryColor,
                        // borderColor: isError
                        //     ? '#FE2836'
                        //     : secondaryColor,
                    }}
                    className={`w-[550px] rounded-[25px] p-[30px] border-2 transition-all`}
                >
                    <h3 className="text-[55px] font-[500] tracking-tight text-center pb-[30px]">
                        {dataGet?.name && dataGet.name}
                        {dataGet?.translation && dataGet.translation}
                    </h3>
                    <div className="flex items-center">
                        <TextInput
                            width="100%"
                            size="large"
                            value={value}
                            onChange={onChangeValue}
                            name="inputTranslate"
                            placeholder={
                                dataGet as IQuiz && !dataGet?.translation ? 'Translation' : 'Word'
                            }
                        />
                        <Button
                            size="large"
                            styles="ml-[20px]"
                            hoverColor="#53A0FF"
                            activeColor="#0D6CBD"
                            onClick={onAnswerBtnHandler}
                        >
                            Answer
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Iteration
