import { account } from '@/lib/appwrite'

export const testSession = async () => {
    try {
        const session = await account.get()
        console.log('Session:', session)

    } catch (err) {
        console.error('No active session:', err)
    }
}

export const signUp = async (email: string, password: string, name: string) => {
    return await account.create('unique()', email, password, name)
}

