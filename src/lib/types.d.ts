type StylingType = {
    colorPrimary: string,
    colorSecondary: string,
    colorSecondary50: string,
    colorTertiary: string,
    colorTertiary50: string
}

type SavedColorType = {
    name: string,
    primary: string,
    secondary: string,
    tertiary: string
}

type ColorOptionsType = {
    name: string,
    color: string,
    update: (event: Event) => void
}