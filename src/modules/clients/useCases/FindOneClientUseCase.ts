import { inject, injectable } from 'tsyringe';

import { IClientDTO } from '../repositories/dtos/IClientDTO';
import { IFindOneClientByEmailRepository } from '../repositories/interfaces/IFindOneClientByEmailRepository.ts';

@injectable()
class FindOneClientUseCase {
  constructor(
    @inject('FindOneClientByEmailRepository')
    private findOneClientByEmailRepository: IFindOneClientByEmailRepository
  ) {}

  async execute(email: string): Promise<IClientDTO> {
    const client = await this.findOneClientByEmailRepository.findClientByEmail(
      email
    );

    return client;
  }
}

export { FindOneClientUseCase };
