import { Request, Response } from 'express';
import { EncryptionService } from '../services/encryption.service';
import { 
  EncryptionRequest
} from '../interfaces/encryption.interface';

const encryptionService = new EncryptionService();

export class EncryptionController {
  public async encrypt(req: Request, res: Response): Promise<void> {
    try {
      const request: EncryptionRequest = req.body;
      const result = encryptionService.encrypt(request);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      });
    }
  }
}