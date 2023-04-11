const register = (resolve, reject, name, email, password, repeatPassword) => { 
    if(password != repeatPassword){
        reject("Passwords doesn't match 3:")
    }else{
        //? Database call
        fetch(
            "http://localhost:4000/api/auth/register/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        )
        //? Convert response to json
        .then(res => {
            return res.json()
        })
        //? Handle response
        .then(data => {
            if(data.error == null){
                /* Wohooo! it worked :3 */
    
                /* Login in user */
                localStorage.setItem("email", email)
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("token", data.data)

                resolve("success") 
            }else{
                /* Ohh no we have error... */
                if(data.error){
                    console.log(data.error)
                    reject(data.error)
                }else{
                    reject("Eeehh something is veeeery wrong")
                }
            }
        })
        .catch(error => {
            reject(error)
        })
    }
}

export { register }