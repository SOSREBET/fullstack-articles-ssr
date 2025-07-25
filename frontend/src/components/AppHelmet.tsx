import { type FC } from 'react'
import { Helmet } from 'react-helmet'
import { frontendDomain } from '../services/domains'

interface IAppHelmet {
    title: string
    description?: string
    url?: string
}

const AppHelmet: FC<IAppHelmet> = ({ 
    title, 
    description = "Articles", 
    url = "", 
}) => {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description } />
            <meta property="og:url" content={ frontendDomain + url } />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Articles" />
            <meta property="og:locale" content="en_US" />
        </Helmet>
    )
}

export default AppHelmet