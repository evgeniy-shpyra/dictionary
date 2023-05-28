import { apiUrl } from './api'
import {
    IError,
    IHistory,
} from './../../types/models'
import { transformErrorFromApi } from '../../utils/transforErrorFromApi'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const historyApi = createApi({
    reducerPath: 'historyApi',
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
    tagTypes: ['History'],
    endpoints: (builder) => ({
        getMyDictionaries: builder.query<IHistory[], void>({
            query: () => ({ url: '/history' }),
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ historyID }) => ({
                              type: 'History' as const,
                              id: historyID,
                          })),
                          { type: 'History', id: 'LIST' },
                      ]
                    : [{ type: 'History', id: 'LIST' }]
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
    }),
})
