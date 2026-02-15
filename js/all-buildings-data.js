// all-buildings-data.js

export const campusData = {
  mc: [
    {
      name: "Block A",
      floors: 13,
      densities: [0, 3, 4, 2, 6, 8, 7, 5, 9, 4, 3, 6, 8, 0],
      disabledFloors: [1, 13],
      disabledReasons: {
        1: "Bank of China lecture theatre",
        13: "MU Club"
      },
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F","11F","12F"]
    },
    {
      name: "Block B",
      floors: 9,
      densities: [2, 3, 4, 2, 6, 8, 7, 5, 9],
      disabledFloors: [],
      disabledReasons: {

      },
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F"]
    },
    {
      name: "Block C",
      floors: 14,
      densities: [0, 4, 5, 6, 8, 9, 7, 3, 2, 5, 6, 4, 0, 0, 2],
      disabledFloors: [1,12, 13],
      disabledReasons: {
        1: "Car Pack",
        12: "Mutli-purpose hall",
        13:  "Mutli-purpose hall"
      },
      floorNames: ["-1F", "GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F","11F", "Rooftop"]
    }
  ],

  jcc: [
    {
      name: "Block D",
      floors: 12,
      densities: [0, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      disabledFloors: [1],
      disabledReasons: {
        1:"Entry"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"]
    },
    {
      name: "Block E",
      floors: 12,
      densities: [0, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      disabledFloors: [1],
      disabledReasons: {
        1: "Admission & Enrolment Office"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"]
    }
  ],

  ioh: [
    {
      name: "Main Block",
      floors: 13,
      densities: [0, 9, 10, 10, 10, 10, 10, 10, 9, 9, 9, 9, 2],
      disabledFloors: [1, 8, 12,13],
      disabledReasons: {
        1:"Entry",
        8: "Ward Simulation Classroom",
        12: "N&HS office",
        13: "Not open"
      },
      floorNames: ["GF", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "Rooftop"]
    }
  ]
};

// Optional exports (keep if needed elsewhere)
export const mcData   = campusData.mc;
export const jccData  = campusData.jcc;
export const iohData  = campusData.ioh;

export function getAllBuildings() {
  return [
    { key: "mc",  name: "MC Building",  blocks: mcData,   color: "#1e88e5" },
    { key: "jcc", name: "JCC Building", blocks: jccData,  color: "#e53935" },
    { key: "ioh", name: "IOH Building", blocks: iohData,  color: "#43a047" }
  ];
}