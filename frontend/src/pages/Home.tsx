import { type FC } from "react"
import { Grid } from "@mui/material"
import AppHelmet from "../components/AppHelmet"
import HomeJumbotron from "../components/HomeJumbotron"

const Home: FC = () => {    
    return (
        <Grid 
            container
            spacing={2}
            maxWidth={'xl'}
            component='section'
            className="container"
        >
            <AppHelmet title="Home - Articles" />
            <HomeJumbotron />
        </Grid>
    )
}

export default Home