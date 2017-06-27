import React, { Component } from 'react';
import ListItem from './ListItem';
import EditableItem from './EditableItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos } from '../Actions/asyncActions';

class List extends Component {
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo) => {
                    if(todo.editing) {
                        return <EditableItem
                                key={todo._id}
                                todo={todo}/>
                    } else {
                        return <ListItem
                                key={todo._id}
                                todo={todo} />
                    }
                })}
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
        getTodos
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
