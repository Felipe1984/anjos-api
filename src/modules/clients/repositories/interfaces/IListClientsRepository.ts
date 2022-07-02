import { IClientDTO } from '../dtos/IClientDTO';

interface IListClientsRepository {
  listAllClients(): Promise<IClientDTO[]>;
}

export { IListClientsRepository };
