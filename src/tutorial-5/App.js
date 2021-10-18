import React from 'react'
import Form from './components/Form'
import ListComments from './components/ListComments'

import './App.css'

const getComments = () => {
  let commentsInStr = localStorage.getItem('comments')
  return JSON.parse(commentsInStr)
}

export const AppContext = React.createContext()

function App() {
  const [comments, setComments] = React.useState(getComments() || [])

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const setComment = (newComment = null) => {
    const newComments = [...comments, newComment]
    setComments(newComments)
  }

  const deletedComment = (id) => {
    const newComments = comments.filter((el) => el.id !== id)
    setComments(newComments)
  }

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ setComment, deletedComment }}>
        <ListComments comments={comments} />
        <Form />
      </AppContext.Provider>
    </div>
  )
}

export default App
