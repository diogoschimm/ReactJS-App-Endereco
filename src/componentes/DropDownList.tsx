import * as React from 'react';

interface Props {
    tituloCampo: string,
    nomeClasseCustomizada?: string,
    valorSelecionado: string,
    dsDados: string[],
    onChange: (valor:  string) => void 
}


class DropDownList extends React.Component<Props> {

    handleChanged = (evt: React.ChangeEvent<HTMLSelectElement>) =>{
        this.props.onChange(evt.target.value);
    }

    render() {

        const { nomeClasseCustomizada, tituloCampo, valorSelecionado, dsDados } = this.props;
        let classes = ["form-group", nomeClasseCustomizada].join(" ");

        return (
            <div className={classes}>
                <label>{tituloCampo}</label>
                <select className="custom-select mr-sm-2" onChange={this.handleChanged}>
                    <option value="">...</option>
                    {dsDados.map((v, i) => (valorSelecionado == v)? <option selected key={i}>{v}</option> : <option key={i}>{v}</option>)}
                </select>
            </div>
        );
    }
}

export default DropDownList;