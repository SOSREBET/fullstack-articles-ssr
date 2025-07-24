import type { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetArticleQuery } from "../services/articleApi"
import { Alert, AlertTitle, Grid } from "@mui/material"


const DetailedArticle: FC = () => {
    const {id: articleId} = useParams()
    const { data: article, isFetching, isError } =  useGetArticleQuery(articleId ? articleId : '')

    return (
        <Grid container>
            {isError &&
                <Alert variant="filled" severity="error" >
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong.
                </Alert>  
            }
            {article &&
                <Grid>
                    <h2>{article.title}</h2>
                    <p>{article.text}</p>
                    <time>{article.created_at}</time>
                </Grid>
            }
        </Grid>
    )
}

export default DetailedArticle