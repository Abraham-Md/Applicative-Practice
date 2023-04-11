import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const sumPlanetTemp = data.planets.map(planet => planet.avgTemp)
  .reduce((acc, val) => acc + val, 0);
  const averageTempOfAllPlanets = sumPlanetTemp / data.planets.length;
  return averageTempOfAllPlanets;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
