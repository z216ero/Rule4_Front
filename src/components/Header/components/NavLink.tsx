import { Link } from 'react-router-dom'

interface ILink {
    to: string,
    text: string
}

export default function NavLink({ to, text }: ILink) {
    return (
        <Link className='text-slate-100 text-xl' to={to}>{text}</Link>
    )
}
