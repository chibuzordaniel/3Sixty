import { getAuthUser, setAuthUser } from ".."



const  mutation = async (url, payload, responses) => {
    const token = getAuthUser()
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        authorization: `Bearer ${token}`,
    });

    const request = new Request(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
    })

    await fetch(request)
        .then((responses) => responses.json())
        .then(responses)
        .catch(err => console.log(err.message))
}

export default mutation ;