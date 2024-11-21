import { url } from "@/redux/type"

export async function handleAddAuth (data){
  try {
    const response = await fetch(`${url}/users`,{
      method:"POST",
      body:JSON.stringify(data),
    })
    localStorage.setItem('user-data',data)
    console.log('added succeed')
    if (!response.ok) {
    throw new Error ('error in url fetching')
    }
  } catch (error) {
    console.log(error.message)
  }
}
export async function handleFetchUsers (){
  try {
    const response = await fetch(`${url}/users`)
    if (!response.ok) {
    throw new Error ('error in url fetching')
    }
    const data = response.json()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
  
}