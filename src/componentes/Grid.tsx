import * as React from 'react';
import Row from './Row';

interface Props {
    dsEndereco: Endereco[],
    onEditarRegistro: (e: Endereco) => void,
    onDeletarRegistro: (e: Endereco) => void
}

class Grid extends React.Component<Props> {
    render() {

        const { dsEndereco } = this.props;

        return (
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">CEP</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">UF</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dsEndereco.map((e, i) => <Row endereco={e} key={i}
                        onRemove={this.props.onDeletarRegistro}
                        onEdit={this.props.onEditarRegistro} />)}
                </tbody>
            </table>
        );
    }
}
export default Grid;