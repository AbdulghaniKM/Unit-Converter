<template>
    <div class="card shadow-lg bg-primary-content  p-4">
        <h2 class="text-xl font-bold text-primary">{{ title }}</h2>
        <p class="mt-2 text-primary">{{ description }}</p>
        <input v-model.number="value" type="number" placeholder="Enter value"
            class="input input-bordered w-full mt-2" />
        <div class="flex space-x-2 mt-2">
            <select v-model="fromUnit" class="select select-bordered">
                <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
            </select>
            <span class="text-xl text-primary">to</span>
            <select v-model="toUnit" class="select select-bordered">
                <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
            </select>
        </div>
        <button class="btn btn-primary mt-4" @click="convert">Convert</button>
        <p v-if="result !== null" class="mt-2 text-primary">Result: {{ result }}</p>
    </div>
</template>

<script>
import { convertLength, convertWeight, convertTemp } from '../utils/conversion';

export default {
    name: 'UnitCard',
    props: {
        title: String,
        description: String,
        units: Array,
        convertFunction: Function
    },
    data() {
        return {
            value: 0,
            fromUnit: this.units[0],
            toUnit: this.units[1],
            result: null
        };
    },
    methods: {
        convert() {
            this.result = this.convertFunction(this.value, this.fromUnit, this.toUnit);
        }
    }
}
</script>