import { type ChangeEvent, type FC } from "react"
import type { IArticleParams } from "../types/Article"
import useSetReduxUrlParams from "../hooks/useSetReduxUrlParams"
import { Pagination } from "@mui/material"
import { routes } from "./Router"
import { useNavigate } from "react-router-dom"

interface IArticlePagination {
    reduxParams: IArticleParams
    currentPage: number
    pages: number
}

const ArticlePagination: FC<IArticlePagination> = ({ reduxParams, currentPage, pages }) => {
    const setReduxUrlParams = useSetReduxUrlParams()
    const navigate = useNavigate()

    const handleChange = (_: ChangeEvent<unknown>, value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (reduxParams) {
            setReduxUrlParams({ ...reduxParams, page: value.toString() })
        }
        navigate(
            `${routes.articles.path}?${reduxParams.search ? `search=${reduxParams.search}&` : ''}${value === 1 ? '' : `page=${value}`}`
        )
    }

    return (
        <Pagination
            color="primary"
            size="large"
            page={currentPage}
            count={pages}
            onChange={handleChange}
            boundaryCount={2}
            sx={{
                '& .MuiPaginationItem-root': {
                    color: 'white',
                },
            }}
        />
    )
}

export default ArticlePagination