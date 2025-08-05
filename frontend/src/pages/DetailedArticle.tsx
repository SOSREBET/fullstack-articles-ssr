import type { FC } from "react"
import { useParams } from "react-router"
import { useGetArticleQuery } from "../services/articleApi"
import { Alert, AlertTitle, Chip, Grid, Typography } from "@mui/material"
import BackdropLoader from "../components/BackdropLoader"
import DetailedArticleBreadcrumbs from "../components/UI/DetailedArticleBreadcrumbs"
import AppHelmet from "../components/AppHelmet"


const DetailedArticle: FC = () => {
    const { id: articleId } = useParams()
    const { data: article, isFetching, isError, isSuccess } = useGetArticleQuery(articleId ? articleId : '')

    return (
        <Grid container className='container'>
            {isSuccess &&
                <AppHelmet title={`Article ${article ? `#${article.id}` : 'not found'}`} />
            }
            <DetailedArticleBreadcrumbs article={article} />

            {isError &&
                <>
                    <AppHelmet title={'Article not found'} />
                    <Grid size={12}>
                        <Alert variant="filled" severity="error" >
                            <AlertTitle>Error</AlertTitle>
                            Article not found.
                        </Alert>
                    </Grid>
                </>
            }
            {article &&
                <Grid>
                    <h2><Typography fontFamily={'inherit'} color="info" fontSize='inherit'>{article.title}</Typography></h2>
                    <Typography fontFamily={'inherit'} marginTop={2}>{article.text}</Typography>
                    <time><Chip color="info" label={article.created_at} variant="outlined" sx={{ marginTop: 2 }} /></time>
                </Grid>
            }
            {isFetching && <BackdropLoader />}
        </Grid>
    )
}

export default DetailedArticle