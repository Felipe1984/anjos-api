import { IClientDTO } from '../dtos/IClientDTO';
import { IClientRepository } from '../interfaces/IClientRepository';
import { prisma } from '../prisma';

abstract class ClientsRepository implements IClientRepository {
  async findClientById(id: string): Promise<IClientDTO> {
    const client = await prisma.clients.findFirst({
      where: {
        id,
      },
    });

    return client;
  }

  async findClientByEmail(email: string): Promise<IClientDTO> {
    const client = await prisma.clients.findFirst({
      where: {
        email,
      },
    });

    return client;
  }
}

export { ClientsRepository };
