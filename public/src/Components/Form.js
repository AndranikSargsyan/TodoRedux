import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/asyncActions';

class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    addTodo = () => {
        if(this.state.value != '') {
            this.props.addTodo(this.state.value);
            this.setState({ value: '' });
        } else {
            alert('Todo cannot be empty');
        }           
    }

    render() {
        return (
            <div id="todo-form">
                <input  type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Enter todo" />
                <button onClick={this.addTodo}>Add</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
