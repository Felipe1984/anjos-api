interface IClientDTO {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  identity: string;
  cpf: string;
  created_at?: Date;
}

export { IClientDTO };
