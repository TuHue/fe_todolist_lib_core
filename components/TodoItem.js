import html from "../core.js";
import { connect } from "../store.js";


function TodoItem({ todo, index, indexEdit }) {
    console.log(indexEdit)
    return html `
    <li class="${todo.completed &&  `completed`} ${indexEdit == index && `editing`}">
    <div class="view">
        <input class="toggle"
         type="checkbox"
          ${todo.completed &&  `checked`}
          onchange="dispatch('TOGGLE',${index})"
          >
        <label  ondblclick="dispatch('STARTEDIT',${index})">${todo.title}</label>
        <button class="destroy" onClick="dispatch('DELETE','${todo.title}')"></button>
    </div>
    <input class="edit"  onkeyup="event.keyCode ===13 && dispatch('EDIT',this.value.trim())" value="${todo.title}">
    </li> `
}

export default connect()(TodoItem);