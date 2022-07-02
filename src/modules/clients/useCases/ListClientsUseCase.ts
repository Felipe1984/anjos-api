import { inject, injectable } from 'tsyringe';

import { IClientDTO } from '../repositories/dtos/IClientDTO';
import { IListClientsRepository } from '../repositories/interfaces/IListClientsRepository';

@injectable()
class ListClientsUseCase {
  constructor(
    @inject('ListClientsRepository')
    private listClientsRepository: IListClientsRepository
  ) {}

  async execute(): Promise<IClientDTO[]> {
    const clients = await this.listClientsRepository.listAllClients();

    return clients;
  }
}

export { ListClientsUseCase };
