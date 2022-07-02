import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IClientDTO } from '../repositories/dtos/IClientDTO';
import { CreateClientUseCase } from '../useCases/CreateClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const clientData = request.body as IClientDTO;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    await createClientUseCase.excecute(clientData);

    return response.status(201).send();
  }
}

export { CreateClientController };
