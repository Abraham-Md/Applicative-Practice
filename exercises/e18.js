/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let obj = {};
  const asteroid = data.asteroids.map(years => years.discoveryYear);
  for (let year of asteroid) {
    if (!obj[year]) {
      obj[year] = 1;
    } else {
      obj[year] += 1;
    }
  };
  let modeYear = 0;
  let yearWithMostDiscoveries = null;
  for (let year in obj) {
    if (obj[year] > modeYear) {
      modeYear = obj[year];
      yearWithMostDiscoveries = year;
    }
  }
  return parseInt(yearWithMostDiscoveries);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
