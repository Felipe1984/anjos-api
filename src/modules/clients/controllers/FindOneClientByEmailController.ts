import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOneClientUseCase } from '../useCases/FindOneClientUseCase';

class FindOneClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const findOneClientUseCase = container.resolve(FindOneClientUseCase);

    const client = await findOneClientUseCase.execute(email);

    return response.status(200).json(client);
  }
}

export { FindOneClientController };
