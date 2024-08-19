import { Container } from "./styles";

export function Button({ title, isActive, icon, loading = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} disabled={loading} {...rest}>
      {icon && icon}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
