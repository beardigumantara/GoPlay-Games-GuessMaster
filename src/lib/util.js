/**
 * Shuffle array content
 *
 * @param {array} array - Array to be shuffled
 * @returns {array}
 * @example Shuffle ['a, 'b', 'c'] to ['b', 'c', 'a']
 */

export const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  // Iterate array
  while (currentIndex !== 0) {
    // Pick remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const addLeadingZero = (value) => {
  const isSingleDigit = value >= 0 && value < 10;

  return `${isSingleDigit ? "0" : ""}${value}`;
};

export const getCountdown = (date) => {
  // Show error message if date args is not passed
  if (date === undefined) {
    return console.error("Please set a target date to get time distance.");
  }

  // Get current and target date and time
  const now = new Date().getTime();
  const targetDate = new Date(date).getTime();

  // Calculate distance between current and target date
  const timeDistance = targetDate - now;

  // Calculate times
  const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
  const secondsLeft = timeDistance / 1000;

  return {
    // Countdown values
    days,
    hours,
    minutes,
    seconds,
    secondsLeft,

    // Convert countdown values to string
    toString: () => {
      // Add days to hours
      const hoursWithDays = hours + days * 24;

      // Return string formatted time distance, eg: 01:30:00
      return `${addLeadingZero(hoursWithDays)}:${addLeadingZero(
        minutes
      )}:${addLeadingZero(seconds)}`;
    },

    // This will be set as true if target date distance is negative number
    isFinished: timeDistance <= 0,
  };
};

