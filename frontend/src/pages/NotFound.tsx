import { type FC } from "react"
import { Link } from "react-router"
import { Button, Grid } from "@mui/material"
import AppHelmet from "../components/AppHelmet"
import { routes } from "../components/Router"

interface INotFound {
  message?: string
}

const NotFound: FC<INotFound> = ({ message = "Page not found" }) => {
  return (
    <Grid
      container
      className="container"
      component={'section'}
      maxWidth='sm'
      spacing={2}
      direction={"column"}
      sx={{ height: '80vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <AppHelmet
        title="Page not found 404"
        description={message}
      />
      <h1 className="page__error-code">404</h1>
      <p>{message}</p>

      <Button variant="outlined" component={Link} to={routes.home.path} sx={{padding: '5px 50px'}}>
        To main
      </Button>
    </Grid>
  )
}

export default NotFound