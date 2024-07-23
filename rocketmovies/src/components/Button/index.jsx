import { Container } from "./styles";

export function Button({ title, icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {icon && icon}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
