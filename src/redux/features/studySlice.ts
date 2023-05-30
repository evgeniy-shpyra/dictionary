import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICreateQuizResponse, IWord } from '../../types/models'
import { shuffleArray } from '../../utils/shuffleArray'
import { quizApi } from '../services/quizApi'

type initialStateType = {
    wordsToStudy: IWord[]
    currentQuizId: number | null
}

const initialState: initialStateType = {
    wordsToStudy: [],
    currentQuizId: null
}

const studySlice = createSlice({
    name: 'studySlice',
    initialState,
    reducers: {
        clearStudyingSessionInfo: (state, action: PayloadAction<void>) => {
            state.wordsToStudy = []
        },
        addWordToStudy: (state, action: PayloadAction<IWord>) => {
            state.wordsToStudy.push(action.payload)
        },
        deleteWordToStudy: (
            state,
            action: PayloadAction<IWord | undefined>
        ) => {
            if (action.payload) {
                state.wordsToStudy = state.wordsToStudy.filter(
                    (word) => word.id !== action.payload?.id
                )
            } else {
                state.wordsToStudy = []
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(
            quizApi.endpoints.createQuiz.matchFulfilled,
            (state, action: PayloadAction<ICreateQuizResponse>) => {
                state.currentQuizId = action.payload.quizId
            } 
        )
        // .addMatcher(
        //     quizApi.endpoints.getMyDictionaries.matchRejected,
        //     (state, action) => {
        //         console.log('error')
        //     }
        // )
        
    },
})

export const {
    addWordToStudy,
    deleteWordToStudy,
    clearStudyingSessionInfo,
} = studySlice.actions

export default studySlice.reducer
