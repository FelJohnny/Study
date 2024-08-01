'use server'
import { cookies } from "next/headers";

export async function pegaCookie() {
    const cookie = cookies().get('token')
    return cookie
}