import { useEffect, useState, type FC } from "react"
import { Link } from "react-router-dom"
import { Button, Grid } from "@mui/material"
import { routes } from "../components/Router"
import AppHelmet from "../components/AppHelmet"

export interface Article {
  id: number;
  title: string;
  text: string;
  date: string;
}

const Articles: FC = () => {  
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/database.json'); // Путь от public/
            const data: Article[] = await response.json();
            setArticles(data);
        } catch (error) {
            console.error('Ошибка загрузки:', error)
        } finally {
            setIsLoading(false)
        }
        }
        fetchData()
    }, [])

    return (
        <Grid 
            container
            spacing={2}
            sx={{
                
            }}
            maxWidth={'xl'}
            component='section'
            className="container"
        >
            <AppHelmet title="Articles" />
            {articles.map((article) => (
                <div key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.text}</p>
                <time>{article.date}</time>
                </div>
            ))}
        </Grid>
    )
}

export default Articles