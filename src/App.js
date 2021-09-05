// 1.3 - importar o MasterRouter no App
import React from 'react';
import MasterRouter from './router/MasterRouter';
// 1.4 - Adicionar o component MasterRouter no App
class App extends React.Component {
  render() {
    return (
      <MasterRouter />
    );
  }
}
export default App;
