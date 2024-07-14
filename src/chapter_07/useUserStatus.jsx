import { useState, useEffect } from "react"

function useUserStatus(useId) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(state) {
            setIsOnline(state.isOnline);
        }

        ServerAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
        };
    });

    return isOnline;
}

export default useUserStatus;