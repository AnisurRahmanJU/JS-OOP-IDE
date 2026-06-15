class AbstractWeather {
  constructor() {
    if (this.constructor === AbstractWeather) {
      throw new Error("Cannot instantiate abstract class 'AbstractWeather' directly.");
    }
  }

  getWeatherReport() {
    throw new Error("Method 'getWeatherReport()' must be implemented.");
  }
}

class RainyDay extends AbstractWeather {
  constructor(city, temperature, precipitationProbability) {
    super();
    this._city = city;
    this._temperature = temperature;
    this._precipitationProbability = precipitationProbability;
  }

  getWeatherReport() {
    return `Current weather in ${this._city}: ${this._temperature}°C with a ${this._precipitationProbability}% chance of rain.`;
  }

  updatePrecipitation(newProbability) {
    if (newProbability >= 0 && newProbability <= 100) {
      this._precipitationProbability = newProbability;
    }
  }

  get city() {
    return this._city;
  }

  set temperature(value) {
    if (value >= -50 && value <= 60) {
      this._temperature = value;
    }
  }
}

const currentDay = new RainyDay("Dhaka", 28, 85);

console.log(currentDay.getWeatherReport());

currentDay.temperature = 26;
currentDay.updatePrecipitation(95);

console.log(`Updated City: ${currentDay.city}`);
console.log(currentDay.getWeatherReport());

try {
  const invalidWeather = new AbstractWeather();
} catch (error) {
  console.error(`Caught Error: ${error.message}`);
}
