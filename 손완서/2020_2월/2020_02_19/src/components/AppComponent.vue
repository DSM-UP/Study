<template>
  <div class="todo-container">
    <h2>Todo List</h2>
    <form class="input-todo-form">
      <input type="text" class="input-todo" placeholder="enter to add" />
      <button type="submit" @click="addTodo">Add</button>
    </form>
    <ul>
      <li class="todo-item" v-for="(todo, index) in todos">
        <p class="text">{{ todo.text }}</p>
        <button
          v-if="todo.completed"
          @click="compeleteTodo(index)"
          class="complete completed"
        >
          Complete
        </button>
        <button v-else @click="compeleteTodo(index)" class="complete">
          Complete
        </button>
        <button @click="deleteTodo(index)" class="delete">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    addTodo(e) {
      e.preventDefault();
      const todo = {
        text: document.querySelector("input.input-todo").value,
        completed: false
      };
      this.todos.push(todo);
    },
    compeleteTodo(index) {
      console.log(this.todos[index].completed);
      this.todos[index].completed = !this.todos[index].completed;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  },
  data() {
    return {
      todos: [
        {
          text: "test-todo1",
          completed: false
        },
        {
          text: "test-todo2",
          completed: true
        },
        {
          text: "test-todo3",
          completed: false
        }
      ]
    };
  }
};
</script>

<style lang="less">
.input-todo-form {
  .input-todo {
    width: 200px;
  }
  button {
    width: 50px;
  }
}
ul {
  list-style: none;
  padding: 0;
}
.todo-item {
  margin: 15px 0;
  p {
    display: inline-block;
    width: 200px;
    font-weight: bold;
  }
  button {
    width: 100px;
    color: #ffffff;
  }
  button.complete {
    background-color: #b2b2b2;
  }
  button.complete.completed {
    background-color: #5ddf0f;
  }
  button.delete {
    background-color: #dc143c;
  }
}
</style>
