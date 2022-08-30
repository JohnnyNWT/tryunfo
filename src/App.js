import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
    hasTrunfo: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.handleButton();
    });
  };

  handleButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const noEmpty = cardName.length > 0
    && cardDescription.length > 0 && cardImage.length > 0;
    const maxPoints = 90;
    const totalMaxPoints = 210;
    const sumAttrs = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validateSum = sumAttrs <= totalMaxPoints
    && Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxPoints
    && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxPoints
    && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxPoints;
    const enableButton = validateSum === true && noEmpty === true;

    this.setState({
      isSaveButtonDisabled: !enableButton,
    });
  };

  handleSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardImage,
    } = this.state;
    this.setState(
      (estadoAnterior) => ({
        saveCards: [...estadoAnterior.saveCards, {
          name: cardName,
          description: cardDescription,
          attr1: cardAttr1,
          attr2: cardAttr2,
          attr3: cardAttr3,
          image: cardImage,
          trunfo: cardTrunfo,
          rare: cardRare,
        },
        ] }),
      () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          cardRare: 'normal',
          cardTrunfo: false,
          cardImage: '',
          isSaveButtonDisabled: true,
        });
      },
    );
    if (cardTrunfo) {
      this.setState({ hasTrunfo: cardTrunfo });
    }
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveButton }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          saveCards.map((card) => (
            <Card
              key={ card.name }
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
