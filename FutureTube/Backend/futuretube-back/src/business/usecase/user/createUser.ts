import { UserGateway } from "../../gateways/userGateway";
import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { v4 } from "uuid";
import { User } from "../../entities/user";
import { CryptographyGateway } from "../../gateways/cryptographyGateway";

export class CreateUserUC {
  constructor(
    private db: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway
  ) {}

  public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
    // gerar um id,
    const id = v4();

    // criptopgrar a senha
    const pass = await this.cryptographyGateway.encrypt(input.password)
    // salvar o usuário no banco
    const user = new User(
      id,
      input.name,
      input.email,
      pass,
      input.birthDate,
      input.picture
    );
    await this.db.createUser(user);

    //gerar token
    const token = this.authenticationGateway.generateToken({
      userId: user.getId()
    });

    return {
      token
    };
  }
}

interface CreateUserUCInput {
  name: string;
  email: string;
  password: string;
  birthDate: string;
  picture: string;
}

interface CreateUserUCOutput {
  token: string;
}
