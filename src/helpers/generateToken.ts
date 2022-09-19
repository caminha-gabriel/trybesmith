import jwt from 'jsonwebtoken';
import TokenObj from '../interfaces/token.interface';
import User from '../interfaces/user.interface';

export default function generateToken(user: User): TokenObj {
  const secret = process.env.JWT_SECRET || 'defaultsecret';

  const token = jwt.sign(user, secret, { algorithm: 'HS256', expiresIn: '7d' });

  return { token };
}