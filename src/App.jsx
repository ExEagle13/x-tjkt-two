import { Link } from "react-router-dom"

function App() {


  return (
    <>
      <h1 class="text-4x1 text-red-600 font-bold">Hello World</h1>
      <p class></p>
      <Link to={"/siswa"}>
        <button class="bg-blue-300 rounded-lg m-4 hover:bg-green-300">Siswa</button>
      </Link>
    </>
  )
}

export default App
