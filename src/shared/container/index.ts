import { container } from 'tsyringe';

import { CreateClientRepository } from '../../modules/clients/repositories/implementations/CreateClientRepository';
import { FindOneClientByEmailRepository } from '../../modules/clients/repositories/implementations/FindOneClientByEmailRepository';
import { ListClientsRepository } from '../../modules/clients/repositories/implementations/ListClientsRepository';
import { ICreateClientRepository } from '../../modules/clients/repositories/interfaces/ICreateClientRepository';
import { IFindOneClientByEmailRepository } from '../../modules/clients/repositories/interfaces/IFindOneClientByEmailRepository.ts';
import { IListClientsRepository } from '../../modules/clients/repositories/interfaces/IListClientsRepository';

container.registerSingleton<ICreateClientRepository>(
  'CreateClientRepository',
  CreateClientRepository
);

container.registerSingleton<IListClientsRepository>(
  'ListClientsRepository',
  ListClientsRepository
);

container.registerSingleton<IFindOneClientByEmailRepository>(
  'FindOneClientByEmailRepository',
  FindOneClientByEmailRepository
);
