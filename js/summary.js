// js/summary.js
export function getBuildingSummary(buildingKey) {
  // Later you can fetch real data or calculate from blocksData
  const summaries = {
    mc:  { level: 'medium', text: 'Medium density', avg: 5.4 },
    jcc: { level: 'high',   text: 'High density',   avg: 6.8 },
    ioh: { level: 'low',    text: 'Low density',    avg: 3.9 }
  };
  return summaries[buildingKey] || { level: 'unknown', text: '—' };
}