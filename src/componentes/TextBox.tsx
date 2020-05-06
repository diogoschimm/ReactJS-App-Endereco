import * as React from 'react';

interface Props {
    tituloCampo: string,
    nomeClasseCustomizada?: string
    valorCampo: string,
    onChange: (v: string) => void
}

class TextBox extends React.Component<Props> {

    handleInputChanged = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        this.props.onChange(evt.target.value);
    }

    render() {

        const { tituloCampo, nomeClasseCustomizada, valorCampo } = this.props;
        let classes = ["form-group", nomeClasseCustomizada].join(" ");

        return (
            <div className={classes}>
                <label>{tituloCampo}</label>
                <input type="text" className="form-control" 
                       value={valorCampo} onChange={this.handleInputChanged}  />
            </div>
        );
    }
}

export default TextBox;