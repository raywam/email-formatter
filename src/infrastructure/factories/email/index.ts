import { Request, Response } from 'express';
import BaseFactory from '..';
import { Email } from '../../../@types/email';
import EmailCommand from '../../../domain/commands/email';

class EmailFormatterFactory extends BaseFactory {
  create(req: Request, res: Response) {
    const payload = req.body;

    const emailCommandResult: Email = new EmailCommand()
      .create(payload.type)
      .execute(payload);

    res.send(emailCommandResult);
  }
}

export default EmailFormatterFactory;