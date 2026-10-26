// import ExpenseCard from './components/ExpenseCard'
// import Card from './components/Card'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      {/* <Card>
        <ExpenseCard type="Comida con los panas" value={200}></ExpenseCard>
        <ExpenseCard type="Mercado semanal" value={150} category="mercado"></ExpenseCard>
        <ExpenseCard type="Polas con los panas" value={48} category="salida"></ExpenseCard>
      </Card>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum omnis nesciunt mollitia veritatis sed quae blanditiis commodi? Sunt dicta, atque ipsa ex quae, eaque mollitia odio magni maiores vitae obcaecati?</p> */}
      <div style={{backgroundColor: 'white', height: 2, widt: 100, borderRadius: 50, marginTop: 25 }} />
      <Counter></Counter>
    </>
  )
}

export default App
