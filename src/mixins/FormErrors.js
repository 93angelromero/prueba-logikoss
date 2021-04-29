import _ from 'lodash'

export default {
  methods: {
    /* hasError(field) {
      const errors = _.get(e, 'response.data.errors', {});
      return Object.keys(errors).includes(field);
    },
    firstError(field) {
      return this.hasError(field) ? this.errors[field] : '';
    }, */
    setErrorsFromServer (e, formRef, sharedForm = false) {
      const errors = _.get(e, 'response.data.errors', {})
      if (sharedForm) {
        this.$refs[formRef].$refs[formRef].setErrors(errors)
      } else {
        this.$refs[formRef].setErrors(errors)
      }
    }
  }
}
