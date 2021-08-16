import express from 'express';
import EmailFormatterFactory from '../factories/email';

const emailRouter = express.Router();

emailRouter.post('/email-formatter', new EmailFormatterFactory().create);

export default emailRouter;