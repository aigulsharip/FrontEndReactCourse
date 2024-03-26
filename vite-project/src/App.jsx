import Header from "./header/Header"
import './App.css'
import MainComponent from "./main-body/MainComponent"

function App() {
  const titles = {
    header: "HeaderName"
  }
  return (
    <>
      <Header titleName = "Header"/>
      <Header titleName = {titles.header}/>
      

      <MainComponent/>

    </>
  )
}

export default App
