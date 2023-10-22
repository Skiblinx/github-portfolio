import axios from "axios"

const token = import.meta.env.VITE_APP_GITHUB_TOKEN

console.log(token)

export const fetchOptions = {
  headers: {
    Authorization: `token ${token}`,
  }
}


export const fetchUser = async (url) => {
  try {
    const response = await axios(url)
    const data = await response.data

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }

}