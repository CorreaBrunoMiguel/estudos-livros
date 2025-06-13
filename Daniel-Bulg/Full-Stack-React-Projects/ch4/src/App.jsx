import { PostList } from './components/PostLists.jsx'
import { CreatePost } from './components/CreatePost.jsx'
import { PostFilter } from './components/PostFilter.jsx'
import { PostSorting } from './components/PostSorting.jsx'

const posts = [
  {
    title: 'FullStack React Projects',
    contents: "Let's become full-stack developers!",
    author: 'DevCorrea',
  },
  {
    title: 'Hello React!',
  },
]

export function App() {
  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter By:
      <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
}
