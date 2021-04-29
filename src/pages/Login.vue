<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <div v-bind:style="$q.screen.lt.sm?{'width':'80%'}:{'width':'30%'}">
          <div class="text-center q-pt-lg">
            <div class="col text-h4 ellipsis">
              Login
            </div>
          </div>
          <q-form
            class="q-gutter-md q-mt-md"
          >
            <q-input
              name="login"
              type="text"
              v-model="email"
            />
            <q-input
              v-model="password"
              type="password"
            />
            <div class="q-mt-md">
              <q-btn
                color="primary"
                class="full-width"
                label="Iniciar sesión"
                :loading="submitting"
                @click="login"
              />
            </div>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import _ from 'lodash'
import FormErrors from 'src/mixins/FormErrors'

export default {
  name: 'Login',
  mixins: [FormErrors],
  data () {
    return {
      email: '',
      password: '',
      submitting: false,
      authError: null
    }
  },
  methods: {
    async login () {
      this.submitting = true

      const { email } = this
      const { password } = this

      this.$store.dispatch('auth/login', { email, password })
        .then(() => this.$store.dispatch('authConfig'))
        .then(() => this.$router.push({ name: 'Dashboard' }))
        .catch((e) => {
          this.authError = _.get(e, 'response.data.message', 'Error del servidor')
          // this.setErrorsFromServer(e, 'loginForm')
        })
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>

<style scoped>

</style>
