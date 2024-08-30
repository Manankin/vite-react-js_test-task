import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserEdit from './pages/UserEdit'
import User from './pages/User'
import NotFoundPage from './pages/NotFoundPage'
import './App.scss'
import Header from './components/Header'
import { users } from './assets/data/person';
import addIndex from './assets/data/features';
import { UserContext } from './components/UsersContext'
import { useState } from 'react'


export default function App() {
  const [usersList, setUsersList] = useState(addIndex(users))

  return (
    <UserContext.Provider value={{usersList, setUsersList}}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<UserEdit />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </UserContext.Provider>
  )
}
