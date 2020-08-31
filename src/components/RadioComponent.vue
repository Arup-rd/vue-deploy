<template>
  <a-form-item v-bind="formItemLayout" :label="item.label">
    <a-radio-group
      name="radioGroup"
      v-decorator="[
        `${item.label}`,
        {
          rules: [
            {
              required: item.required,
              message: `${item.validation_message}`,
            },
          ],
        },
      ]"
    >
      <a-radio
        :value="select"
        v-for="(select, index) in Object.values(item.options)[0]"
        :key="index"
      >
        {{ select }}
      </a-radio>
    </a-radio-group>
  </a-form-item>
</template>

<script>
export default {
  name: "radio-component",
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
