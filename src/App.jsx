import { useState } from "react";

import Perfil from './components/Perfil';
import Formulario from './components/Fomulario';
import RepoList from './components/RepoList';
import styles from './App.module.css';

function App() {
  const [FormularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Perfil do Usuário</h1>
      <Perfil nome="Ryan" avatar="https://github.com/Fryansb.png" />
      <RepoList />
      {/* {FormularioEstaVisivel && <Formulario />}

      <button onClick={() => setFormularioEstaVisivel(!FormularioEstaVisivel)} type="button">toggle form</button> */}
    </div>
  );
}

export default App

