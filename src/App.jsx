// import ExpenseCard from './components/ExpenseCard'
// import Card from './components/Card'
import './App.css'
import Counter from './components/Counter'
import BigCounter from './components/BigCounter'
import ExpensesList from './components/ExpensesList'
import PostList from './components/PostList'
import Expenses from './components/Expenses'
import Login from './components/Login'
import { Route, Routes, Link } from 'react-router-dom'


function App() {

  return (
    <>
      <div className='navbar' >
          <Link to="/">Home </Link>
          <Link to='/login'>Login</Link>
          <Link to='/expenses'>Expenses</Link>

      </div>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/expenses' element={ <Expenses /> } />
        
        <Route path='*' element={ <p>Pagina no encontrada</p> } />
      </Routes>
    </>
  )
}

export default App
