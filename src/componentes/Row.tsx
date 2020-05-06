import * as React from 'react';

interface Props{
    endereco: Endereco;
    onEdit: (e: Endereco) => void;
    onRemove: (e: Endereco) => void
}

class Row extends React.Component<Props> {

    render() {
        const {endereco} = this.props;
        const estilo = {
            color: '#666'
          };
          
        return (
            <tr>
                <th scope="row">{endereco.ID}</th>
                <td>{endereco.CEP}</td>
                <td>{endereco.tipoLogradouro} {endereco.endereco}, {endereco.numero}, {endereco.bairro} <br /><small style={estilo}>{endereco.complemento}</small> </td>
                <td>{endereco.cidade}</td>
                <td>{endereco.UF}</td>
                <td>
                    <button type="button" className="btn btn-info mr-2"  onClick={() => this.props.onEdit(endereco)}>Editar</button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.onRemove(endereco)}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default Row;