

export const  mutation = (url, token, payload) => {
    fetch (url, {
        method: 'POST',
        headers: {
            'Content-Type ': 'application/json', 
             Accept: 'application/json',
             authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => response.data())
}