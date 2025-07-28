import type { FC } from "react"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom"
import { routes } from "./Router"

const HomeJumbotron: FC = () => {
  return (
    <Grid container spacing={1}>
        <h1>Articles</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eaque, obcaecati quis doloribus 
            repudiandae, veniam, dolores suscipit quod ut et vel quaerat illo deserunt ipsum voluptas neque 
            nobis fugit. Pariatur!
        </p>
        <Button variant="contained" sx={{marginTop: '10px'}} component={Link} to={routes.articles.path}>
            View all articles
        </Button>
    </Grid>
  )
}

export default HomeJumbotron