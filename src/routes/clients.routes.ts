import { Router } from 'express';

import { CreateClientController } from '../modules/clients/controllers/CreateClientController';
import { FindOneClientController } from '../modules/clients/controllers/FindOneClientByEmailController';
import { ListClientsController } from '../modules/clients/controllers/ListClientsController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const findOneClientController = new FindOneClientController();

clientsRoutes.get('/', listClientsController.handle);
clientsRoutes.get('/data', findOneClientController.handle);

clientsRoutes.post('/', createClientController.handle);

export { clientsRoutes };
