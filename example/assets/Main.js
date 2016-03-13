import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const Main = React.createClass({

    propTypes: {
        onDecrement: PropTypes.func.isRequired,
        onIncrement: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
    },

    render() {
        const { onDecrement, onIncrement, value } = this.props;
        return (
            <div>
                <div>{ value }</div>
                <div>
                    <button onClick={ onDecrement }>Decrement</button>
                </div>
                <div>
                    <button onClick={ onIncrement }>Increment</button>
                </div>
            </div>
        );
    }

});

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({ type: 'INCREMENT', payload: { value: -1 } }),
        onIncrement: () => dispatch({ type: 'INCREMENT', payload: { value: 1 } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
