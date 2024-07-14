import React, { useState } from "react";
import useUserStatus from "./useUserStatus";

const userList = [
    { id: 1, name: 'Gayoung' },
    { id: 2, name: 'Nayoung' },
    { id: 3, name: 'Dayoung' },
];

function ChatUserSelector(props) {
    const [userId, setUserId] = useState(1);
    const isUserOnline = useUserStatus(userId);

    return (
        <>
            <div color={isUserOnline ? 'green' : 'red'}></div>
            <select
                value={user.id}
                onChange={event => setUserId(Number(event.target.value))}
            >
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </>
    )
}

export default ChatUserSelector;