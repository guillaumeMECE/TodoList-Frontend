<template>
  <transition name="card">
    <div
      v-if="isShow"
      class="mx-auto w-25"
    >
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-card
          v-show="!isWriting"
          outlined
          class="mx-auto"
        >
          <v-card-text
            @click="writeTodo()"
          >
            {{ todo.task }}
          </v-card-text>
          <v-card-actions>
            <v-spacer style="height:36px" />
            <v-btn
              v-show="hover ? true : false" 
              text 
              icon
              class="mr-0"
              @click="writeTodo()"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              v-show="hover ? true : false" 
              text 
              icon 
              color="red"
              class="ml-0"
              @click="removeTodo()"
            >
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
      <v-textarea
        v-show="isWriting"
        ref="writeArea"
        v-model="task"
        append-icon="mdi-pencil"
        outlined
        rows="6"
        row-height="30"
        auto-grow
        @blur="update()"
        @keydown.enter="update()"
      />
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
            overlay: false,
            isWriting: false
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
            this.isWriting = false;
        },
        writeTodo() {
            this.isWriting = true;
            this.$nextTick(() => {
                this.$refs.writeArea.focus();
            });
        }
    },
};

//  <b-input-group>
//         <b-input-group-prepend is-text>
//           <b-form-checkbox
//             v-model="done"
//             class="mr-n2"
//             @input="update"
//           >
//             <span class="sr-only">Checkbox for following text input</span>
//           </b-form-checkbox>
//         </b-input-group-prepend>
//         <b-form-input
//           v-model="task"
//           :class="done?'todo__done':''"
//           type="text"
//           @keydown.enter="update"
//           @blur="update"
//         />
//         <b-input-group-append>
//           <b-button
//             variant="outline-danger"
//             @click="removeTodo"
//           >
//             X
//           </b-button>
//         </b-input-group-append>
//       </b-input-group>
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

     /* <v-textarea
        v-show="isWriting"
        ref="writeArea"
        label="Editer la note"
        :placeholder="todo.task"
        width="344"
        clearable
        clear-icon="mdi-close-circle"
        outlined
        rows="4"
        row-height="30"
        auto-grow
        @blur="update()"
        @keydown.enter="update()"
      /> */
    
</style>
