import type { FC } from "react"
import { useParams } from "react-router-dom"
import { useGetArticleQuery } from "../services/articleApi"
import { Alert, AlertTitle, Breadcrumbs, Chip, Grid, Link as MUILink, Typography } from "@mui/material"
import BackdropLoader from "../components/BackdropLoader"
import { Link } from "react-router-dom"
import { routes } from "../components/Router"


const DetailedArticle: FC = () => {
    const { id: articleId } = useParams()
    const { data: article, isFetching, isError } = useGetArticleQuery(articleId ? articleId : '')

    return (
        <Grid container className='container'>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator="›"
                sx={{
                    marginBottom: 2,
                    '& .MuiBreadcrumbs-separator': {
                        color: 'white',
                    },
                }}
            >
                <MUILink underline="hover" color="info" component={Link} to={routes.articles.path}>
                    Articles
                </MUILink>
                {article
                    ? <Typography sx={{ color: 'white' }}>Article #{article && article.id}</Typography>
                    : <Typography sx={{ color: 'white' }}>Article not found</Typography>
                }
            </Breadcrumbs>

            {isError &&
                <Grid size={12}><Alert variant="filled" severity="error" >
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong.
                </Alert></Grid>
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