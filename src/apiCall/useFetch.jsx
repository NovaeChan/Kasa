import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/Kasa/logements.json').then((res) => setData(res.data))
    }, [])

    return { data }
}

export default useFetch
