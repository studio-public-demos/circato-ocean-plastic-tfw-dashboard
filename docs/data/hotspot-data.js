// Indian Coastal Plastic Leakage Hotspot Data
// Methodology: Jambeck et al. (2015) — Leakage = WasteGen × (1-CR) × MF × RCF
// Calibrated with CPCB Annual Reports 2023-24 and municipal SWM data
// All values independently verifiable using the formula and parameters in Appendix A

const hotspotData = [
  { district: "South 24 Parganas", lat: 22.18, lng: 88.42, leakage: 7426, wasteGen: 85000, coastal: true, risk: "high" },
  { district: "North 24 Parganas", lat: 22.72, lng: 88.48, leakage: 6156, wasteGen: 72000, coastal: true, risk: "high" },
  { district: "Purba Medinipur", lat: 21.94, lng: 87.78, leakage: 2822, wasteGen: 35000, coastal: true, risk: "medium" },
  { district: "Kolkata", lat: 22.57, lng: 88.36, leakage: 8190, wasteGen: 120000, coastal: false, risk: "high" },
  { district: "Puri", lat: 19.81, lng: 85.83, leakage: 2006, wasteGen: 22000, coastal: true, risk: "medium" },
  { district: "Ganjam", lat: 19.39, lng: 85.05, leakage: 1396, wasteGen: 19000, coastal: true, risk: "low" },
  { district: "Baleshwar", lat: 21.49, lng: 86.93, leakage: 942, wasteGen: 15000, coastal: true, risk: "low" },
  { district: "Visakhapatnam", lat: 17.69, lng: 83.22, leakage: 3940, wasteGen: 48000, coastal: true, risk: "high" },
  { district: "Krishna", lat: 16.18, lng: 81.13, leakage: 2419, wasteGen: 30000, coastal: true, risk: "medium" },
  { district: "East Godavari", lat: 16.99, lng: 82.24, leakage: 1828, wasteGen: 24000, coastal: true, risk: "medium" },
  { district: "Chennai", lat: 13.08, lng: 80.27, leakage: 9850, wasteGen: 110000, coastal: true, risk: "high" },
  { district: "Kanyakumari", lat: 8.09, lng: 77.54, leakage: 585, wasteGen: 12000, coastal: true, risk: "low" },
  { district: "Ramanathapuram", lat: 9.37, lng: 78.83, leakage: 320, wasteGen: 8000, coastal: true, risk: "low" },
  { district: "Thiruvananthapuram", lat: 8.52, lng: 76.94, leakage: 2352, wasteGen: 28000, coastal: true, risk: "medium" },
  { district: "Ernakulam", lat: 9.98, lng: 76.28, leakage: 2981, wasteGen: 39000, coastal: true, risk: "medium" },
  { district: "Kozhikode", lat: 11.26, lng: 75.78, leakage: 1590, wasteGen: 23000, coastal: true, risk: "medium" },
  { district: "Dakshina Kannada", lat: 12.91, lng: 75.10, leakage: 1235, wasteGen: 21000, coastal: true, risk: "low" },
  { district: "Udupi", lat: 13.34, lng: 74.75, leakage: 615, wasteGen: 13000, coastal: true, risk: "low" },
  { district: "Bengaluru Urban", lat: 12.97, lng: 77.59, leakage: 7502, wasteGen: 155000, coastal: false, risk: "high" },
  { district: "North Goa", lat: 15.49, lng: 73.82, leakage: 728, wasteGen: 10000, coastal: true, risk: "low" },
  { district: "South Goa", lat: 15.30, lng: 74.12, leakage: 410, wasteGen: 7000, coastal: true, risk: "low" },
  { district: "Mumbai City", lat: 19.08, lng: 72.88, leakage: 18493, wasteGen: 185000, coastal: true, risk: "critical" },
  { district: "Mumbai Suburban", lat: 19.10, lng: 72.85, leakage: 11939, wasteGen: 140000, coastal: true, risk: "critical" },
  { district: "Thane", lat: 19.22, lng: 72.98, leakage: 7235, wasteGen: 85000, coastal: true, risk: "high" },
  { district: "Raigad", lat: 18.52, lng: 73.18, leakage: 1102, wasteGen: 18000, coastal: true, risk: "low" },
  { district: "Ratnagiri", lat: 17.00, lng: 73.30, leakage: 366, wasteGen: 9000, coastal: true, risk: "low" },
  { district: "Ahmedabad", lat: 23.02, lng: 72.57, leakage: 6612, wasteGen: 125000, coastal: false, risk: "high" },
  { district: "Surat", lat: 21.17, lng: 72.83, leakage: 8037, wasteGen: 92000, coastal: true, risk: "high" },
  { district: "Bhavnagar", lat: 21.77, lng: 72.15, leakage: 1436, wasteGen: 22000, coastal: true, risk: "low" },
  { district: "Jamnagar", lat: 22.47, lng: 70.06, leakage: 764, wasteGen: 15000, coastal: true, risk: "low" },
  { district: "Kutch", lat: 23.20, lng: 69.67, leakage: 378, wasteGen: 13000, coastal: true, risk: "low" },
  { district: "Patna", lat: 25.59, lng: 85.14, leakage: 10915, wasteGen: 105000, coastal: false, risk: "critical" },
  { district: "Varanasi", lat: 25.32, lng: 83.01, leakage: 4347, wasteGen: 55000, coastal: false, risk: "high" },
  { district: "Allahabad", lat: 25.44, lng: 81.85, leakage: 3344, wasteGen: 44000, coastal: false, risk: "high" },
  { district: "Kanpur", lat: 26.45, lng: 80.33, leakage: 6115, wasteGen: 80000, coastal: false, risk: "high" },
  { district: "Delhi", lat: 28.61, lng: 77.23, leakage: 8870, wasteGen: 210000, coastal: false, risk: "high" }
];

// Circato TFW Processing Hubs (Phase 1)
const processingHubs = [
  { name: "Bengaluru TFW Plant", lat: 12.97, lng: 77.59, capacity: 500, status: "operational", type: "processing" },
  { name: "Mangaluru Collection Hub", lat: 12.91, lng: 74.85, capacity: 200, status: "operational", type: "collection" },
  { name: "Chennai TFW Plant (Planned)", lat: 13.08, lng: 80.27, capacity: 400, status: "planned", type: "processing" },
  { name: "Mumbai Aggregation Center", lat: 19.08, lng: 72.88, capacity: 600, status: "planned", type: "collection" },
  { name: "Kochi Collection Hub", lat: 9.93, lng: 76.26, capacity: 250, status: "planned", type: "collection" },
  { name: "Ahmedabad TFW Plant (Planned)", lat: 23.02, lng: 72.57, capacity: 350, status: "planned", type: "processing" },
  { name: "Kolkata Aggregation Center", lat: 22.57, lng: 88.36, capacity: 500, status: "planned", type: "collection" }
];

// 7 Target Cities for Installation Partners
const installationCities = [
  { city: "Bengaluru", lat: 12.97, lng: 77.59 },
  { city: "Mumbai", lat: 19.08, lng: 72.88 },
  { city: "Chennai", lat: 13.08, lng: 80.27 },
  { city: "Hyderabad", lat: 17.39, lng: 78.49 },
  { city: "Ahmedabad", lat: 23.02, lng: 72.57 },
  { city: "Pune", lat: 18.52, lng: 73.86 },
  { city: "Kochi", lat: 9.93, lng: 76.26 }
];
