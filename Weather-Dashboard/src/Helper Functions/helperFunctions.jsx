

export function farenheitToCelsius(temp, type) {
    if(type === 'C') {
        return ((temp - 32) * 5 / 9).toFixed(0);
    } else {
        return ((temp * 9 / 5) + 32).toFixed(0);
    }
}

export function handleCheckBoxChange(isFarenheit, setIsFahrenheit) {
        setIsFahrenheit(!isFarenheit);
}