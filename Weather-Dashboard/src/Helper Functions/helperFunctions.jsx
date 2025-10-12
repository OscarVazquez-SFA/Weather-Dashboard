

export function farenheitToCelsius(temp, type) {
    if(type === 'C') {
        return ((temp - 32) * 5 / 9).toFixed(0);
    } else {
        return ((temp * 9 / 5) + 32).toFixed(0);
    }
}

export function mphToKph(speed, type) {
    if(type === 'KPH') {
        return (speed * 1.60934).toFixed(0);
    }else {
        return (speed / 1.60934).toFixed(0);
    }
}

export function handleCheckBoxChange(setIsDark) {
        setIsDark(prev => !prev);
}
export function handleCheckBoxChangeTemp(setIsFahrenheit) {
    setIsFahrenheit(prev => !prev);
}