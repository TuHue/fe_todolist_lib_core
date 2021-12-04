import html from "../core.js";
import { connect } from "../store.js";

function Footer(props) {
    return html `
    <footer class="footer">
    <span class="todo-count">${props.todos.filter(props.filters.active).length} item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
    ${Object.keys(props.filters).map(type=>html`
        <li>
            <a ${props.filter == type && `class="selected"`} onclick="dispatch('FILTER','${type}')">
            ${type.charAt(0).toUpperCase() + type.slice(1)}
            </a>
         </li>
        `)
    }
        
      
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" onclick="dispatch('DELETEALL',false)">Clear completed</button>
  </footer>
        `
}

export default connect()(Footer);