import { getToken } from 'next-auth/jwt'
const secret = process.env.SECRET

const test =  (req, res) => {
    const token = getToken({req, secret});
    return (
        <div>
            <a>{token.sub}</a>
        </div>
    )
}

export default test