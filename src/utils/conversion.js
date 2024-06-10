export const convertLength = (value, fromUnit, toUnit,decimalPlaces=2) => {
    const conversions = {
        meters: {
            feet: value => (value * 3.28084).toFixed(decimalPlaces),
            meters: value => value,
            centimeters: value => value * 100
        },
        feet: {
            meters: value => (value / 3.28084).toFixed(decimalPlaces),
            feet: value => value,
            centimeters: value => value * 30.48
        },
        centimeters: {
            feet: value => value / 30.48,
            meters: value => value / 100,
            centimeters: value => value
        }
    };

    return conversions[fromUnit][toUnit](value);
};

export const convertWeight = (value, fromUnit, toUnit,decimalPlaces=2) => {
    const conversions = {
        kilograms: {
            pounds: value => (value * 2.20462).toFixed(decimalPlaces),
            kilograms: value => value,
            grams: value => (value * 1000).toFixed(decimalPlaces)
        },
        pounds: {
            kilograms: value =>( value / 2.20462).toFixed(decimalPlaces),
            pounds: value => value,
            grams: value => (value *453.59237).toFixed(decimalPlaces)
        },
        grams: {
            pounds: value => (value / 453.592 ).toFixed(decimalPlaces),
            kilograms: value =>  (value / 1000).toFixed(decimalPlaces),
            grams: value => value
        }
    };

    return conversions[fromUnit][toUnit](value);
};

export const convertTemp = (value, fromUnit, toUnit,decimalPlaces=2) => {
    const conversions = {
        celsius: {
            fahrenheit: value => ((value * 1.8)+32).toFixed(decimalPlaces),
            celsius: value => value
        },
        fahrenheit: {
            celsius: value => ((value - 32)* 5/9).toFixed(decimalPlaces),
            fahrenheit: value => value
        }
    };

    return conversions[fromUnit][toUnit](value);
};
