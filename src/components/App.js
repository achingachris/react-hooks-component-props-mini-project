import React from 'react'
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'
import blogData from '../data/blog'

console.log(blogData)
console.log(blogData.posts)
console.log(typeof blogData.posts)

function App() {
  const posts = blogData.posts
  return (
    <div className='App'>
      <Header />
      <About src={blogData.image} />
      {/* <ArticleList posts={posts} /> */}
      {/* maps through posts */}
      {posts.map((post) => (
        // <>I am Me</>
        <ArticleList
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  )
}

export default App
