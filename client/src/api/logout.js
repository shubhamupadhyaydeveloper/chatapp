// logout api
 const logoutApi =  async () => {
     try {
        const request = await fetch('/api/auth/logout', {
            method : 'POST',
        })
        return await request.json()
     } catch (error) {
        console.log('Error in logout',error.message)
     }
}

export default logoutApi;