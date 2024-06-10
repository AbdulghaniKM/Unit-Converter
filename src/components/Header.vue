<template>
    <header class="p-4 flex place-content-between ">
        <h1 class="text-3xl btn">Unit Converter</h1>
        <div class="flex items-center space-x-4">
            <label for="theme-select" class="hidden">Choose Theme:</label>
            <select id="theme-select" class="select select-bordered" @change="changeTheme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="cupcake">Cupcake</option>
                <option value="bumblebee">Bumblebee</option>
                <option value="emerald">Emerald</option>
                <option value="corporate">Corporate</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="synthwave">ynthwave</option>
                <option value="retro">retro</option>
                <option value="lofi">lofi</option>
                <option value="wireframe">wireframe</option>
                <option value="luxury">luxury</option>
                <option value="business">business</option>
                <option value="lemonade">lemonade</option>
                <option value="coffee">coffee</option>
                <option value="dim">Dim</option>
                <option value="Nord">Nord</option>
                <option value="sunset">Sunset</option>
                <!-- Add more options if you add more themes -->
            </select>
        </div>
    </header>
</template>

<script>
import { setTheme } from '../utils/theme';

export default {
    name: 'Header',
    methods: {
        changeTheme(event) {
            const selectedTheme = event.target.value;
            setTheme(selectedTheme);
        }
    }
}
</script>