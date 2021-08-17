import BaseCommand from "..";

import { Request } from 'express';

class EmailCommand extends BaseCommand {
  execute(req: Request) {
    return {
      message: 'EmailCommand Message',
    }
  }
}

export default EmailCommand;