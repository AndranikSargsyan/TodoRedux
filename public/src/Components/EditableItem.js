import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cancelTodo } from '../Actions/actions';
import { saveTodo } from '../Actions/asyncActions';

class EditableItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {text: props.todo.text};
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    saveItem = () => {    
        if(this.state.text != '') {
            this.props.saveTodo(this.props.todo._id, this.state.text);    
        } else {
            alert('Todo cannot be empty');
        }
    }

    cancelItem = () => {
        this.props.cancelTodo(this.props.todo._id);
    }

    render() {
        return (
            <div className="list-item">
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <button onClick={this.saveItem}>Save</button>
                <button onClick={this.cancelItem}>Cancel</button>
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
        saveTodo,
        cancelTodo
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableItem);
