import { Space } from "#/styles/constants/space"
import { Breakpoints } from "#/styles/constants/breakpoints"

const muiSpacing = {
    "space-0": 0,
    "space-25": 1,
    "space-50": 2,
    "space-75": 3,
    "space-100": 4,
    "space-125": 5,
    "space-150": 6,
    "space-200": 8,
    "space-250": 10,
    "space-300": 12,
    "space-400": 16,
    "space-500": 20,
    "space-600": 24,
    "space-700": 28,
    "space-800": 32,
    "space-900": 40,
    "space-1000": 48,
    "space-1100": 56,
    "space-1200": 64,
    "space-1300": 72,
}

const addProperty = (property: Breakpoints, value?: Space) => {
    return value ? { [property]: muiSpacing[value] } : {}
}

export const getMuiSpacing = (spacing?: Space | Partial<Record<Breakpoints, Space>>) => {
    if (!spacing) return {}

    return typeof spacing === 'string' ? muiSpacing[spacing] : {
        ...(addProperty('xSmall', spacing.xSmall)),
        ...(addProperty('small', spacing.small)),
        ...(addProperty('medium', spacing.medium)),
        ...(addProperty('large', spacing.large)),
        ...(addProperty('xLarge', spacing.xLarge)),
        ...(addProperty('xxLarge', spacing.xxLarge)),
    }
}