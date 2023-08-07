const { GrowthBook } = window.growthbook;

// Create a GrowthBook instance
const gb = new GrowthBook({
  apiHost: "http://localhost:3100",
  clientKey: "<your-client-key>",
  enableDevMode: true,
  attributes: {
    id: "123",
  },
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

// Wait for features to be available
gb.loadFeatures({ autoRefresh: true });
