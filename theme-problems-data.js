// This file contains all the theme problems data
// Copy this content to replace the themeProblems object in script.js

const themeProblemsData = {
    2: {
        title: "Green Technology & Environmental Monitoring",
        problems: [
            {
                title: "Portable Air Quality Station",
                context: "Campus and city air pollution lacks real-time local monitoring.",
                solution: "ESP32 with MQ135 and DHT22, solar panel power, web dashboard for AQI trends.",
                prototype: "Handheld unit displaying AQI, uploading to public map.",
                type: "Hardware + Software"
            },
            {
                title: "Soil Moisture Alert for Gardens",
                context: "Overwatering harms plants in community green spaces.",
                solution: "Soil sensor and pump relay on ESP32, app for irrigation scheduling.",
                prototype: "Auto-water on dry soil, moisture graph on dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Water Quality Tester",
                context: "Contaminated campus water sources risk health.",
                solution: "pH and turbidity sensors on Arduino, buzzer for unsafe levels, mobile log.",
                prototype: "Test sample, show safe/unsafe on app with history.",
                type: "Hardware + Software"
            },
            {
                title: "Solar Panel Efficiency Tracker",
                context: "Rooftop solar setups underperform without monitoring.",
                solution: "Current/voltage sensors on ESP32, dashboard predicting output.",
                prototype: "Simulate panel, display efficiency and faults.",
                type: "Hardware + Software"
            },
            {
                title: "Rainwater Harvesting Monitor",
                context: "Inefficient rooftop collection leads to wastage.",
                solution: "Ultrasonic level sensor in tank, overflow alert via app.",
                prototype: "Tank model filling, app notifying storage levels.",
                type: "Hardware + Software"
            },
            {
                title: "CO₂ Level Detector for Greenhouses",
                context: "Poor ventilation spikes CO2 in small farms.",
                solution: "MH-Z19 CO2 sensor on ESP32, fan auto-trigger, ventilation dashboard.",
                prototype: "Detect high CO2, activate fan, log on web.",
                type: "Hardware + Software"
            },
            {
                title: "Wind Speed Alert System",
                context: "Farmers need early storm warnings for crop protection.",
                solution: "Anemometer on Arduino, threshold alerts to phone.",
                prototype: "Fan-simulated wind, speed display and SMS alert.",
                type: "Hardware + Software"
            },
            {
                title: "Microplastic Water Detector",
                context: "River pollution undetected in local sources.",
                solution: "Basic turbidity/filter sensor on ESP32, count estimator app.",
                prototype: "Test dirty water, quantify particles on dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Battery Health Monitor for Renewables",
                context: "Solar batteries degrade without tracking.",
                solution: "Voltage/current sensors, ESP32 predicting lifespan via simple rules.",
                prototype: "Charge/discharge cycle demo, health % on app.",
                type: "Hardware + Software"
            },
            {
                title: "Forest Fire Risk Scanner",
                context: "Dry areas prone to fires lack early detection.",
                solution: "Flame sensor and temp on ESP32 drone-mount sim, alert map.",
                prototype: "Heat source trigger, location ping on dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Humidity-Based Ventilation",
                context: "Mold growth in storage from high humidity.",
                solution: "DHT22 on ESP32 controlling exhaust fan, trend logs.",
                prototype: "High humidity auto-vent, graph on web.",
                type: "Hardware + Software"
            },
            {
                title: "UV Index Monitor",
                context: "Outdoor workers exposed without warnings.",
                solution: "UV sensor on Arduino, app sunscreen reminders.",
                prototype: "Sunlight sim, index alert on phone.",
                type: "Hardware + Software"
            }
        ]
    }
};
