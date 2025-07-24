import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendDomain } from './domains'
import type { IArticleList, IArticleDetail, IArticleParams } from '../types/Article'

export const articleApi = createApi({
    reducerPath: 'articleApi',
    tagTypes: ['Articles'],
    baseQuery: fetchBaseQuery({ 
        baseUrl: backendDomain + '/api/v1/article/',
    }),

    endpoints: (builder) => ({
        getArticles: builder.query<IArticleList, IArticleParams>({
            query: (props) => ({
                url: '',
                params: props,
                method: 'GET'
            }),
            providesTags: () => ['Articles'],
        }),

        getArticle: builder.query<IArticleDetail, string>({
            query: (articleId) => ({
                url: `${articleId}/`,
                method: 'GET'
            }),
        }),
    }),
})

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
} = articleApi