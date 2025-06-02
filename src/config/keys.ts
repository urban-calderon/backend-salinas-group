import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { RSA_KEY_SIZE } from './env';

interface RSAKeys {
  publicKey: string;
  privateKey: string;
}

const KEYS_DIR = path.join(__dirname, '../../keys');
const PUBLIC_KEY_PATH = path.join(KEYS_DIR, 'public.pem');
const PRIVATE_KEY_PATH = path.join(KEYS_DIR, 'private.pem');

function generateKeys(): RSAKeys {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: RSA_KEY_SIZE,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem'
    }
  });

  // Create directory if it does not exist
  if (!fs.existsSync(KEYS_DIR)) {
    fs.mkdirSync(KEYS_DIR, { recursive: true });
  }

  // Saving the keys
  fs.writeFileSync(PUBLIC_KEY_PATH, publicKey);
  fs.writeFileSync(PRIVATE_KEY_PATH, privateKey);

  return { publicKey, privateKey };
}

function loadKeys(): RSAKeys {
  try {
    const publicKey = fs.readFileSync(PUBLIC_KEY_PATH, 'utf8');
    const privateKey = fs.readFileSync(PRIVATE_KEY_PATH, 'utf8');
    return { publicKey, privateKey };
  } catch (err) {
    console.log('Generating new RSA keys...');
    return generateKeys();
  }
}

export const { publicKey, privateKey } = loadKeys();