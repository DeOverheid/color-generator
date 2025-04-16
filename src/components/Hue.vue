<template>
    <div class="c-hue">
        <div v-for="(color, index) in colorsArray" :key="index">

            <p>{{ color.name }}<br>{{ (color.hue + HueSliderValue + 360) % 360 }}</p>
            <Lightness v-for="i in lightnessSplit"
                       :currKey="i"
                       :maxKey="lightnessSplit"
                       :valueX="(100 / (lightnessSplit + 1)) * i"
                       :hue="color.hue"
                       :hueSlider="Number(HueSliderValue)"
                       :SaturationSlider="Number(SaturationSliderValue)"
                       :BezierDarkness="Number(BezierDarkSliderValue)"
                       :BezierLightness="Number(BezierLightSliderValue)" />

            <!--

        :valueX="(100 - (100 / (lightnessSplit) * ((lightnessSplit) - i))) / 100"
    -->
        </div>
    </div>
</template>

<script>
import Lightness from './Lightness.vue';

export default {
    components: {
        Lightness,
    },
    props: {
        HueSliderValue: { type: Number, required: true },
        SaturationSliderValue: { type: Number, required: true },
        BezierDarkSliderValue: { type: Number, required: true },
        BezierLightSliderValue: { type: Number, required: true },
    },
    data() {
        return {
            lightnessSplit: 9,
            colorsArrayXXX: [
                { name: 'crimson', hue: 0 },
                { name: 'earth', hue: 30 },
                { name: 'flame', hue: 30 },
                { name: 'wheat', hue: 60 },
                { name: 'lime', hue: 90 },
                { name: 'grass', hue: 120 },
                { name: 'sea', hue: 150 },
                { name: 'sky', hue: 180 },
                { name: 'corn', hue: 210 },
                { name: 'dusk', hue: 240 },
                { name: 'plum', hue: 270 },
                { name: 'candy', hue: 300 },
                { name: 'salmon', hue: 330 },
            ],
            
            colorsArray: [
                { name: 'crimson', hue: 0, hueDark: 0, hueDivider: 1, sat: 100, darken: 8 },
                { name: 'flame', hue: 30, hueDark: 30, hueDivider: 2, sat: 100, darken: 14 },
                { name: 'wheat', hue: 60, hueDark: 60, hueDivider: 3, sat: 100, darken: 26 },
                { name: 'lime', hue: 80, hueDark: 90, hueDivider: 2, sat: 90, darken: 25 },
                { name: 'grass', hue: 120, hueDark: 120, hueDivider: 1, sat: 85, darken: 23 },
                { name: 'sea', hue: 160, hueDark: 150, hueDivider: 2, sat: 80, darken: 24 },
                { name: 'sky', hue: 180, hueDark: 180, hueDivider: 3, sat: 85, darken: 26 },
                { name: 'corn', hue: 210, hueDark: 210, hueDivider: 2, sat: 96, darken: 14 },
                { name: 'dusk', hue: 240, hueDark: 240, hueDivider: 1, sat: 94, darken: 0 },
                { name: 'plum', hue: 270, hueDark: 270, hueDivider: 2, sat: 95, darken: 8 },
                { name: 'candy', hue: 300, hueDark: 300, hueDivider: 3, sat: 100, darken: 16 },
                { name: 'salmon', hue: 330, hueDark: 330, hueDivider: 2, sat: 91, darken: 9 },
            ],

            colorsArrayTW: [
                { name: 'red', hueLight: 0, hueDark: 0, hueDivider: 3, satLight: 93, satDark: 70, darken: 10, hueScale: 0, satScale: 50 },
                { name: 'orange', hueLight: 35, hueDark: 15, hueDivider: 3, satLight: 100, satDark: 80, darken: 15, hueScale: -30, satScale: 0 },
                { name: 'amber', hueLight: 48, hueDark: 23, hueDivider: 3, satLight: 96, satDark: 83, darken: 22, hueScale: -30, satScale: 0 },
                { name: 'yellow', hueLight: 55, hueDark: 32, hueDivider: 3, satLight: 96, satDark: 82, darken: 22, hueScale: -30, satScale: 0 },
                { name: 'lime', hueLight: 80, hueDark: 86, hueDivider: 3, satLight: 90, satDark: 69, darken: 27, hueScale: 0, satScale: 18 },
                { name: 'green', hueLight: 140, hueDark: 143, hueDivider: 3, satLight: 85, satDark: 64, darken: 23, hueScale: 3, satScale: 18 },
                { name: 'emerald', hueLight: 150, hueDark: 163, hueDivider: 3, satLight: 80, satDark: 94, darken: 24, hueScale: 15, satScale: 0 },
                { name: 'teal', hueLight: 167, hueDark: 176, hueDivider: 3, satLight: 85, satDark: 70, darken: 28, hueScale: 9, satScale: 25 },
                { name: 'cyan', hueLight: 185, hueDark: 195, hueDivider: 3, satLight: 96, satDark: 70, darken: 25, hueScale: 11, satScale: 32 },
                { name: 'sky', hueLight: 204, hueDark: 210, hueDivider: 3, satLight: 94, satDark: 90, darken: 18, hueScale: -2, satScale: 14 },
                { name: 'blue', hueLight: 214, hueDark: 226, hueDivider: 3, satLight: 95, satDark: 70, darken: 7, hueScale: 10, satScale: 40 },
                { name: 'indigo', hueLight: 227, hueDark: 243, hueDivider: 3, satLight: 100, satDark: 55, darken: 4, hueScale: 15, satScale: 50 },
                { name: 'violet', hueLight: 251, hueDark: 263, hueDivider: 3, satLight: 91, satDark: 70, darken: 3, hueScale: 12, satScale: 25 },
                { name: 'purple', hueLight: 269, hueDark: 273, hueDivider: 3, satLight: 100, satDark: 67, darken: 5, hueScale: 5, satScale: 35 },
                { name: 'fuchsia', hueLight: 287, hueDark: 295, hueDivider: 3, satLight: 100, satDark: 70, darken: 12, hueScale: 10, satScale: 35 },
                { name: 'pink', hueLight: 325, hueDark: 336, hueDivider: 3, satLight: 78, satDark: 70, darken: 10, hueScale: 10, satScale: 10 },
                { name: 'rose', hueLight: 355, hueDark: 343, hueDivider: 3, satLight: 100, satDark: 80, darken: 8, hueScale: -14, satScale: 25 }
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
    .c-hue {
        display: flex;

        & > div {
            flex: 1;
        }
    }
</style>
