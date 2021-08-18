import { Request, Response } from 'express';

class BaseFactory {
  create(req: Request, res: Response): any {
    return {};
  }
}

export default BaseFactory;