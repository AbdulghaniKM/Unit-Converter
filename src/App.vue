<template>
  <div class="container mx-auto p-4" >
    <Header />
    <Welcome />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      <UnitCard title="Length" description="Convert between meters, feet, and more"
        :units="['meters', 'feet', 'centimeters']"
        :convertFunction="(value, fromUnit, toUnit) => convertLength(value, fromUnit, toUnit, 2)" />
      <UnitCard title="Weight" description="Convert between grams, pounds, and more"
        :units="['kilograms', 'pounds', 'grams']"
        :convertFunction="(value, fromUnit, toUnit) => convertWeight(value, fromUnit, toUnit, 2)" />

      <UnitCard title="Temperature" description="Convert between celsius and fahrenheit"
        :units="['celsius ', 'fahrenheit']"
        :convertFunction="(value, fromUnit, toUnit) => convertTemp(value, fromUnit, toUnit, 2)" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Welcome from './components/Welcome.vue'
import UnitCard from './components/UnitCard.vue'
import { convertLength, convertWeight, convertTemp } from './utils/conversion';

export default {
  name: 'App',
  components: {
    Header,
    Welcome,
    UnitCard
  },
  methods: {
    convertLength, convertWeight, convertTemp
  }
}
</script>
