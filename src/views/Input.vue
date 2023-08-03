<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      v-model:value="v.luckyField.$model"
      :error="v.luckyField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      placeholder="Please input password"
      v-model:value="passwordField"
      type="password"
    />
    <Input
      label="Confirm password"
      name="confirm"
      placeholder="Please confirm password"
      v-model:value="v.confirmPasswordField.$model"
      type="password"
      :error="v.confirmPasswordField.$errors"
    />
    <Input
      label="Ejuk string"
      name="ejuk"
      placeholder="Input string with ejuk"
      v-model:value="v.ejukField.$model"
      :error="v.ejukField.$errors"
    />

    <Button label="Submit" />
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
  required,
} from "@vuelidate/validators";

import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");
const ejukField = ref("");

const mustBeEjuk = (value) => value.includes("ejuk");

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(`Введите имя`, required),
    minLength: helpers.withMessage(
      `Минимальная длина: 3 символа`,
      minLength(3)
    ),
  },
  emailField: {
    email: helpers.withMessage(`Вы ввели неверный email`, email),
  },
  luckyField: {
    maxLength: helpers.withMessage(
      `Максимальная длина: 2 символа`,
      maxLength(2)
    ),
    numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      `Пароли не совпадают`,
      sameAs(passwordField.value)
    ),
  },
  ejukField: {
    ejukField: helpers.withMessage(
      `Строка должна содержать слово "ejuk"`,
      mustBeEjuk
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  ejukField,
});

console.log(v);

const submitForm = () => {
  v.value.$touch();
  console.log(v.value.$error);
  if (v.value.$error) return;
  alert('Form sumbitted')
};
</script>
