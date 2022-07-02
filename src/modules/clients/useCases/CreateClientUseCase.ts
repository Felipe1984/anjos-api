import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { IClientDTO } from '../repositories/dtos/IClientDTO';
import { ICreateClientRepository } from '../repositories/interfaces/ICreateClientRepository';

@injectable()
class CreateClientUseCase {
  constructor(
    @inject('CreateClientRepository')
    private createClientRepository: ICreateClientRepository
  ) {}

  async excecute(clientData: IClientDTO): Promise<void> {
    const clientAlreadyExist =
      await this.createClientRepository.findClientByEmail(clientData.email);
    if (clientAlreadyExist) {
      throw new AppError('Client already exist', 403);
    }

    await this.createClientRepository.createClient(clientData);
  }
}

export { CreateClientUseCase };
