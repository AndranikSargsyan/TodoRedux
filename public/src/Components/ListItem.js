import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { editTodo } from '../Actions/actions';
import { deleteTodo } from '../Actions/asyncActions';

class ListItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    editItem = () => {
        this.props.editTodo(this.props.todo._id);
    }

    deleteItem = () => {
        this.props.deleteTodo(this.props.todo._id);
    }

    render() {
        return (
            <div className="list-item">
                <span>{this.props.todo.text}</span>
                <button onClick={this.editItem}>Edit</button>
                <button onClick={this.deleteItem}>Delete</button>
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
        editTodo,
        deleteTodo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);
