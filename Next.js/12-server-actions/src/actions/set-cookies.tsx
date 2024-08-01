'use server';

import { cookies } from 'next/headers';

export async function setCookie(key: string, value: string) {
  cookies().set(key, value, {
    httpOnly: true,
  });
  return { definido: true, key, value };
}