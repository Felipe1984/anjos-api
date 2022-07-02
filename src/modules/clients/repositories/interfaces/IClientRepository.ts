import { IClientDTO } from '../dtos/IClientDTO';

interface IClientRepository {
  findClientByEmail(email: string): Promise<IClientDTO>;
  findClientById(id: string): Promise<IClientDTO>;
}

export { IClientRepository };
