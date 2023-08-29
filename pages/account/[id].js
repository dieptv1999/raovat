import Account from "../../src/components/Account";
import {getInstanceAxios} from "../../src/apis/Client";
import isEmpty from "lodash/isEmpty";

export default function ProfilePage({user}) {
    return <Account user={user}/>
}

export const getServerSideProps = async ({params}) => {
    if (!params.id) return {
        notFound: true,
    }
    const client = getInstanceAxios(process.env.NEXT_PUBLIC_BASE_URL);
    const res = await client.post('getUserSell', {
        user_id: params.id,
    })
    const user = res.data?.user;

    if (!user || isEmpty(user)) {
        return {
            notFound: true,
        }
    }

    return { props: { user } }
}