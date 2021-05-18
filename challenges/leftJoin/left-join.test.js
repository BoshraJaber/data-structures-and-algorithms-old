"use strict";
const leftJoin = require("./left-join");


const synonymHashMap = [
  ["fond", "enamored"],
  ["wrath", "anger"],
  ["diligent", "employed"],
  ["guide", "grab"],
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
        [ 'diligent', 'employed', 'idle' ],
        [ 'guide', 'grab', 'follow' ],
        [ 'flow', 'usher', null ]
      ]);
  });
});
