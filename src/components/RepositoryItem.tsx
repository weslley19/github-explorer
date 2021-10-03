interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  }
}

export function RepositoryItem(repository: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.repository.name}</strong>
      <p>{repository.repository.description}</p>
      <a href={repository.repository.html_url} target='_blank'>Acessar repositório</a>
    </li>
  );
}
