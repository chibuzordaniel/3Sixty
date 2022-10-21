
export const getAuthUser = () => {
   const user = localStorage.getItem('3xity');
   return JSON.parse(user)
}

export const setAuthUser = (user) => {
     localStorage.setItem('3xity', JSON.stringify(user))
}