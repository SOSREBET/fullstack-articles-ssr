import type { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetArticleQuery } from "../services/articleApi"
import { Alert, AlertTitle, Chip, Grid, Typography } from "@mui/material"
import BackdropLoader from "../components/BackdropLoader"
import DetailedArticleBreadcrumbs from "../components/UI/DetailedArticleBreadcrumbs"
import AppHelmet from "../components/AppHelmet"


const DetailedArticle: FC = () => {
    const { id: articleId } = useParams()
    const { data: article, isFetching, isError } = useGetArticleQuery(articleId ? articleId : '')

    return (
        <Grid container className='container'>
            <AppHelmet title={`Article ${article ? `#${article.id}` : 'not found'}`} />
            <DetailedArticleBreadcrumbs article={article} />

            {isError &&
                <Grid size={12}>
                    <Alert variant="filled" severity="error" >
                        <AlertTitle>Error</AlertTitle>
                        Something went wrong.
                    </Alert>
                </Grid>
            }
            {article &&
                <Grid>
                    <Typography fontFamily={'inherit'} color="info"><h2>{article.title}</h2></Typography>
                    <Typography fontFamily={'inherit'} marginTop={2}><p>{article.text}</p></Typography>
                    <time><Chip color="info" label={article.created_at} variant="outlined" sx={{ marginTop: 2 }} /></time>
                </Grid>
            }
            {isFetching && <BackdropLoader />}
        </Grid>
    )
}

export default DetailedArticle