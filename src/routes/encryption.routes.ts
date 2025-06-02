import { Router } from 'express';
import { EncryptionController } from '../controllers/encryption.controller';

const router = Router();
const encryptionController = new EncryptionController();

router.post('/encrypt', encryptionController.encrypt.bind(encryptionController));

export default router;