import { userApi } from './services/userApi'
import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/appSlice'
import dictionarySlice from './features/dictionarySlice'
import userSlice from './features/userSlice'
import wordSlice from './features/wordSlice'
import { dictionaryApi } from './services/dictionaryApi'
import studySlice from './features/studySlice'
import { historyApi } from './services/history'
import { quizApi } from './services/quizApi'

const store = configureStore({
    reducer: {
        [dictionaryApi.reducerPath]: dictionaryApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [historyApi.reducerPath]: historyApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
        user: userSlice,
        app: appSlice,
        dictionary: dictionarySlice,
        word: wordSlice,
        study: studySlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            dictionaryApi.middleware,
            userApi.middleware,
            historyApi.middleware,
            quizApi.middleware,
        ]),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
