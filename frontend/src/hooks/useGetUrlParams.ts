import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "./redux"
import { initialState, setParams } from "../store/reducers/articleSlice"
import type { IArticleParams } from "../types/Article"

type TUseGetUrlParams = (reduxParams: IArticleParams) => [IArticleParams, boolean]

const useGetUrlParams: TUseGetUrlParams = (reduxParams) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const newSearchParams = new URLSearchParams(searchParams)
    const newReduxParams = { ...reduxParams }
    const dispatcher = useAppDispatch()
    const [isSkip, setIsSkip] = useState<boolean>(true)

    const toDigitValidate: Array<keyof IArticleParams> = [
        'page', 
    ]

    useEffect(() => {
        toDigitValidate.forEach(key => {
            const value = searchParams.get(key)
            if (value) {
                if (isNaN(Number(value)) || 0 >= Number(value)) {
                    newSearchParams.set(key, reduxParams[key])
                }
            }
        })
        newSearchParams.forEach((value, key) => {
            if (!(key in reduxParams) || !value) {
                newSearchParams.delete(key)
            }
        })
        
        newSearchParams.forEach((value, key) => {
            if (Object.keys(newReduxParams).includes(key)) {
                newReduxParams[key as keyof IArticleParams] = value
            }
        })
        dispatcher(setParams(newReduxParams))
        setIsSkip(false)
        setSearchParams(newSearchParams)
    }, [])

    useEffect(() => {
        const newReduxParams = { ...initialState }
        searchParams.forEach((value, key) => {
            if (Object.keys(newReduxParams).includes(key)) {
                newReduxParams[key as keyof IArticleParams] = value
            }
        })
        dispatcher(setParams(newReduxParams))
    }, [searchParams])
    
    return [newReduxParams, isSkip]
}

export default useGetUrlParams