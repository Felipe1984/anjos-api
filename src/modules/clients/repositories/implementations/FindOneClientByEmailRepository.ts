import { IFindOneClientByEmailRepository } from '../interfaces/IFindOneClientByEmailRepository.ts';
import { ClientsRepository } from './ClientsRepository';

class FindOneClientByEmailRepository
  extends ClientsRepository
  implements IFindOneClientByEmailRepository {}

export { FindOneClientByEmailRepository };
