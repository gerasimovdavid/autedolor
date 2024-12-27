try {
  const newCreds = JSON.parse(data);
  console.log(newCreds);
} catch (error) {
  console.error("Failed to parse JSON:", error);
}
