export let applicationData = [
  { name: "Accepted Applications", value: 1 },
  { name: "Rejected Applications", value: 0 },
  { name: "Pending Applications", value: 0 },
];

// Function to update applicationData
export const updateApplicationData = (newData) => {
  applicationData = newData;
};
