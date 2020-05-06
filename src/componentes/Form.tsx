import * as React from 'react';
import TextBox from './TextBox';
import DropDownList from './DropDownList';
import TextBoxMultiLine from './TextBoxMultiLine';

interface State {
    ID: number,
    CEP: string,
    tipoLogradouro: string,
    endereco: string,
    numero: string,
    bairro: string,
    cidade: string,
    UF: string,
    complemento: string,
    observacao: string
}
interface Props {
    onSalvarCadastro: (endereco: Endereco) => void,
    onAtualizarCadastro: (endereco: Endereco) => void,
    enderecoEditing?: Endereco
}

class Form extends React.Component<Props, State> {

    state = {
        ID: 0,
        CEP: "",
        tipoLogradouro: "",
        endereco: "",
        numero: "",
        bairro: "",
        cidade: "",
        UF: "",
        complemento: "",
        observacao: ""
    }

    handlerLimparCadastro = () => {
        if (window.confirm('Limpar cadastro')) {
            this.limparCampos();
        }
    }

    limparCampos = () => {
        this.setState({
            ID: 0,
            CEP: "",
            tipoLogradouro: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "",
            UF: "",
            complemento: "",
            observacao: ""
        });
    }

    handlerSalvarCadastr = () => {

        const { ID, CEP, tipoLogradouro, endereco, numero, bairro, cidade, UF, complemento, observacao } = this.state;

        const end = { ID, CEP, tipoLogradouro, endereco, numero, bairro, cidade, UF, complemento, observacao }

        if (end.ID) {
            this.props.onAtualizarCadastro(end);
        } else {
            this.props.onSalvarCadastro(this.state);
        }
        this.limparCampos();
    }

    componentWillUpdate(nextProps: Props, nextState: State) {
        if (this.props.enderecoEditing != nextProps.enderecoEditing) {
            if (nextProps.enderecoEditing) {
                this.setState(nextProps.enderecoEditing!!);
            } else {
                this.limparCampos();
            }
        }
    }

    render() {
        let dsTiposLogradouros = ["Avenida", "Alameda", "Praça", "Rua"];
        let dsUFs = ["MT", "MS", "SP"];

        return (
            <form>
                <div className="form-row">
                    <TextBox tituloCampo="CEP" nomeClasseCustomizada="col-md-2"
                        valorCampo={this.state.CEP} onChange={(v) => this.setState({ CEP: v })} />
                 
                    <DropDownList tituloCampo="Tipo de Logradouro" nomeClasseCustomizada="col-md-2"
                        valorSelecionado={this.state.tipoLogradouro} dsDados={dsTiposLogradouros}
                        onChange={(v) => this.setState({ tipoLogradouro: v })} />
                    <TextBox tituloCampo="Endereço" nomeClasseCustomizada="col-md-6"
                        valorCampo={this.state.endereco} onChange={(v) => this.setState({ endereco: v })} />
                    <TextBox tituloCampo="Número" nomeClasseCustomizada="col-md-2"
                        valorCampo={this.state.numero} onChange={(v) => this.setState({ numero: v })} />
                </div>
                <div className="form-row">
                    <TextBox tituloCampo="Bairro" nomeClasseCustomizada="col-md-5"
                        valorCampo={this.state.bairro} onChange={(v) => this.setState({ bairro: v })} />
                    <DropDownList tituloCampo="UF" nomeClasseCustomizada="col-md-1"
                        valorSelecionado={this.state.UF} dsDados={dsUFs}
                        onChange={(v) => this.setState({ UF: v })} />
                    <TextBox tituloCampo="Cidade" nomeClasseCustomizada="col-md-6"
                        valorCampo={this.state.cidade} onChange={(v) => this.setState({ cidade: v })} />
                </div>
                <div className="form-row">
                    <TextBox tituloCampo="Complemento" nomeClasseCustomizada="col-md-12"
                        valorCampo={this.state.complemento} onChange={(v) => this.setState({ complemento: v })} />
                </div>
                <div className="form-row">
                    <TextBoxMultiLine tituloCampo="Observação do Endereço" nomeClasseCustomizada="col-md-12" qtdLinhas={2}
                        valorCampo={this.state.observacao} onChange={(v) => this.setState({ observacao: v })} />
                </div>
                <button type="button" accessKey="x" className="btn btn-secondary mr-2" onClick={this.handlerLimparCadastro}>Limpar Cadastro (ALT + X)</button>
                <button type="button" accessKey="s" className="btn btn-primary" onClick={this.handlerSalvarCadastr}>Salvar Cadastro (ALT + S)</button>
            </form>
        );
    }

}

export default Form;