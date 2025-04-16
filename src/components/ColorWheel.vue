<template>
    <div class="c-colorwheel">
        <Hue :HueSliderValue="sliders.Hue.value"
             :SaturationSliderValue="sliders.Saturation.value"
             :BezierDarkSliderValue="sliders.BezierDark.value"
             :BezierLightSliderValue="sliders.BezierLight.value" />

        <div class="c-sliders">
            <div v-for="(slider, key) in sliders" :key="key">
                <h3>{{ slider.label }}</h3>
                <input type="range"
                       :min="slider.min"
                       :max="slider.max"
                       :step="slider.step"
                       v-model.number="slider.value"
                       :class="slider.class" />
                <p>{{ slider.label }} offset: {{ slider.value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Hue from './Hue.vue';

    const sliders = {
        Hue: {
            label: 'Hue offset', class: 'slider-hue', min: -15, max: 15, step: 1, value: 0
        },
        Saturation: {
            label: 'Saturation', class: 'slider-sat', min: 0, max: 100, step: 1, value: 66
        },
        BezierDark: {
            label: 'BezierDark', class: 'slider-dark', min: 0, max: 1, step: 0.01, value: 0.45
        },
        BezierLight: {
            label: 'BezierLight', class: 'slider-light', min: 0, max: 1, step: 0.01, value: 1.0
        },
    };

    export default {
        components: {
            Hue
        },
        data() {
            return {
                sliders: sliders
            };
        }
    };</script>

<style lang="scss" scoped>
    .c-sliders {
        display: flex;

        & > div {
            flex: 1;
        }
    }

    input[type=range] {
        -webkit-appearance: none;
        border: 1px solid #666;
        border-radius: 666em;
        box-shadow: inset 0 3px 5px 0 hsl(0 0% 0% / 0.25);
        outline: none;
        width: 80%;
    }

    .slider-hue {
        background: linear-gradient(90deg, red 0, yellow 17%, green 33%, cyan 50%, blue 67%, magenta 83%, red);
        background: linear-gradient(90deg, red 0, yellow 50%, green);
    }

    .slider-sat {
        background: linear-gradient(90deg,grey 0, cyan 100%);
    }

    .slider-dark {
        background: linear-gradient(90deg, black 0, grey 100%);
    }

    .slider-light {
        background: linear-gradient(90deg, grey 0, white 100%);
    }
</style>
