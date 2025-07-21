import { type FC } from 'react'
import { Helmet } from 'react-helmet'
import { frontendDomain } from '../services/domains'
// import banner from '../assets/banner.png'

interface IAppHelmet {
    title: string
    description?: string
    url?: string
    image?: string
}

const AppHelmet: FC<IAppHelmet> = ({ 
    title, 
    description = "Articles", 
    url = "", 
    image
}) => {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description } />
            <meta property="og:url" content={ frontendDomain + url } />
            {/* { image
                ?
                <meta property="og:image" content={ backendDomain + image } />
                :
                <meta property="og:image" content={ frontendDomain + banner } />
            } */}
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Articles" />
            <meta property="og:locale" content="en_US" />
        </Helmet>
    )
}

export default AppHelmet