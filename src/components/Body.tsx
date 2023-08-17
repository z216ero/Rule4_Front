import Main from './Pages/Main/Main'
import { Routes, Route } from 'react-router-dom'
import Post from './Pages/Post/Post'
import Layout from './Layout'
import Tags from './Pages/Tags/Tags'

export default function Body() {
  return (
    <div className='bg-neutral-900 h-full'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='*' element={<div>Not found</div>} />
        </Route>
      </Routes>
    </div>
  )
}
