<template>
    <h1 class="heading-1">Checkbox</h1>
    <h2 class="heading-2">Checkbox Active</h2>
    <div class="line">
        <checkbox
            name="checkboxActive"
            id="checkboxActive"
            value="I like it!"
            label="Checkbox Active"
            v-model:checked="checkboxActive"
        />
    </div>
    <h2 class="heading-2">Checkbox Disabled</h2>
    <div class="line">
        <Checkbox
            name="checkboxDisabled"
            id="checkboxDisabled"
            value="I like it!"
            label="Checkbox Disabled"
            :disabled="checkboxDisabled"
            v-model:checked="checkboxDisabledChecked"
        />
    </div>
    <h2 class="heading-2">Checkbox Group</h2>
    <div class="line line_block">
        <p>Selected Heroes: {{ selectedHeroes }}</p>
        <CheckboxGroup
            v-model:value="selectedHeroes"
            name="heroes"
            :options="listOfHeroes"
        />
    </div>
    <h2 class="heading-2">Switch</h2>
    <div class="line line_block">
        <p>Switch: {{ switchProfessional }}</p>
        <Checkbox
            label="I'm a professional"
            id="switch"
            name="switch"
            value="I'm a professional"
            type="switch"
            v-model:checked="switchProfessional"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from '@/components/Checkbox/CheckboxGroup.vue';

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const switchProfessional = ref(false)

const listOfHeroes = ref([
    { name: 'Spider Man', id: 'h1' },
    { name: 'Batman', id: 'h2' },
    { name: 'Tor', id: 'h3' },
    { name: 'Loki', id: 'h4' },
]);

const selectedHeroes = ref(['h1', 'h3']);
</script>
