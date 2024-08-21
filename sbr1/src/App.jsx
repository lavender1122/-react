import './App.css'
import Profile from './components/profile'
import Counter from './components/Counter'

function App() {

  return(
    <>
      <Profile name = "재욱" skill ="메롱"/>
      <Profile name = "나현" skill ="나현씨"/>
      <Profile name = "래현" skill ="꽈악"/>
      <Counter/>
    </>
  )
}

export default App
