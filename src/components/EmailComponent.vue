<template>
  <a-form-item v-bind="formItemLayout" :label="item.label">
    <a-input
      v-decorator="[
        'email',
        {
          rules: [
            {
              type: `${item.type}`,
              message: 'The input is not valid E-mail!',
            },
            {
              required: item.required,
              message: `${item.validation_message}`,
            },
          ],
        },
      ]"
    />
  </a-form-item>
</template>

<script>
export default {
  name: "email-component",
  props: ["item"],
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
    };
  },
};
</script>
<style></style>
