import Main from './Main'
import { Routes, Route } from 'react-router-dom'
import Post from './Post'
import Layout from './Layout'

export default function Body() {
  return (
    <div className='bg-cyan-200 h-full'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={<div>Not found</div>} />
        </Route>
      </Routes>
    </div>
  )
}
