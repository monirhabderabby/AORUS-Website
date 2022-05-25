import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    const currentUser = {
        name: user?.user?.displayName,
        email: user?.user?.email
    }

    useEffect(() => {
        if(user){
            fetch('https://whispering-plains-56325.herokuapp.com/user', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
        .then(res=> res.json())
        .then(data=> {
            const accessToken = data?.token;
            localStorage.setItem("accessToken", accessToken)
            setToken(accessToken)
        })
        }
    }, [user])
    return [token]
}
export default useToken;