"use strict";
const leftJoin = require("./left-join");


const synonymHashMap = [
  ["fond", "enamored"],
  ["wrath", "anger"],
  ["guide", "grab"],
  ["diligent", "employed"],
  ["flow", "usher"],
];

const antonymHashMap = [
  ["fond", "averse"],
  ["wrath", "delight"],
  ["diligent", "idle"],
  ["guide", "follow"],
  ["outfit", "usher"],
];


describe("Left Join Two Hashmaps ", () => {
  it("should successfully left join two hash map", () => {
    let output = leftJoin(synonymHashMap, antonymHashMap);
    console.log('Here',output);
    expect(1).toBe(1);
    expect(output).toEqual( [
        [ 'fond', 'enamored', 'averse' ],
        [ 'wrath', 'anger', 'delight' ],
        [ 'guide', 'grab', 'follow' ],
        [ 'diligent', 'employed', 'idle' ],
        [ 'flow', 'usher', null ]
      ]);
  });
});
