import { Request, Response } from 'express';
import EmailCommand from '../../../domain/commands/email';

class EmailFormatterFactory {
  create(req: Request, res: Response) {
    const emailCommandResult = new EmailCommand().execute(req);

    res.send(emailCommandResult);
  }
}

export default EmailFormatterFactory;