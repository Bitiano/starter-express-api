import { createHash } from 'crypto';

export const hashToken = (token:string) => {
  return createHash('sha512').update(token).digest('hex');
};
