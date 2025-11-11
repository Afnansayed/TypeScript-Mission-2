const isAuthenticate = false; // only work with null | undefined

const authenticateWithNullish = isAuthenticate ?? 'You are gest';
const authenticateWithOutNullish = isAuthenticate
  ? isAuthenticate
  : 'You are gest !';

console.log({ authenticateWithNullish }, { authenticateWithOutNullish });
