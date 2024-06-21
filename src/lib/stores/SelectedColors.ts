import { DEFAULT_COLORS } from "$lib/constants/SelectedColors";
import { writable, type Writable } from "svelte/store";

export let selectedColorsStore: Writable<StylingType>;

if (typeof window !== "undefined") {
    selectedColorsStore = writable(JSON.parse(window.localStorage.getItem("selectedColors") ?? "null") ?? DEFAULT_COLORS);
} else {
    selectedColorsStore = writable(DEFAULT_COLORS);
}

selectedColorsStore.subscribe(value => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("selectedColors", JSON.stringify(value));
    }
})