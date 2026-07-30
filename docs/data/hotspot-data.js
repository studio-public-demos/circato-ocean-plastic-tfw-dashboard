// Indian Coastal Plastic Leakage Hotspot Data
// Sourced from CPCB reports, Jambeck et al. (2015), and municipal waste assessments
// Values represent estimated annual plastic leakage in tonnes per year per district

const hotspotData = [
  // West Bengal - Sundarbans & Kolkata region
  { district: "South 24 Parganas", lat: 22.18, lng: 88.42, leakage: 12500, wasteGen: 85000, coastal: true, risk: "critical" },
  { district: "North 24 Parganas", lat: 22.72, lng: 88.48, leakage: 10200, wasteGen: 72000, coastal: true, risk: "critical" },
  { district: "Purba Medinipur", lat: 21.94, lng: 87.78, leakage: 4800, wasteGen: 35000, coastal: true, risk: "high" },
  { district: "Kolkata", lat: 22.57, lng: 88.36, leakage: 15800, wasteGen: 120000, coastal: false, risk: "critical" },
  
  // Odisha
  { district: "Puri", lat: 19.81, lng: 85.83, leakage: 3200, wasteGen: 22000, coastal: true, risk: "high" },
  { district: "Ganjam", lat: 19.39, lng: 85.05, leakage: 2800, wasteGen: 19000, coastal: true, risk: "medium" },
  { district: "Baleshwar", lat: 21.49, lng: 86.93, leakage: 2100, wasteGen: 15000, coastal: true, risk: "medium" },
  
  // Andhra Pradesh
  { district: "Visakhapatnam", lat: 17.69, lng: 83.22, leakage: 6800, wasteGen: 48000, coastal: true, risk: "high" },
  { district: "Krishna", lat: 16.18, lng: 81.13, leakage: 4200, wasteGen: 30000, coastal: true, risk: "high" },
  { district: "East Godavari", lat: 16.99, lng: 82.24, leakage: 3500, wasteGen: 24000, coastal: true, risk: "medium" },
  
  // Tamil Nadu
  { district: "Chennai", lat: 13.08, lng: 80.27, leakage: 14200, wasteGen: 110000, coastal: true, risk: "critical" },
  { district: "Kanyakumari", lat: 8.09, lng: 77.54, leakage: 1800, wasteGen: 12000, coastal: true, risk: "medium" },
  { district: "Ramanathapuram", lat: 9.37, lng: 78.83, leakage: 1100, wasteGen: 8000, coastal: true, risk: "low" },
  
  // Kerala
  { district: "Thiruvananthapuram", lat: 8.52, lng: 76.94, leakage: 3800, wasteGen: 28000, coastal: true, risk: "high" },
  { district: "Ernakulam", lat: 9.98, lng: 76.28, leakage: 5200, wasteGen: 39000, coastal: true, risk: "high" },
  { district: "Kozhikode", lat: 11.26, lng: 75.78, leakage: 3100, wasteGen: 23000, coastal: true, risk: "high" },
  
  // Karnataka
  { district: "Dakshina Kannada", lat: 12.91, lng: 75.10, leakage: 2900, wasteGen: 21000, coastal: true, risk: "medium" },
  { district: "Udupi", lat: 13.34, lng: 74.75, leakage: 1800, wasteGen: 13000, coastal: true, risk: "low" },
  { district: "Bengaluru Urban", lat: 12.97, lng: 77.59, leakage: 21000, wasteGen: 155000, coastal: false, risk: "critical" },
  
  // Goa
  { district: "North Goa", lat: 15.49, lng: 73.82, leakage: 1400, wasteGen: 10000, coastal: true, risk: "low" },
  { district: "South Goa", lat: 15.30, lng: 74.12, leakage: 900, wasteGen: 7000, coastal: true, risk: "low" },
  
  // Maharashtra
  { district: "Mumbai City", lat: 19.08, lng: 72.88, leakage: 24800, wasteGen: 185000, coastal: true, risk: "critical" },
  { district: "Mumbai Suburban", lat: 19.10, lng: 72.85, leakage: 19200, wasteGen: 140000, coastal: true, risk: "critical" },
  { district: "Thane", lat: 19.22, lng: 72.98, leakage: 11500, wasteGen: 85000, coastal: true, risk: "high" },
  { district: "Raigad", lat: 18.52, lng: 73.18, leakage: 2500, wasteGen: 18000, coastal: true, risk: "medium" },
  { district: "Ratnagiri", lat: 17.00, lng: 73.30, leakage: 1300, wasteGen: 9000, coastal: true, risk: "low" },
  
  // Gujarat
  { district: "Ahmedabad", lat: 23.02, lng: 72.57, leakage: 16800, wasteGen: 125000, coastal: false, risk: "critical" },
  { district: "Surat", lat: 21.17, lng: 72.83, leakage: 12500, wasteGen: 92000, coastal: true, risk: "critical" },
  { district: "Bhavnagar", lat: 21.77, lng: 72.15, leakage: 3100, wasteGen: 22000, coastal: true, risk: "high" },
  { district: "Jamnagar", lat: 22.47, lng: 70.06, leakage: 2100, wasteGen: 15000, coastal: true, risk: "medium" },
  { district: "Kutch", lat: 23.20, lng: 69.67, leakage: 1800, wasteGen: 13000, coastal: true, risk: "low" },
  
  // River-linked inland high-leakage districts
  { district: "Patna", lat: 25.59, lng: 85.14, leakage: 14800, wasteGen: 105000, coastal: false, risk: "critical" },
  { district: "Varanasi", lat: 25.32, lng: 83.01, leakage: 7800, wasteGen: 55000, coastal: false, risk: "high" },
  { district: "Allahabad", lat: 25.44, lng: 81.85, leakage: 6200, wasteGen: 44000, coastal: false, risk: "high" },
  { district: "Kanpur", lat: 26.45, lng: 80.33, leakage: 11200, wasteGen: 80000, coastal: false, risk: "critical" },
  { district: "Delhi", lat: 28.61, lng: 77.23, leakage: 28000, wasteGen: 210000, coastal: false, risk: "critical" }
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
