import { Stack } from "@mui/material"
import { memo, type FC } from "react"
import BackdropLoader from "./BackdropLoader"
import ArticleListItem from "./UI/ArticleListItem"
import type { IArticle } from "../types/Article"

interface IArticleList {
    articles: IArticle[]
    isFetching: boolean
}

const ArticleList: FC<IArticleList> = memo(({ articles, isFetching }) => {
    return (
        <>
            {isFetching
                ?
                <BackdropLoader />
                :
                <Stack spacing={2} role="feed">
                    {articles.length === 0
                        ?
                        <h3>Nothing was found</h3>
                        :
                        <>
                            {articles.map((article) => (<ArticleListItem key={article.id} article={article} />))}
                        </>
                    }
                </Stack>
            }
        </>
    )
})

export default ArticleList