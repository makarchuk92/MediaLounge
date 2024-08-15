const colorConfig = {
    primary: '#713adb',
    'gray.400': '#626262',
    yellow: '#fbc903'
}

export const getColor = (color: keyof typeof colorConfig) => colorConfig[color] 