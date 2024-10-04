import { Container } from "./styles";

import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Marker } from "../../components/Marker";
import { Button } from "../../components/Button";

export function Create() {
  return (
    <Container>
      <Header />

      <main>
        <div className="titleWrapper">
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Novo Filme</h1>
        </div>

        <div className="createWrapper">
          <div className="inputWrapper">
            <Input placeholder="Título" />
            <Input type="number" placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />
        </div>

        <section>
          <h2>Marcadores</h2>
          <div className="markerWrapper">
            <Marker title="Ação" />
            <Marker isNew />
          </div>
        </section>

        <div className="buttonWrapper">
          <Button title="Excluir Filme" />
          <Button title="Salvar Alterações" isActive />
        </div>
      </main>
    </Container>
  );
}
