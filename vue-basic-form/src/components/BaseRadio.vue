<!--<template>
  <input
      type="radio"
      v-model="event.pets"
      :value="1"
      name="pets"
    />
  <label>Yes</label>
</template>-->
<template>
  <input type="radio" :checked="modelValue === value" :value="value" @change="$emit('update:modelValue', value)" v-bind="$attrs" :id="uuid" />
  <label :for="uuid" v-if="label">{{ label }}</label>
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from "../features/UniqueID";
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>
