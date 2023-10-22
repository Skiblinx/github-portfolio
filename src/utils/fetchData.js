import axios from "axios"

const token = import.meta.env.VITE_APP_GITHUB_TOKEN || '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'

// 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




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