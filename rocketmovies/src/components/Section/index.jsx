import { Container } from "./styles";

import { Tags } from "../Tags";

export function Section({ title, children, desc, tags }) {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
      <p>{desc}</p>
      <div className="tagsWrapper">
        {tags.map((tag) => <Tags title={tag} key={tag}/> )}
      </div>
    </Container>
  );
}
