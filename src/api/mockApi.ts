export async function mockApi() {
  await new Promise((r) => setTimeout(r, 1000)); // Simulate loading

  return {
    barData: {
      labels: ["Europe", "Asia", "North America", "South America", "Africa"],
      values: [120, 80, 140, 100, 60],
    },
    radarData: {
      labels: ["Retail", "B2B", "Online", "Wholesale", "Direct"],
      values: [80, 120, 90, 70, 100],
    },
  };
}
