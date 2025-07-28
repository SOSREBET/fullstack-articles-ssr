import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "./redux"
import { setParams } from "../store/reducers/articleSlice"
import type { IArticleParams } from "../types/Article"

type TSetReduxUrlParams = (newParams: IArticleParams) => void
type TUseSetReduxUrlParams = () => TSetReduxUrlParams

const useSetReduxUrlParams: TUseSetReduxUrlParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatcher = useAppDispatch()
    const newSearchParams = new URLSearchParams(searchParams)

    const setReduxUrlParams: TSetReduxUrlParams = (newParams) => {
        for (let key in newParams) {
            if (Object.keys(newParams).includes(key)) {
                const value = newParams[key as keyof IArticleParams]
                if (value.length) {
                    newSearchParams.set(key, value)
                } else {
                    newSearchParams.delete(key)
                }
            }
        }
        setSearchParams(newSearchParams)
        dispatcher(setParams(newParams))
    }
    return setReduxUrlParams
}

export default useSetReduxUrlParams