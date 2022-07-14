import {useState} from 'react';

function App() {
  const [title, setTitle] = useState('Conteúdo 1');
  const [showContent, setShowContent] = useState(false);

  function handleTitle() {
    setTitle('Conteúdo 2');
  }

  function handleContent() {
    setShowContent(!showContent);
  }

  return (
    <div>
      <h1>{title}</h1>
      {showContent && <ExclusiveContent />}
      <button onClick={handleTitle}>Alterar o título</button>
      &nbsp;
      <button onClick={handleContent}>Clique aqui para exibir o conteúdo oculto</button>
    </div>
  );
}

function ExclusiveContent() {
	return <h2>Conteúdo oculto</h2>
}

export default App;