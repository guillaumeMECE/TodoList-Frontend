<template>
  <div class="w-25 mx-auto">
    <h2>Create a TODO List</h2>
    <b-form>
      <span
        v-show="typing"
        class="help-block small text-center"
      >Hit enter to save</span>
      <b-form-input
        id="newTodo"
        v-model="form.todo"
        required
        placeholder="Enter something todo"
        @input="typing = true"
        @keydown.enter="addTodo($event)"
      />
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                todo: ''
            },
            todos: '',
            typing: false
        };
    },
    methods: {
        async addTodo(event) {
            if (event) {
                event.preventDefault();
            }
            this.typing = false;
            const param = {
                task: this.form.todo 
            };
            console.log('param add', param);
			
            this.$store.dispatch('todo/ADD_TODO_LIST', param);
            this.clearTodo();
            // this.refreshTodo();
        },
        clearTodo() {
            this.form.todo = '';
        },
        refreshTodo() {
            // this.$store.dispatch('todo/FETCH_TODO_LIST');
        },
    }
};
</script>
