<template>
  <div class="mx-auto">
    <h2>TODOS</h2>
    <v-container class="w-75 mx-auto">
      <v-row no-gutters>
        <card
          v-for="todo in todoList"
          :key="todo._id"
          :todo="todo"
          class="m-0"
        /> 
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
                _id: '5d3866ddda50172e346502e0' }]
        };
    },
    computed: {
        ...mapGetters({ todoList: 'todo/todo_list' }),
    },
    mounted() {
        this.$store.dispatch('todo/FETCH_TODO_LIST');
    },
    methods: {
      
    }
};

</script>
