import axios from "axios"

const token = import.meta.env.VITE_APP_GITHUB_TOKEN || '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'






export const fetchOptions = {
  headers: {
    Authorization: `token ${token}`,
  }
}


export const fetchUser = async (url, options) => {
  try {
    const response = await axios(url, options)
    const data = await response.data

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }

}