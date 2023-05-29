import { apiUrl } from './api'
import {
    ICreateQuizRequest,
    IError,
    IHistory,
    IQuiz,
    IVerifyQuizRequest,
} from './../../types/models'
import { transformErrorFromApi } from '../../utils/transforErrorFromApi'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: (headers) => {
            headers.set('ngrok-skip-browser-warning', 'true')
            if (localStorage.getItem('token')) {
                headers.set(
                    'Authorization',
                    `Bearer ${localStorage.getItem('token')}`
                )
            }
            return headers
        },
    }),
    tagTypes: ['Quiz'],
    endpoints: (builder) => ({
        getQuiz: builder.query<IQuiz[], number>({
            query: (quizId) => ({ url: `/quiz/${quizId}` }),
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ quizId }) => ({
                              type: 'Quiz' as const,
                              id: quizId,
                          })),
                          { type: 'Quiz', id: 'LIST' },
                      ]
                    : [{ type: 'Quiz', id: 'LIST' }]
            },
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                if (response?.data?.error)
                    return transformErrorFromApi(response.data.error)
                else return transformErrorFromApi('Occurred some error')
            },
        }),
        createQuiz: builder.mutation<number, ICreateQuizRequest>({
            query: (body) => ({
                url: `quiz`,
                method: 'POST',
                body: body,
            }),
            // invalidatesTags: [
                // { type: 'MyWord', id: 'LIST' },
                // { type: 'MyDictionary', id: 'LIST' },
            // ],
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                if (response?.data?.error)
                    return transformErrorFromApi(response.data.error)
                else return transformErrorFromApi('Occurred some error')
            },
        }),
        verifyQuiz: builder.mutation<{status: string}, IVerifyQuizRequest>({
            query: (data) => ({
                url: `quiz/${data.quizId}`,
                method: 'POST',
                body: data.body
            }),
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                if (response?.data?.error)
                    return transformErrorFromApi(response.data.error)
                else return transformErrorFromApi('Occurred some error')
            },
        }),
    }),

})
