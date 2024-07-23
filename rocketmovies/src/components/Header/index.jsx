import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Vittor Fabriny</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/VittorFabriny.png" alt="Foto do Usuário" />

      </Profile>
    </Container>
  );
}
