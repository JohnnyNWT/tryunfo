import React from 'react';
import '../index.css';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input data-testid="name-input" type="text" className="inputStyle" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <br />
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr01">
          Attr01
          <input data-testid="attr1-input" type="number" className="inputStyle" />
        </label>
        <label htmlFor="attr02">
          Attr02
          <input data-testid="attr2-input" type="number" className="inputStyle" />
        </label>
        <label htmlFor="attr03">
          Attr03
          <input data-testid="attr3-input" type="number" className="inputStyle" />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input data-testid="image-input" type="text" className="inputStyle" />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input" name="select" className="inputStyle">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input data-testid="trunfo-input" type="checkbox" />
          Super Trunfo
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
