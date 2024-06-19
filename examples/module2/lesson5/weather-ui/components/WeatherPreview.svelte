<script lang="ts">
  import { LocationWeather } from '../models/LocationWeather';
  import DailyWeather from './DailyWeather.svelte';

  export let weather: LocationWeather;

  /** @param {DailyWeather} weather */
  function getNestedWeather(weather: LocationWeather) {
    return 'Weather' in weather.weatherDetails
      ? weather.weatherDetails.Weather.map((item) => ({
          date: item.date,
          averageTemperature: item.average_temperature,
          type: item.type,
        }))
      : weather.weatherDetails;
  }
  $: nestedWeather = getNestedWeather(weather);
</script>

<div>
  <h2 class="text-2xl py-4">
    {weather.city}, {weather.country}
  </h2>
  <ul class="space-y-4">
    {#each nestedWeather as details}
      <DailyWeather dailyWeather={details} country={weather.country}/>
    {/each}
  </ul>
</div>
