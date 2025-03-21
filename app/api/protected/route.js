import { cookies } from 'next/headers';

export async function GET() {
  const token = cookies().get('auth_token')?.value;

  if (!token) {
    return Response.json({ message: 'No token provided' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return Response.json({ message: 'Protected route', user: decoded }, { status: 200 });
  } catch (error) {
    return Response.json({ message: 'Invalid token' }, { status: 401 });
  }
}