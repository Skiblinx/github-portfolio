import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"



const SearchUsers = () => {

  const [text, setText] = useState("")
  const { users, fetchUserData, handleClear } = useContext(GithubContext)
  const { handleAlert } = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
      handleAlert('please enter something...', 'error')
    } else {
      fetchUserData(text)
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input className="w-full pr-40 bg-gray-200 input text-black " placeholder="Skiblinx" value={text} onChange={handleChange} />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn">Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost">Clear</button>
        </div>
      )}
    </div>
  )
}

export default SearchUsers