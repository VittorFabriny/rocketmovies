import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

export function Marker({ title, isNew }) {
  return (
    <Container isNew={isNew}>
      {isNew ? "Novo Marcador" : title}
      {isNew ? <FiPlus /> : <FiX />}
    </Container>
  );
}
