import type { FC } from "react"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material"



const HomeJumbotron: FC = () => {
  return (
    <Grid container spacing={1}>
        <h1>Articles</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente eaque, obcaecati quis doloribus 
            repudiandae, veniam, dolores suscipit quod ut et vel quaerat illo deserunt ipsum voluptas neque 
            nobis fugit. Pariatur!
        </p>
        <Button variant="contained" sx={{marginTop: '10px'}}>
            View all articles
        </Button>
        {/* <Link to={ routes.lots.path } className="btn-vfx home__btn">
            View all articles 
        </Link> */}
    </Grid>
  )
}

export default HomeJumbotron