import React from 'react'
import Article from './Article'

const ArticleList = (title, date, preview) => {
  return (
    <main>
      <Article title={title} date={date} preview={preview} />
    </main>
  )
}

export default ArticleList
