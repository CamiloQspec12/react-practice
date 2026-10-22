import ExpenseCard from './components/ExpenseCard'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <Card>
        <ExpenseCard type="Comida con los panas" value={200}></ExpenseCard>
        <ExpenseCard type="Mercado semanal" value={150} category="mercado"></ExpenseCard>
        <ExpenseCard type="Polas con los panas" value={48} category="salida"></ExpenseCard>
      </Card>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum omnis nesciunt mollitia veritatis sed quae blanditiis commodi? Sunt dicta, atque ipsa ex quae, eaque mollitia odio magni maiores vitae obcaecati?</p>
    </>
  )
}

export default App
