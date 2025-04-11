import { Client, Account, Databases, Functions } from 'appwrite'

const client = new Client()
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string)

const account = new Account(client)
const databases = new Databases(client)
const functions = new Functions(client)

export { client, account, databases, functions }