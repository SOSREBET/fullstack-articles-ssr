import { type FC } from "react"
import { Link } from "react-router-dom"
import { Stack, Button } from "@mui/material"

import AppHelmet from "../components/AppHelmet"
import { routes } from "../components/Router"

interface INotFound {
  message?: string
}

const NotFound: FC<INotFound> = ({ message = "Page not found" }) => {
  return (
    <Stack className="container" spacing={2} component={'section'} sx={{height: '100vh', justifyContent: 'center'}}>
      <AppHelmet
        title="Page not found 404"
        description={ message }
      />
      <h1 className="page__error-code">404</h1>
      <h3>{ message }</h3>

      <Button variant="outlined" component={Link} to={routes.home.path}>
        To main
      </Button>
    </Stack>
  )
}

export default NotFound