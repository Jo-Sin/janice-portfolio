import { DEFAULT_SAVED_COLORS } from "$lib/constants/SavedColors";
import { writable, type Writable } from "svelte/store";

export let savedColorsStore: Writable<SavedColorType[]>;

if (typeof window !== "undefined") {
    savedColorsStore = writable(JSON.parse(window.localStorage.getItem("savedColors") ?? "null") ?? DEFAULT_SAVED_COLORS);
} else {
    savedColorsStore = writable(DEFAULT_SAVED_COLORS);
}

savedColorsStore.subscribe(value => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem("savedColors", JSON.stringify(value));
    }
})