const DEFAULT_SEED = 'MPSJKMDHAI';

const TABLE1 = [
  [15, 15, 24, 20, 24],  // Monday
  [13, 14, 27, 32, 10],  // Tuesday
  [29, 14, 32, 29, 24],  // Wendesday
  [23, 32, 24, 29, 29],  // Thursday
  [14, 29, 10, 21, 29],  // Friday
  [34, 27, 16, 23, 30],  // Saturday
  [14, 22, 24, 17, 13],  // Sunday
];

const TABLE2 = [
  [0, 1, 2, 9, 3, 4, 5, 6, 7, 8],
  [1, 4, 3, 9, 0, 7, 8, 2, 5, 6],
  [7, 2, 8, 9, 4, 1, 6, 0, 3, 5],
  [6, 3, 5, 9, 1, 8, 2, 7, 4, 0],
  [4, 7, 0, 9, 5, 2, 3, 1, 8, 6],
  [5, 6, 1, 9, 8, 0, 4, 3, 2, 7],
];

const ALPHANUM = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

/**
 * Generate Pass of the day for Arris Router
 *
 * @param {Date} d - Date for calculate password
 * @param {String} s - Seed for generate password. Min length: 1
 **/
function genPassOfDay(d, s = DEFAULT_SEED) {
  if (!(d instanceof Date)) {
    throw new TypeError('Date is not a Date instance');
  }

  if (typeof s !== 'string') {
    throw new TypeError('Seed is not a String instance');
  }

  if (s.length < 1) {
    throw new Error('Seed min length: 1');
  }

  const seed = s.repeat(10);
  const year = d.getFullYear() % 100; // Two last digits
  const month = d.getMonth() + 1; // January === 1
  const dayOfMonth = d.getDate();
  const dayOfWeek = d.getDay() === 0 ? 6 : d.getDay() - 1; // Monday === 1

  const l1 = TABLE1[dayOfWeek].slice(0);
  l1.push(dayOfMonth);
  l1.push(year + month - dayOfMonth < 0
    ? (year + month - dayOfMonth + 36) % 36
    : (year + month - dayOfMonth) % 36);
  l1.push((3 + (year + month) % 12) * dayOfMonth % 37 % 36);

  const l2 = [...Array(8).keys()].map((_, i) => seed.charCodeAt(i) % 36);

  const l3 = l1.map((f, i) => (f + l2[i]) % 36);
  const l38 = l3.reduce((t, i) => t + i, 0) % 36;
  const num8 = l38 % 6;
  l3.push(l38);
  l3.push(Math.round(Math.pow(num8, 2)));

  const l4 = TABLE2[num8].map(i => l3[i]);

  const l5 = l4.map((v, i) => (seed.charCodeAt(i) + v) % 36);

  return l5.map(i => ALPHANUM[i]).join('');
}

module.exports = genPassOfDay;
