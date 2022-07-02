import { IClientDTO } from '../dtos/IClientDTO';
import { IListClientsRepository } from '../interfaces/IListClientsRepository';
import { prisma } from '../prisma';

class ListClientsRepository implements IListClientsRepository {
  async listAllClients(): Promise<IClientDTO[]> {
    const clients = (await prisma.clients.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        email: true,
        cpf: true,
        identity: true,
        created_at: true,
      },
    })) as IClientDTO[];

    return clients;
  }
}

export { ListClientsRepository };
