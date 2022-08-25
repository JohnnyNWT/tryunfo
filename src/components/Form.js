import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            className="inputStyle"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <br />
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr01">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="inputStyle"
          />
        </label>
        <label htmlFor="attr02">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="inputStyle"
          />
        </label>
        <label htmlFor="attr03">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="inputStyle"
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            className="inputStyle"
          />
        </label>
        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            className="inputStyle"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="checkbox">
          <input
            data-testid="trunfo-input"
            value={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
          />
          Super Trunfo
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
