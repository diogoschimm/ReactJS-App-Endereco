import * as React from 'react';

interface Props {
    tituloCampo: string,
    nomeClasseCustomizada?: string,
    qtdLinhas: number,
    valorCampo: string,
    onChange: (v: string) => void 
}

class TextBoxMultiLine extends React.Component<Props> {

    handleInputChanged = (evt: React.ChangeEvent<HTMLTextAreaElement>) =>{
        this.props.onChange(evt.target.value);
    }

    render(){

        const { tituloCampo, nomeClasseCustomizada, qtdLinhas, valorCampo } = this.props;
        let classes = ["form-group", nomeClasseCustomizada].join(" ");

        return (
            <div className={classes}>
                <label>{tituloCampo}</label>
                <textarea className="form-control" rows={qtdLinhas}
                          value={valorCampo} onChange={this.handleInputChanged} />
            </div>
        );
    }

}

export default TextBoxMultiLine;