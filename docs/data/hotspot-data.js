// Synthetic district scenario values, regenerated for public illustration.
// No measured-data accuracy or calibration claim; geographic place names only.

const hotspotData = [
  { district: "South 24 Parganas", lat: 22.18, lng: 88.42, leakage: 1291, wasteGen: 12000, coastal: true, risk: "low" },
  { district: "North 24 Parganas", lat: 22.72, lng: 88.48, leakage: 2082, wasteGen: 14000, coastal: true, risk: "medium" },
  { district: "Purba Medinipur", lat: 21.94, lng: 87.78, leakage: 2873, wasteGen: 16000, coastal: true, risk: "medium" },
  { district: "Kolkata", lat: 22.57, lng: 88.36, leakage: 3664, wasteGen: 18000, coastal: false, risk: "high" },
  { district: "Puri", lat: 19.81, lng: 85.83, leakage: 4455, wasteGen: 20000, coastal: true, risk: "high" },
  { district: "Ganjam", lat: 19.39, lng: 85.05, leakage: 5246, wasteGen: 22000, coastal: true, risk: "high" },
  { district: "Baleshwar", lat: 21.49, lng: 86.93, leakage: 6037, wasteGen: 24000, coastal: true, risk: "high" },
  { district: "Visakhapatnam", lat: 17.69, lng: 83.22, leakage: 6828, wasteGen: 26000, coastal: true, risk: "high" },
  { district: "Krishna", lat: 16.18, lng: 81.13, leakage: 7619, wasteGen: 28000, coastal: true, risk: "high" },
  { district: "East Godavari", lat: 16.99, lng: 82.24, leakage: 8410, wasteGen: 30000, coastal: true, risk: "high" },
  { district: "Chennai", lat: 13.08, lng: 80.27, leakage: 9201, wasteGen: 32000, coastal: true, risk: "high" },
  { district: "Kanyakumari", lat: 8.09, lng: 77.54, leakage: 9992, wasteGen: 34000, coastal: true, risk: "high" },
  { district: "Ramanathapuram", lat: 9.37, lng: 78.83, leakage: 10783, wasteGen: 36000, coastal: true, risk: "critical" },
  { district: "Thiruvananthapuram", lat: 8.52, lng: 76.94, leakage: 11574, wasteGen: 38000, coastal: true, risk: "critical" },
  { district: "Ernakulam", lat: 9.98, lng: 76.28, leakage: 12365, wasteGen: 40000, coastal: true, risk: "critical" },
  { district: "Kozhikode", lat: 11.26, lng: 75.78, leakage: 1156, wasteGen: 42000, coastal: true, risk: "low" },
  { district: "Dakshina Kannada", lat: 12.91, lng: 75.10, leakage: 1947, wasteGen: 44000, coastal: true, risk: "medium" },
  { district: "Udupi", lat: 13.34, lng: 74.75, leakage: 2738, wasteGen: 46000, coastal: true, risk: "medium" },
  { district: "Bengaluru Urban", lat: 12.97, lng: 77.59, leakage: 3529, wasteGen: 48000, coastal: false, risk: "high" },
  { district: "North Goa", lat: 15.49, lng: 73.82, leakage: 4320, wasteGen: 50000, coastal: true, risk: "high" },
  { district: "South Goa", lat: 15.30, lng: 74.12, leakage: 5111, wasteGen: 52000, coastal: true, risk: "high" },
  { district: "Mumbai City", lat: 19.08, lng: 72.88, leakage: 5902, wasteGen: 54000, coastal: true, risk: "high" },
  { district: "Mumbai Suburban", lat: 19.10, lng: 72.85, leakage: 6693, wasteGen: 56000, coastal: true, risk: "high" },
  { district: "Thane", lat: 19.22, lng: 72.98, leakage: 7484, wasteGen: 58000, coastal: true, risk: "high" },
  { district: "Raigad", lat: 18.52, lng: 73.18, leakage: 8275, wasteGen: 60000, coastal: true, risk: "high" },
  { district: "Ratnagiri", lat: 17.00, lng: 73.30, leakage: 9066, wasteGen: 62000, coastal: true, risk: "high" },
  { district: "Ahmedabad", lat: 23.02, lng: 72.57, leakage: 9857, wasteGen: 64000, coastal: false, risk: "high" },
  { district: "Surat", lat: 21.17, lng: 72.83, leakage: 10648, wasteGen: 66000, coastal: true, risk: "critical" },
  { district: "Bhavnagar", lat: 21.77, lng: 72.15, leakage: 11439, wasteGen: 68000, coastal: true, risk: "critical" },
  { district: "Jamnagar", lat: 22.47, lng: 70.06, leakage: 12230, wasteGen: 70000, coastal: true, risk: "critical" },
  { district: "Kutch", lat: 23.20, lng: 69.67, leakage: 1021, wasteGen: 72000, coastal: true, risk: "low" },
  { district: "Patna", lat: 25.59, lng: 85.14, leakage: 1812, wasteGen: 74000, coastal: false, risk: "medium" },
  { district: "Varanasi", lat: 25.32, lng: 83.01, leakage: 2603, wasteGen: 76000, coastal: false, risk: "medium" },
  { district: "Allahabad", lat: 25.44, lng: 81.85, leakage: 3394, wasteGen: 78000, coastal: false, risk: "high" },
  { district: "Kanpur", lat: 26.45, lng: 80.33, leakage: 4185, wasteGen: 80000, coastal: false, risk: "high" },
  { district: "Delhi", lat: 28.61, lng: 77.23, leakage: 4976, wasteGen: 82000, coastal: false, risk: "high" }
];

// Synthetic example hub scenarios
const processingHubs = [
  { name: "Example: Bengaluru TFW Plant", lat: 12.97, lng: 77.59, capacity: 500, status: "illustrative-active", type: "processing" },
  { name: "Example: Mangaluru Collection Hub", lat: 12.91, lng: 74.85, capacity: 200, status: "illustrative-active", type: "collection" },
  { name: "Example: Chennai TFW Plant (Planned)", lat: 13.08, lng: 80.27, capacity: 400, status: "illustrative-planned", type: "processing" },
  { name: "Example: Mumbai Aggregation Center", lat: 19.08, lng: 72.88, capacity: 600, status: "illustrative-planned", type: "collection" },
  { name: "Example: Kochi Collection Hub", lat: 9.93, lng: 76.26, capacity: 250, status: "illustrative-planned", type: "collection" },
  { name: "Example: Ahmedabad TFW Plant (Planned)", lat: 23.02, lng: 72.57, capacity: 350, status: "illustrative-planned", type: "processing" },
  { name: "Example: Kolkata Aggregation Center", lat: 22.57, lng: 88.36, capacity: 500, status: "illustrative-planned", type: "collection" }
];

// Example city locations
const installationCities = [
  { city: "Bengaluru", lat: 12.97, lng: 77.59 },
  { city: "Mumbai", lat: 19.08, lng: 72.88 },
  { city: "Chennai", lat: 13.08, lng: 80.27 },
  { city: "Hyderabad", lat: 17.39, lng: 78.49 },
  { city: "Ahmedabad", lat: 23.02, lng: 72.57 },
  { city: "Pune", lat: 18.52, lng: 73.86 },
  { city: "Kochi", lat: 9.93, lng: 76.26 }
];
