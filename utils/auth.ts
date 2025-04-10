import { account } from '@/lib/appwrite'

export const signUp = async (email: string, password: string, name: string) => {
    return await account.create('unique()', email, password, name)
}