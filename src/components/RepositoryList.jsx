import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

import '../styles/global.scss';

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

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
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}

