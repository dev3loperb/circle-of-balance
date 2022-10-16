<template>
    <svg viewBox="0 0 100 100" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon :points="points" />
        <circle :cx=radius :cy=radius :r=radius />
    </svg>
    <div :key="stat" v-for="(stat, index) in stats">
        <label>{{index + 1}}</label>
        <input type="range" v-model="stat.value" min="0" max="100" />
        <span>{{stat.value}}</span>
    </div>
</template>

<script>
const maxValue = 100;

import valueToPoint from '../common-functions'
export default {
    data() {
        return {
            stats: Array.from({length: 10}, it => ({ value: this.generateValue() })),
            radius: 50
        }
    },
    computed: {
        points() {
            return this.stats
                .map(it => it.value)
                .map((it, index) => {
                    return valueToPoint(it / maxValue * this.radius, index, this.stats.length);
                })
                .map(it => {
                    return (it.tx + this.radius) + "," + (it.ty + this.radius);
                }).join(" ")
        }
    },
    methods: {
        generateValue() {
            return Math.round(30 + Math.random() * 70);
        }
    }
}
</script>
