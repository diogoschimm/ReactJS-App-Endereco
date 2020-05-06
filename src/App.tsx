import * as React from 'react';
import './App.css';
import Form from './componentes/Form';
import Grid from './componentes/Grid';

interface State {
  dsEnderecos: Endereco[],
  identidade: number,
  enderecoEmEndicao?: Endereco
}

class App extends React.Component<{}, State> {

  state: State = {
    dsEnderecos: JSON.parse(localStorage.getItem('lista') || "[]"),
    identidade: Number(JSON.parse(localStorage.getItem('identidade') || "1"))
  }

  handlerSalvarEndereco = (e: Endereco) => {
    if (this.verificarPodeSalvar(e)) {
      e.ID = this.state.identidade++;

      let ds = this.state.dsEnderecos.concat(e);
      this.setState({ dsEnderecos: ds });

      localStorage.setItem("lista", JSON.stringify(ds));
      localStorage.setItem("identidade", JSON.stringify(this.state.identidade));
    }else{
      window.alert('Preencha as informações obrigatórias');
    }
  }

  handlerAtualizarEndereco = (e: Endereco) => {
    if (this.verificarPodeSalvar(e)) {

      let dsEnderecosBak = this.state.dsEnderecos;

      dsEnderecosBak = dsEnderecosBak.map(p => {
        if (p.ID != e.ID) return p;
        return e;
      })
      this.setState({ dsEnderecos: dsEnderecosBak });

      localStorage.setItem("lista", JSON.stringify(dsEnderecosBak));
    }else{
      window.alert('Preencha as informações obrigatórias');
    }
  }
  verificarPodeSalvar(e: Endereco) {
    if (!e.CEP) return false;
    if (!e.tipoLogradouro) return false;
    if (!e.endereco) return false;
    if (!e.numero) return false;
    if (!e.bairro) return false;
    if (!e.UF) return false;
    if (!e.cidade) return false;
    if (!e.complemento) return false;
    return true;
  }


  handlerDeletarRegistro = (endereco: Endereco) => {
    if (window.confirm('Remover endereço?')) {

      let o = this.state.dsEnderecos;

      o = o.filter(p => p.ID != endereco.ID);

      this.setState({ dsEnderecos: o });
      localStorage.setItem("lista", JSON.stringify(o));
    }
  }

  render() {

    const { dsEnderecos, enderecoEmEndicao } = this.state;

    return (
      <div className="container">
        <h3>CRUD - Endereços com ReactJS em (10/03/2018)</h3>
        <hr />
        <Form onSalvarCadastro={this.handlerSalvarEndereco}
          onAtualizarCadastro={this.handlerAtualizarEndereco}
          enderecoEditing={enderecoEmEndicao} />
        <br />
        <Grid dsEndereco={dsEnderecos} onEditarRegistro={p => this.setState({ enderecoEmEndicao: p })}
          onDeletarRegistro={this.handlerDeletarRegistro} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
