const app = new Vue({
    el: '#vue-app',
    data: {
        todos: []
    },
    methods: {
        newTodo() {
            this.todos.push({text: '', completed: false});
        },
        toggleCompleted(todo) {
            const index = this.todos.indexOf(todo);
            this.todos[index].completed = !this.todos[index].completed;
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    },
    watch: {
        todos: {
            deep: true,
            handler() {
                console.log('watch: ' + JSON.stringify(this.todos))
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        }
    },
    mounted() {
        console.log('load: ' + JSON.stringify(this.todos));
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }
});
