import { lazy, Suspense, type FC } from "react"
import { Alert, AlertTitle, Grid } from "@mui/material"
import AppHelmet from "../components/AppHelmet"
import { useAppSelector } from "../hooks/redux"
import useGetUrlParams from "../hooks/useGetUrlParams"
import { useGetArticlesQuery } from "../services/articleApi"
import ArticleList from "../components/ArticleList"

export interface Article {
    id: number;
    title: string;
    text: string;
    date: string;
}

const LazyArticleFilter = lazy(() => import('../components/ArticleFilter'))
const LazyArticlePagination = lazy(() => import('../components/ArticlePagination'))

const Articles: FC = () => {
    const reduxParams = useAppSelector(state => state.articleSlice)
    const currentPage = useAppSelector(state => state.articleSlice.page)
    const [newReduxParams, isSkip] = useGetUrlParams(reduxParams)
    const { data, isFetching, isError } = useGetArticlesQuery(newReduxParams, { skip: isSkip })

    return (
        <Grid
            container
            spacing={2}
            maxWidth={'xl'}
            component='section'
            className="container"
        >   
            <h1>Articles</h1>
            <AppHelmet title="Articles"/>
            <Suspense>
                <LazyArticleFilter reduxParams={newReduxParams} />
            </Suspense>

            
            <h2 hidden>Search results</h2>

            {data &&
                <ArticleList
                    articles={data.results}
                    isFetching={isFetching}
                />
            }
            {isError &&
                <Alert variant="filled" severity="error" >
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong.
                </Alert>
            }

            {data && data.count > 0 &&
                <Suspense>
                    <LazyArticlePagination
                        reduxParams={newReduxParams}
                        currentPage={parseInt(currentPage)}
                        pages={data.pages}
                    />
                </Suspense>
            }
        </Grid>
    )
}

export default Articles