import { FC } from "react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import { Link } from "react-router"
import { routes } from "../Router"
import { IArticle } from "../../types/Article"

interface IArticleListItem {
    article: IArticle
}

const ArticleListItem: FC<IArticleListItem> = ({ article }) => {
    return (
        <article>
            <Button
                variant="text"
                component={Link}
                to={routes.detailedArticle.path.replace(':id', article.id.toString())}
            >
                <Grid container spacing={1} sx={{ width: '100%' }}>
                    <Grid size={{ lg: 'grow', sm: 12 }}><h3>{article.title}</h3></Grid>
                    <Grid size={{ lg: 'auto', sm: 12 }}><time><Chip color="info" label={article.created_at} variant="outlined" /></time></Grid>
                </Grid>
            </Button>
        </article>
    )
}

export default ArticleListItem