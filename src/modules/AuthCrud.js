const register = async (name, email, password, repeatPassword) => {
    let errorMessage = null

    if(password != repeatPassword){
        errorMessage = "Passwords dosen't match 3:"
        return errorMessage

    }else{
        await fetch(
            "http://localhost:4000/api/auth/register/",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name: name,
                email: email,
                password: password
                })
            }
        )
        .then(res => {
            return res.json()
        })
        .then(data => {
            if(data.ok){
                /* Wohooo! it worked :3 */
    
                /* Login in user */
                localStorage.setItem("email", email)
                localStorage.setItem("isLoggedIn", true)
                localStorage.setItem("token", data)
                
                return "success"
            }else{
                console.log(data.error)
                return data.error
            }
        })
        .catch(error => {
            errorMessage = error
            return errorMessage
        })
    }
}

export { register }