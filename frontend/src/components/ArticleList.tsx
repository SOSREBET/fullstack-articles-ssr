import { Button, Stack, Grid, Chip } from "@mui/material"
import type { FC } from "react"
import type { IArticle } from "../types/Article"
import BackdropLoader from "./BackdropLoader"
import { Link } from "react-router"
import { routes } from "./Router"

interface IArticleList {
    articles: IArticle[]
    isFetching: boolean
}

const ArticleList: FC<IArticleList> = ({ articles, isFetching }) => {
    return (
        <>
            {isFetching
                ?
                <BackdropLoader />
                :
                <Stack spacing={2}>
                    {articles.length === 0
                        ?
                        <h2>Nothing was found</h2>
                        :
                        <>
                            {articles.map((article) => (
                                <Button
                                    key={article.id}
                                    variant="text"
                                    component={Link}
                                    to={routes.detailedArticle.path.replace(':id', article.id.toString())}
                                >
                                    <Grid container spacing={1} sx={{ width: '100%' }}>
                                        <Grid size={{ lg: 'grow', sm: 12 }}><h2>{article.title}</h2></Grid>
                                        <Grid size={{ lg: 'auto', sm: 12 }}><time><Chip color="info" label={article.created_at} variant="outlined" /></time></Grid>
                                    </Grid>
                                </Button>
                            ))}
                        </>
                    }
                </Stack>
            }
        </>
    )
}

export default ArticleList