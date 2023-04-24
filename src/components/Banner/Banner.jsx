import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Banner = ({ image, content }) => {
    const [about, setAbout] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/About') {
            setAbout(true)
        }
    }, [location])

    return (
        <div className={about ? 'banner_about' : 'banner'}>
            {!about && <p className="banner_content">{content}</p>}
        </div>
    )
}

export default Banner
