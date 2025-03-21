import { cookies } from 'next/headers';

export async function POST() {

  cookies().set('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: -1,
    path: '/',
  });

  return Response.json({ message: 'Logout successful' }, { status: 200 });
}