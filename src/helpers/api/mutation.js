import { getAuthUser, setAuthUser } from ".."

const token = getAuthUser()

  export const  mutation = async (url,  payload) => {
   await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type ': 'application/json', 
             Accept: 'application/json',
             authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => {
        if (response.status === 201){
            setAuthUser(response.data.token);
            console.log(response.message)
        }
    })
}