import React from 'react';

class NoSelectForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Valor:
            <input
              id="value-input"
              type="text"
              name="value"
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              id="description-input"
              type="text"
              name="description"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default NoSelectForm;
