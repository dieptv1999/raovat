import {useCallback, useEffect, useMemo, useState} from "react";
import ApiFactory from "../src/apis/ApiFactory";
import {useAuthContext} from "../src/context/AuthContext";


export default function useLikePost({postId}) {
    const {user} = useAuthContext()
    const [liked, setLiked] = useState(false);

    const onLike = useCallback(async () => {
        if (!user?.userId) return
        const resp = await ApiFactory.getRequest("UserApi").addFollow({
            user_id: user.userId,
            sell_id: postId,
        })
        if (resp && resp.success) {
            setLiked(true)
        }
    }, [postId, user?.userId])

    const fetchFollow = useCallback(async () => {
        if (!user?.userId) return
        const resp = await ApiFactory.getRequest("UserApi").checkFollow({
            user_id: user.userId,
            sell_id: postId,
        })
        if (resp &&  resp.success) {
            setLiked(true)
        }
    }, [postId, user?.userId])

    useEffect(() => {
        fetchFollow()
    }, [fetchFollow]);

    return useMemo(() => ({
        liked,
        onLike,
    }), [liked, onLike])
}