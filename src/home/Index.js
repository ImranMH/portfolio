import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Users from '../components/Users'

export default function Index() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            // isloading =
            const usersData = await axios.get('https://jsonplaceholder.typicode.com/users')
            // console.log(usersData.data)
            setUsers(usersData.data)
            setIsLoading(false)
        }
        fetchUser()
    }, [])

    return (

        <div>
            <h2>Home</h2>
            {isLoading ? <h2>Loading</h2> : <Users users={users} isLoading={isLoading} />}

        </div>
    )
}
