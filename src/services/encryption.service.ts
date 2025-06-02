import crypto from 'crypto';
import { publicKey } from '../config/keys';
import { 
  EncryptionRequest, 
  EncryptionResponse
} from '../interfaces/encryption.interface';

export class EncryptionService {
  public encrypt(data: EncryptionRequest): EncryptionResponse {
    try {
      const encryptedBuffer = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PADDING
      }, Buffer.from(data.text, 'utf8'));

      return {
        encryptedText: encryptedBuffer.toString('base64')
      };
    } catch (error) {
      throw new Error(`Encryption failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}