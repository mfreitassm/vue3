<!--<template>
  <input type="checkbox" v-model="event.extras.catering" class="field" />
  <label>Catering</label>
</template>-->
<template>
  <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)" class="field" :id="uuid" />
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
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>
