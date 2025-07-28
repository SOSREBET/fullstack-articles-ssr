import { Link } from "react-router-dom"
import type { FC } from "react"
import { Breadcrumbs, Link as MUILink, Typography } from "@mui/material"
import type { IArticleDetail } from "../../types/Article"
import { routes } from "../Router"

interface IDetailedArticleBreadcrumbs {
    article: IArticleDetail | undefined
}

const DetailedArticleBreadcrumbs: FC<IDetailedArticleBreadcrumbs> = ({ article }) => {
    return (
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


    )
}

export default DetailedArticleBreadcrumbs