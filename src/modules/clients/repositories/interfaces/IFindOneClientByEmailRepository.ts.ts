import { IClientDTO } from '../dtos/IClientDTO';

interface IFindOneClientByEmailRepository {
  findClientByEmail(email: string): Promise<IClientDTO>;
}

export { IFindOneClientByEmailRepository };
