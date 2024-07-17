import { Container, Form, Background } from "./styles";

import { FiUser, FiMail, FiLock, FiArrowLeft  } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input type="text" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Cadastrar" />

        <a href="#">
          {" "}
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>

      <Background />
    </Container>
  );
}
