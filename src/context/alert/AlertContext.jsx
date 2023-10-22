import { createContext, useState } from "react";
import PropTypes from 'prop-types'


const AlertContext = createContext()


export const AlertProvider = ({ children }) => {

  const [alert, setAlert] = useState(null)

  const handleAlert = (msg, type) => {
    setAlert({
      msg, type
    })

    setTimeout(() => { setAlert(null) }, 3000)
  }

  return (
    <AlertContext.Provider value={{
      alert,
      handleAlert,
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext


AlertProvider.propTypes = {
  children: PropTypes.node,
}