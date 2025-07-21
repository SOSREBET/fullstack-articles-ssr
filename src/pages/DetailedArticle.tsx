import type { FC } from "react"
import { useParams } from "react-router-dom"


const DetailedArticle: FC = () => {
    const {id: articleId} = useParams()

    return (
        <div>DetailedArticle</div>
    )
}

export default DetailedArticle