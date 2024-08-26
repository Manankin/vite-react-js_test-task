import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserEdit from './pages/UserEdit'
import User from './pages/User'
import NotFoundPage from './pages/NotFoundPage'
import './App.scss'
import Header from './components/Header'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<UserEdit />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
