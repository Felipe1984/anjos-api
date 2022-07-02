import { IClientDTO } from '../dtos/IClientDTO';
import { ICreateClientRepository } from '../interfaces/ICreateClientRepository';
import { prisma } from '../prisma';
import { ClientsRepository } from './ClientsRepository';

class CreateClientRepository
  extends ClientsRepository
  implements ICreateClientRepository
{
  async createClient({
    name,
    email,
    lastName,
    identity,
    cpf,
  }: IClientDTO): Promise<void> {
    await prisma.clients.create({
      data: {
        name,
        cpf,
        email,
        identity,
        lastName,
      },
    });
  }
}

export { CreateClientRepository };
