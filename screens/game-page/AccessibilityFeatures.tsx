const accessbilityFeatures = [
  "Colourblind Support",
  "Zoom Options",
  "High Contrast Colour Scheme",
  "Font Size Options",
  "Subtitles",
  "Direct Voice Input",
  "Switch Controller Mode",
  "Eye Tracker Mode",
];

accessbilityFeatures;

export default function pickAccFeatures() {
  //stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
  //   let accFeatures = [];
  // Shuffle array
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const n = Math.floor(Math.random() * (max - min + 1) + min);
  const shuffled = accessbilityFeatures.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  //   accFeatures.push();
  return shuffled.slice(0, n);
}
