<template>
  <div class="mx-auto">
    <h2>{{ getIsConnected }}</h2>
    <div class="mdc-text-field">
      <input
        id="my-text-field"
        type="text"
        class="mdc-text-field__input"
      >
      <label
        class="mdc-floating-label"
        for="my-text-field"
      >Label</label>
      <div class="mdc-line-ripple" />
    </div>
    <v-card
      class="w-75 mx-auto"
      outlined
    >
      <v-card-text>
        <v-container>
          <v-row>
            <v-icon class="my-3">
              mdi-heart
            </v-icon>
          </v-row>
          <v-row>
            <h4>Créer un compte Todo</h4>
          </v-row>
          <v-row>
            <v-col>
              <v-form @submit="registerForm()">
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.firstname"
                      label="First name"
                      outlined
                    />
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="form.lastname"
                      label="Last name"
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="form.password"
                      label="Password"
                      outlined
                      :type="showPassword ? 'text' : 'password'"
                      hint="Utilisez au moins huit caractères avec des lettres, des chiffres et des symboles"
                      persistent-hint
                    />
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="form.passwordConfirm"
                      label="Confirm"
                      outlined
                      :type="showPassword ? 'text' : 'password'"
                      :append-outer-icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                      @click:append-outer="showPassword = !showPassword"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-spacer />
                  <v-btn
                    class="ma-2"
                    color="primary"
                    type="submit"
                  >
                    Suivant
                  </v-btn>
                </v-row>
              </v-form>
            </v-col>
            <v-col>
              <v-img
                src="/shield-with-padlock.png"
                lazy-src="/shield-with-padlock-lazy.png"
                aspect-ratio="1"
                max-width="500"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    data() {
        return {
            showPassword: false,
            form: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                passwordConfirm: '',
            }
        };
    },
    computed: {
        ...mapGetters({ getIsConnected: 'auth/getIsConnected' }),
    },
    methods: {
        registerForm() {
            if (this.password === this.passwordConfirm) {
                const param = {
                    firstname: this.form.firstname,
                    lastname: this.form.lastname,
                    email: this.form.email,
                    password: this.form.password,
                };                
                this.$store.dispatch('auth/REGISTER_USER', param);
                // this.$router.push('/');
            }
        },
    }
};
</script>
