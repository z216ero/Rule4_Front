import AddPost from './AddPost'
import Logo from './Logo'
import NavLink from './NavLink'

export default function NavBar() {
    return (
        <div className='flex justify-center items-center gap-2'>
            <Logo />
            <NavLink to="/post/1" text='Bests' />
            <AddPost />
            <NavLink to="/tags" text='Tags' />
        </div>
    )
}
