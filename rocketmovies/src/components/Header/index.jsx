import { Container, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <Input type="text" placeholder="Pesquisar pelo título" />

      <Link to="/Profile">
        <Profile>
          <div>
            <strong>Vittor Fabriny</strong>
            <span>sair</span>
          </div>
          <img
            src="https://github.com/VittorFabriny.png"
            alt="Foto do Usuário"
          />
        </Profile>
      </Link>
    </Container>
  );
}
