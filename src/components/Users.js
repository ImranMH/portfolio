import React from 'react'

export default function Users({ users, isloading }) {
    console.log(users)
    return (
        <div>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}

            </ul>
        </div>
    )
}
