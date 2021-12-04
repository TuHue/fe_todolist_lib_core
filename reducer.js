import storate from "./util/storate.js";

const init = {
    todos: storate.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    indexEdit: null
}

const actions = {
    ADD: function(state, title) {
        if (title) {
            state.todos.push({ title, completed: false })
            storate.set(state.todos)
        }
    },
    TOGGLE: function({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storate.set(todos)

    },
    TOGGLEALL: function({ todos }, status) {
        todos.map(item => item.completed = status);

    },
    DELETE: function({ todos }, index) {
        todos.splice(index, 1);
        storate.set(todos);
    },
    DELETEALL: function(state) {
        state.todos = state.todos.filter(state.filters.active)
        storate.set(state.todos);
    },
    EDIT: function(state, title) {
        if (title) {
            state.todos[state.indexEdit].title = title;
            state.indexEdit = null;
            storate.set(state.todos)
        }
    },
    FILTER: function(state, filter) {
        state.filter = filter;
    },
    STARTEDIT: function(state, index) {
        state.indexEdit = index;
    }
}

export default function reducer(state = init, action, agrs) {
    actions[action] && actions[action](state, ...agrs)
    return state;
}