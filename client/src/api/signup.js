// signup api
const useSignUpApi = async (data) => {
    const request = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await request.json()
}



export default useSignUpApi;