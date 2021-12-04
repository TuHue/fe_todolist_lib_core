import html from "../core.js";
import { connect } from "../store.js";

import TodoItem from "./TodoItem.js";


function Main(props) {
    return html `
        <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" onclick="dispatch('TOGGLEALL',this.checked)" ${props.todos.every(props.filters.completed) &&'checked'}>
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					${props.todos
						.filter(props.filters[props.filter])
						.map((todo,index,indexEdit)=> TodoItem({todo,index,indexEdit}))}
				</ul>
			</section>
        `
}

export default connect()(Main);