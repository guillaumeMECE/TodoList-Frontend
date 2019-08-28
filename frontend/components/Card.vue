<template>
  <transition name="card">
    <div
      v-if="isShow"
    >
      <b-input-group>
        <b-input-group-prepend is-text>
          <b-form-checkbox
            v-model="done"
            class="mr-n2"
            @input="update"
          >
            <span class="sr-only">Checkbox for following text input</span>
          </b-form-checkbox>
        </b-input-group-prepend>
        <b-form-input
          v-model="task"
          :class="done?'todo__done':''"
          type="text"
          @keydown.enter="update"
          @blur="update"
        />
        <b-input-group-append>
          <b-button
            variant="outline-danger"
            @click="removeTodo"
          >
            X
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </transition>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default() { return { task: 'TASK HERE', done: false }; }
        }
    },
    data() {
        return {
            done: '',
            task: '',
            isShow: false,
        };
    },
    mounted() {
        this.task = this.todo.task;
        this.done = this.todo.done;
        this.isShow = true;
    },
    methods: {
        removeTodo() {
            this.isShow = false;
            this.$store.dispatch('todo/DELETE_TODO', this.todo._id);
        },
        update() {
            const body = {
                task: this.task,
                done: this.done,
                _id: this.todo._id,
            };
            console.log('body', body);
            
            this.$store.dispatch('todo/UPDATE_TODO', body);
        }
    },
};
</script>

<style scoped>
.card-enter-active {
  transition: all .3s ease;
}
.card-leave-active {
  transition: all .8s ease;
}
.card-enter, .card-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

 .todo__done {
        text-decoration: line-through !important
    }
</style>
