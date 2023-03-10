import { transformErrorFromApi } from '../utils/transforErrorFromApi'
import { IError } from './../../types/models/IError'
import {
    ILoginUserRequest,
    IRegistrationUserRequest,
    IUser,
} from './../../types/models'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { AppDispatch } from './../store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ErrorResponse } from '@remix-run/router'

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/',
        prepareHeaders: (headers) => {
            if (localStorage.getItem('token')) {
                headers.set(
                    'authorization',
                    `Bearer ${localStorage.getItem('token')}`
                )
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IUser, ILoginUserRequest>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                return transformErrorFromApi(response.data.message)
            },
        }),
        registration: builder.mutation<IUser, IRegistrationUserRequest>({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                body,
            }),
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                return transformErrorFromApi(response.data.message)
            },
        }),
        getUserInfo: builder.query<IUser, void>({
            query: () => ({
                url: 'user/userinfo',
            }),
            transformErrorResponse: (
                response: {
                    status: number
                    data: IError
                },
                meta,
                arg
            ) => {
                return transformErrorFromApi(response.data.message)
            },
        }),
    }),
})
