// login api 
export const loginApi = async (data) => {
    try {
        const request = await fetch(`/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        })
        return await request.json()
    } catch (error) {
        console.log("Error in loginApi",error.message)
    }
}