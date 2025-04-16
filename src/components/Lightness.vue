<template>
    <div class="c-lightness"
         :style="{ background: `hsl(${calculateHue()}, ${calculateSaturation()}%, ${calculateLightness()}%  )` }">

        L: {{ Math.round(calculateLightness()) }} <br />
        <!--
        H: {{ Math.round(calculateHueSlider()) }}
        <br />
        S: {{ Math.round(calculateSaturation()) }}
        <br />
        L: {{ Math.round(calculateLightness()) }}
         <br />
        X: {{ Math.round(valueX * 100)  }}
    -->
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { calculateBezierY } from './Bezier';

export default defineComponent({
    props: {
        currKey: { type: Number, required: true },
        maxKey: { type: Number, required: true },
        valueX: { type: Number, required: true },
        hue: { type: Number, required: true },
        hueSlider: { type: Number, required: true },
        SaturationSlider: { type: Number, required: true },
        BezierDarkness: { type: Number, required: true },
        BezierLightness: { type: Number, required: true },
    },
    setup(props) {
        const constants = {
            // Define constants for sinus function parameters
            spread: 1, // multiplier for period "bleed"
            amplitude: 0.5, // Amplitude
            phaseShift: 1 / 3.1415, // Faseverschuiving
            period: 1 / 3.1415 / 2, // Periode
            verticalShift: 0.5, // Verticale verschuiving
        };


        const calculateHueSlider = () => {
            return props.hueSlider;
        };

        const calculateHue = () => {
            // Hier kan je je eigen logica toepassen om de Hue waarde te berekenen
            //const hueModifier = props.HueOffset / props.hueDivider;

            // Find the shift in Hue
            //const step = props.currKey / props.maxKey;
            //const hueShift = props.hueSlider * step / 1000;

            return props.hue + props.hueSlider;
        };

        const calculateSaturation = () => {

            // Find the shift in Saturation
            const step = props.currKey / props.maxKey;
            //const satShift = props.SatDark + (props.SatLight - props.SatDark) * step;

            // Adjust saturation per hue
            //const satAdjust = props.SaturationScale * Math.pow((props.maxKey - props.currKey) / (props.maxKey - 1), 2);

            // Calculate and return the new saturation value
            //return satShift * (props.SaturationSlider / 100);
            return props.SaturationSlider;
        };

        const calculateLightness = () => {
            const { yValue } = calculateBezierY((props.valueX / 100), props.BezierDarkness, props.BezierLightness);
            // Calculate the adjusted hue offset using a sinus function
            const sinOffset = constants.amplitude * Math.sin((yValue - constants.phaseShift) / constants.period) + constants.verticalShift;
            return yValue * 100 - (sinOffset * props.SaturationSlider / 100); // scaling to percentage
        };

        return { calculateHueSlider, calculateHue, calculateSaturation, calculateLightness };
    }
});
</script>

<style lang="scss" scoped>
    .c-lightness {
        padding: 4px 0;
        min-height: 6vh;

        & > div {
        }
    }
</style>