import { type FC, Suspense, lazy } from "react"
import { Link } from "react-router-dom"
import { Button, Grid } from "@mui/material"
import { routes } from "../components/Router"
import AppHelmet from "../components/AppHelmet"
import HomeJumbotron from "../components/HomeJumbotron"
// import '../css/home.css'

// const LazyHomeLots = lazy(() => import("../components/HomeLots"))

const Home: FC = () => {    
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
            <AppHelmet title="Home - Articles" />
            <HomeJumbotron />

            {/* <Suspense>
                <LazyHomeLots />
            </Suspense> */}
            
        </Grid>
    )
}

export default Home