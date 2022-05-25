import { useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);

    const email = user?.email
    if(email){
        fetch(`https://whispering-plains-56325.herokuapp.com/user/checkAdmin/${email}`)
        .then(res=> res.json())
        .then(data=> {
            setAdmin(data.admin)
        })
    }


    return[admin]
}
export default useAdmin;