<template>
  <div class="mx-auto">
    <h2>TODOS</h2>
    <v-container class="w-75 mx-auto">
      <v-row no-gutters>
        <v-col class="col-4">
          <v-row no-gutters>
            <card
              v-for="todo in todoList.slice(0, todoList.length/3)"
              :key="todo._id"
              :todo="todo"
              class=""
            /> 
          </v-row>
        </v-col>
        <v-col class="col-4">
          <v-row
            no-gutters
            class="m-0"
          >
            <card
              v-for="todo in todoList.slice(todoList.length/3,2*todoList.length/3)"
              :key="todo._id"
              :todo="todo"
              class="m-0"
            /> 
          </v-row>
        </v-col>
        <v-col class="col-4">
          <v-row
            no-gutters
            class="m-0"
          >
            <card
              v-for="todo in todoList.slice(2*todoList.length/3)"
              :key="todo._id"
              :todo="todo"
              class="m-0"
            /> 
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '~/components/Card';

export default {
    components: {
        Card,
    },
    data() {
        return {
            todos: [{ done: true,
                task: 'dev Update',
                __v: 0,
                _id: '5d3866ddda50172e346502e0' }],
            todoListRow1: [],
        };
    },
    computed: {
        ...mapGetters({ todoList: 'todo/todo_list' }),
    },
    async mounted() {
        this.$store.dispatch('todo/FETCH_TODO_LIST');
    },
    methods: {
      
    }
};

</script>
