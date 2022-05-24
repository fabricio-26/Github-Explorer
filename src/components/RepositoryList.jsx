import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

//https://api.github.com/orgs/rocketseat/repos

//https://api.github.com/users/fabricio-26/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/fabricio-26/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])


  return (
    <section className='repository-list'>
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => {
           return <RepositoryItem key={repository.name} repository={repository}/>
        })}
        
      </ul>
    </section>
  )
}

