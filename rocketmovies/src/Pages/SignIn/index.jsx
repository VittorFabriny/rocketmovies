import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    return(
     <Container>
        <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />

        <Button title="Entrar" />

        <a href="#">Criar Conta</a>
        </Form>
     </Container>
    )
}
