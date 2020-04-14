import { UserGateway } from "../../gateways/userGateway";
import { AuthenticationGateway } from "../../gateways/authenticationGateway";
import { CryptographyGateway } from "../../gateways/cryptographyGateway";

export class LoginUserUC {
  constructor(
    private db: UserGateway,
    private authenticationGateway: AuthenticationGateway,
    private cryptographyGateway: CryptographyGateway
  ) {}

  public async execute(input: LoginUserUCInput): Promise<LoginUserUCOutput> {
    // email, e a senha
    // pegar as infos do usuário a partir do email dele => FUNCAO NO BANCO
    const user = await this.db.getUserByEmail(input.email);

    if (!user) {
      throw new Error("User not found");
    }

    // compara a senha salva com a senha enviada

    if (!await this.cryptographyGateway.compare(input.password, user.getPassword())) {
      throw new Error("Wrong email or password");
    }

    // Se estiver compatível, geramos o token e o usuário está logado
    const token = this.authenticationGateway.generateToken({
      userId: user.getId()
    });

    return {
      message: "User logged in succesfully",
      token
    };
  }
}

interface LoginUserUCInput {
  email: string;
  password: string;
}

interface LoginUserUCOutput {
  token: string;
  message: string;
}
