import { IClientDTO } from '../dtos/IClientDTO';

interface ICreateClientRepository {
  createClient(clientData: IClientDTO): Promise<void>;
  findClientByEmail(email: string): Promise<IClientDTO>;
}

export { ICreateClientRepository };
