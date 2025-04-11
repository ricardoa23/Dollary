// import { account } from '@/lib/appwrite'
//
// describe('Live Appwrite Auth Test', () => {
//     const email = `test${Date.now()}@example.com`
//     const password = 'Test1234!'
//
//     it('should create a new user', async () => {
//         const user = await account.create('unique()', email, password, 'Test User')
//         expect(user).toHaveProperty('$id')
//         expect(user.email).toBe(email)
//     })
//
//     it('should create a session for the user', async () => {
//         const session = await account.create('unique()', email, password, 'Test Session')
//         expect(session).toHaveProperty('$id')
//     })
//
//     it('should return the current session', async () => {
//         const current = await account.get()
//         expect(current.email).toBe(email)
//     })
//
//     it('should delete the current session', async () => {
//         await account.deleteSession('current')
//         await expect(account.get()).rejects.toThrow()
//     })
// })