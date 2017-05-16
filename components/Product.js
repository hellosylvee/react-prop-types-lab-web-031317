import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div>
          <div>{this.props.name}</div>
          <div>{this.props.producer}</div>
          <div>{this.props.hasWatermark}</div>
          <div>{this.props.color}</div>
          <div>{this.props.weight}</div>
      </div>
    );
  }
}


Product.defaultProps = {
  hasWatermark: false,
  colors: ['white', 'eggshell-white', 'salmon']
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, weight, Product) {
    if (!props[weight]) {
      return new Error('Invalid prop `' + weight + '` supplied to' + ' `' + Product + '`. Validation failed.')
    }

    if (isNaN(props[weight])) {
      return new Error('Weight is not a valid number.')
    }

    if (props[weight] < 80 || props[weight] > 300) {
      return new Error('Weight must be between 80 and 300.')
    }
  }
};

// You can also specify a custom validator. It should return an Error
// object if the validation fails. Don't `console.warn` or throw, as this
// won't work inside `oneOfType`.

// customProp: function(props, propName, componentName) {
//   if (!/matchme/.test(props[propName])) {
//     return new Error(
//       'Invalid prop `' + propName + '` supplied to' +
//       ' `' + componentName + '`. Validation failed.'
//     );
//   }
// },



export default Product;

// export default () => {
//   return <div></div>
// }  // export a function that returns a JSX element
