export enum Color {
    ORANGE = "orange",
    BLUE = "blue",
    RED = "red",
    GRAY = "gray"
}

type Style = {
    [key in Color | string]: string;
}

export const Background: Style = {
    [Color.ORANGE]: 'bg-orange-100 dark:bg-orange-200',
    [Color.BLUE]: 'bg-blue-50 dark:bg-blue-900',
    [Color.RED]: 'bg-red-50 dark:bg-red-900',
    [Color.GRAY]: 'bg-gray-200 dark:bg-gray-700'
}

export const Text: Style = {
    [Color.ORANGE]: 'text-orange-800 dark:text-orange-900',
    [Color.BLUE]: 'text-blue-800 dark:text-blue-300',
    [Color.RED]: 'text-red-800 dark:text-red-300',
    [Color.GRAY]: 'text-gray-8000 dark:text-gray-300'
}