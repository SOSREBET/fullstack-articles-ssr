import { Backdrop, CircularProgress } from '@mui/material'
import { type FC } from 'react'

const BackdropLoader: FC = () => {
    return (
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default BackdropLoader