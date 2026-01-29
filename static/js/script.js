/**
 * FORGIA 2026 - Interactive JavaScript
 * A Makeathon × Project Expo Experience
 */

// ========== THEME PROBLEM STATEMENTS MODAL ==========
const themeProblems = {
    1: {
        title: "Smart & Sustainable Living",
        problems: [
            {
                title: "Smart Waste Bin Monitor",
                context: "Urban households struggle with irregular waste collection, leading to overflows and poor segregation.",
                solution: "Build an IoT bin using ESP32, ultrasonic sensor for fill level, and color sensor for segregation type, linked to a web dashboard for collection alerts.",
                prototype: "Working bin model alerting via app when 80% full, showing segregation stats on dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Energy-Saving Room Controller",
                context: "High electricity bills in homes from forgotten lights and fans waste energy amid rising costs.",
                solution: "Create ESP32 with PIR motion sensor and relay to auto-control lights/fans, plus a simple app for manual override and usage logs.",
                prototype: "Demo room setup toggling appliances on motion, showing daily savings on phone dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Water Usage Tracker",
                context: "Households overuse water due to leaks and inefficient taps, straining urban supplies.",
                solution: "Develop flow sensor on ESP32 to monitor tap usage, buzzer for leaks, and dashboard for consumption graphs.",
                prototype: "Simulated tap detecting flow anomalies, app displaying hourly usage with alerts.",
                type: "Hardware + Software"
            },
            {
                title: "Smart Recycling Incentive System",
                context: "Low recycling rates in communities due to lack of motivation and tracking.",
                solution: "Build scale with load cell on Arduino, QR scanner for item ID, app awarding points redeemable via dashboard.",
                prototype: "Weigh and scan recyclables, update user points on web leaderboard.",
                type: "Hardware + Software"
            },
            {
                title: "Home Air Quality Alert",
                context: "Indoor pollution from cooking affects family health in dense urban homes.",
                solution: "Use MQ135 gas sensor and DHT22 on ESP32 to measure AQI, fan relay trigger, and mobile alerts via dashboard.",
                prototype: "Sensor detecting smoke, auto-activating fan, real-time AQI on app.",
                type: "Hardware + Software"
            },
            {
                title: "Automated Compost Monitor",
                context: "Backyard composting fails from improper moisture and temperature control.",
                solution: "ESP32 with soil moisture and temp sensors, servo for aeration, simple web log for compost status.",
                prototype: "Bin adjusting moisture levels, dashboard showing readiness progress.",
                type: "Hardware + Software"
            },
            {
                title: "Leak Detection for Pipes",
                context: "Undetected pipe leaks cause water wastage and structural damage in apartments.",
                solution: "Vibration sensor and water detector on ESP32, buzzer alert, app notification with location map.",
                prototype: "Simulate leak triggering alerts on phone dashboard.",
                type: "Hardware + Software"
            },
            {
                title: "Smart Fridge Inventory",
                context: "Food wastage from forgotten items in household fridges burdens families.",
                solution: "ESP32 with camera module for item detection via basic image recog, app inventory list with expiry alerts.",
                prototype: "Scan fridge contents, list items on dashboard with reminders.",
                type: "Hardware + Software"
            },
            {
                title: "Neighborhood Noise Monitor",
                context: "Noise pollution disrupts sleep in crowded residential areas.",
                solution: "Sound sensor on ESP32 measuring dB levels, LED indicators, community dashboard for complaints.",
                prototype: "Alert at 70dB threshold, log peaks on web map.",
                type: "Hardware + Software"
            },
            {
                title: "EV Charging Spot Finder",
                context: "Limited public EV spots cause range anxiety in sustainable urban mobility.",
                solution: "ESP32 with current sensor for availability, Bluetooth beacon, app map showing nearest free spots.",
                prototype: "Simulate spots, app updating status in real-time.",
                type: "Hardware + Software"
            },
            {
                title: "Plastic Waste Sorter",
                context: "Mixed plastic waste hinders recycling in community bins.",
                solution: "IR sensors and servo sorter on Arduino, app for sorted volume stats.",
                prototype: "Drop plastics, auto-sort by type, dashboard report.",
                type: "Hardware + Software"
            },
            {
                title: "Sustainable Lighting System",
                context: "Overlit common areas waste power in apartments.",
                solution: "LDR and PIR on ESP32 controlling LED strips, group dashboard for schedules.",
                prototype: "Lights dimming on no motion, usage chart on app.",
                type: "Hardware + Software"
            }
        ]
    },
    2: {
        title: "Green Technology & Environmental Monitoring",
        problems: [
            {title: "Portable Air Quality Station", context: "Campus and city air pollution lacks real-time local monitoring.", solution: "ESP32 with MQ135 and DHT22, solar panel power, web dashboard for AQI trends.", prototype: "Handheld unit displaying AQI, uploading to public map.", type: "Hardware + Software"},
            {title: "Soil Moisture Alert for Gardens", context: "Overwatering harms plants in community green spaces.", solution: "Soil sensor and pump relay on ESP32, app for irrigation scheduling.", prototype: "Auto-water on dry soil, moisture graph on dashboard.", type: "Hardware + Software"},
            {title: "Water Quality Tester", context: "Contaminated campus water sources risk health.", solution: "pH and turbidity sensors on Arduino, buzzer for unsafe levels, mobile log.", prototype: "Test sample, show safe/unsafe on app with history.", type: "Hardware + Software"},
            {title: "Solar Panel Efficiency Tracker", context: "Rooftop solar setups underperform without monitoring.", solution: "Current/voltage sensors on ESP32, dashboard predicting output.", prototype: "Simulate panel, display efficiency and faults.", type: "Hardware + Software"},
            {title: "Rainwater Harvesting Monitor", context: "Inefficient rooftop collection leads to wastage.", solution: "Ultrasonic level sensor in tank, overflow alert via app.", prototype: "Tank model filling, app notifying storage levels.", type: "Hardware + Software"},
            {title: "CO₂ Level Detector for Greenhouses", context: "Poor ventilation spikes CO2 in small farms.", solution: "MH-Z19 CO2 sensor on ESP32, fan auto-trigger, ventilation dashboard.", prototype: "Detect high CO2, activate fan, log on web.", type: "Hardware + Software"},
            {title: "Wind Speed Alert System", context: "Farmers need early storm warnings for crop protection.", solution: "Anemometer on Arduino, threshold alerts to phone.", prototype: "Fan-simulated wind, speed display and SMS alert.", type: "Hardware + Software"},
            {title: "Microplastic Water Detector", context: "River pollution undetected in local sources.", solution: "Basic turbidity/filter sensor on ESP32, count estimator app.", prototype: "Test dirty water, quantify particles on dashboard.", type: "Hardware + Software"},
            {title: "Battery Health Monitor for Renewables", context: "Solar batteries degrade without tracking.", solution: "Voltage/current sensors, ESP32 predicting lifespan via simple rules.", prototype: "Charge/discharge cycle demo, health % on app.", type: "Hardware + Software"},
            {title: "Forest Fire Risk Scanner", context: "Dry areas prone to fires lack early detection.", solution: "Flame sensor and temp on ESP32 drone-mount sim, alert map.", prototype: "Heat source trigger, location ping on dashboard.", type: "Hardware + Software"},
            {title: "Humidity-Based Ventilation", context: "Mold growth in storage from high humidity.", solution: "DHT22 on ESP32 controlling exhaust fan, trend logs.", prototype: "High humidity auto-vent, graph on web.", type: "Hardware + Software"},
            {title: "UV Index Monitor", context: "Outdoor workers exposed without warnings.", solution: "UV sensor on Arduino, app sunscreen reminders.", prototype: "Sunlight sim, index alert on phone.", type: "Hardware + Software"}
        ]
    },
    3: {
        title: "Smart Infrastructure & Built Environment",
        problems: [
            {title: "Smart Parking Spot Detector", context: "Campus parking chaos wastes time and fuel.", solution: "IR sensors per spot on ESP32 hub, app showing free slots map.", prototype: "4-spot model, real-time availability on dashboard.", type: "Hardware + Software"},
            {title: "Bridge Load Monitor", context: "Pedestrian bridges overload risks unnoticed.", solution: "Load cells under model bridge, ESP32 alert over limit.", prototype: "Add weights, buzzer and app warning at 80kg.", type: "Hardware + Software"},
            {title: "Street Light Automator", context: "Wasted power from always-on street lights.", solution: "LDR/PIR on ESP32 per light, group control dashboard.", prototype: "Light model dimming on dark/no motion.", type: "Hardware + Software"},
            {title: "Building Vibration Detector", context: "Earthquake-prone structures need early alerts.", solution: "Accelerometer on ESP32, threshold SMS to occupants.", prototype: "Shake sim, severity levels on app.", type: "Hardware + Software"},
            {title: "Traffic Flow Counter", context: "Road congestion unmanaged at campus gates.", solution: "IR beam break counters on Arduino, density dashboard.", prototype: "Vehicle sim passing, count/peak hours graph.", type: "Hardware + Software"},
            {title: "Elevator Overload Preventer", context: "Overcrowded lifts risk safety.", solution: "Load cells in floor model, door lock relay via ESP32.", prototype: "Add weights, prevent 'door close' over limit.", type: "Hardware + Software"},
            {title: "Flood Level Warner", context: "Low-lying areas flood without warning.", solution: "Ultrasonic water level on ESP32 pole, siren and app map.", prototype: "Pour water, rising alerts on dashboard.", type: "Hardware + Software"},
            {title: "Infrastructure Crack Detector", context: "Building cracks worsen undetected.", solution: "Strain gauge on Arduino, progressive alert system.", prototype: "Flex model, crack width log on web.", type: "Hardware + Software"},
            {title: "Smart Water Pump Controller", context: "Overhead tanks overflow wasting water.", solution: "Level sensors top/bottom, auto-pump via relay app.", prototype: "Tank fill sim, pump toggle on low.", type: "Hardware + Software"},
            {title: "Road Pothole Mapper", context: "Potholes damage vehicles unreported.", solution: "Accelerometer on bike-mount ESP32, GPS app mapping.", prototype: "Bump sim, plot locations on dashboard.", type: "Hardware + Software"},
            {title: "HVAC Energy Optimizer", context: "AC overuse spikes campus bills.", solution: "Temp sensors zones, ESP32 scheduling dashboard.", prototype: "Multi-room sim, auto-adjust based on occupancy.", type: "Hardware + Software"},
            {title: "Construction Dust Monitor", context: "Site dust pollutes nearby areas.", solution: "Dust sensor PM2.5 on ESP32, mist spray trigger.", prototype: "Fan dust sim, auto-activate 'sprayer'.", type: "Hardware + Software"}
        ]
    },
    4: {
        title: "Human-Centric Technology & Accessibility",
        problems: [
            {title: "Fall Detection Wearable", context: "Elderly falls go unnoticed delaying aid.", solution: "Accelerometer on ESP32 wristband, SOS buzzer/app alert.", prototype: "Tilt/shake trigger, location share demo.", type: "Hardware + Software"},
            {title: "Smart Pill Dispenser", context: "Medication non-compliance worsens chronic illnesses.", solution: "Servo dispenser on Arduino, time-based app reminders.", prototype: "Box dispensing at set times, compliance log.", type: "Hardware + Software"},
            {title: "Blind Navigation Aid", context: "Visually impaired face obstacle hazards.", solution: "Ultrasonic cane on ESP32, vibration alerts, voice GPS.", prototype: "Obstacle beep/vibe, direction guide on speaker.", type: "Hardware + Software"},
            {title: "Heart Rate Alert Band", context: "Sudden irregularities undetected in vulnerable groups.", solution: "Pulse sensor on ESP32, threshold alert to guardian app.", prototype: "Finger sim abnormal rate, emergency ping.", type: "Hardware + Software"},
            {title: "Sign Language Translator", context: "Hearing impaired communication barriers in services.", solution: "Flex sensors glove to ESP32, basic gesture-to-text app.", prototype: "Gesture input, display translated words.", type: "Hardware + Software"},
            {title: "Wheelchair Obstacle Avoider", context: "Uneven paths challenge mobility.", solution: "Ultrasonic front sensors, motor pause on ESP32.", prototype: "Model chair stopping pre-collision.", type: "Hardware + Software"},
            {title: "Voice-Controlled Home Aid", context: "Disabled users need hands-free controls.", solution: "ESP32 mic simple commands for lights/doors via relay.", prototype: "Voice 'light on', appliance toggle.", type: "Hardware + Software"},
            {title: "Posture Corrector Vest", context: "Poor posture causes back pain in students.", solution: "Flex sensor back, vibe alert on slouch via Arduino.", prototype: "Bend trigger, correction buzz.", type: "Hardware + Software"},
            {title: "Braille Reader Device", context: "Printed text inaccessible to blind.", solution: "Camera OCR to vibration motors on glove ESP32.", prototype: "Scan text, haptic letter feedback.", type: "Hardware + Software"},
            {title: "Emergency Panic Button", context: "Women safety in public spaces lacks quick response.", solution: "ESP32 button with GPS, auto-alert contacts/location.", prototype: "Press send SOS with map pin.", type: "Hardware + Software"},
            {title: "Infant Temperature Monitor", context: "Fever spikes need instant parental alerts.", solution: "Skin temp sensor patch ESP32, app threshold push.", prototype: "Heat sim, instant notification.", type: "Hardware + Software"},
            {title: "Driver Fatigue Alert System", context: "Long drives risk drowsy accidents.", solution: "Eye blink cam or gyro on ESP32 dash, horn trigger.", prototype: "Head nod sim, loud alert.", type: "Hardware + Software"}
        ]
    },
    5: {
        title: "Smart Systems for Education & Campus Life",
        problems: [
            {title: "Attendance Tracker Booth", context: "Manual roll calls waste class time.", solution: "RFID/QR scanner on ESP32 kiosk, real-time dashboard.", prototype: "Scan card, mark present on class list.", type: "Hardware + Software"},
            {title: "Library Book Finder", context: "Lost books delay student access.", solution: "RFID tags with ESP32 locators, app shelf map.", prototype: "Place 'book', app shows position.", type: "Hardware + Software"},
            {title: "Lab Equipment Booker", context: "Overbooking causes lab conflicts.", solution: "QR on gear to ESP32, slot booking dashboard.", prototype: "Scan reserve, availability calendar.", type: "Hardware + Software"},
            {title: "Canteen Queue Manager", context: "Long lines frustrate during breaks.", solution: "IR counter ESP32, token dispenser, wait-time app.", prototype: "Pass sim, estimated time display.", type: "Hardware + Software"},
            {title: "Study Room Occupancy Monitor", context: "Rooms taken without visibility.", solution: "Door PIR sensors hub, free room app map.", prototype: "Enter/exit, update room status.", type: "Hardware + Software"},
            {title: "Event Crowd Counter", context: "Safety risks from overcrowding.", solution: "Overhead IR gates on Arduino, capacity alert.", prototype: "Gate passes, dashboard nearing limit.", type: "Hardware + Software"},
            {title: "Whiteboard Usage Logger", context: "No record of class notes.", solution: "Camera snap on button ESP32, cloud gallery app.", prototype: "Capture board, store/share images.", type: "Hardware + Software"},
            {title: "Campus Shuttle Tracker", context: "Unpredictable bus timings.", solution: "GPS on ESP32 bus model, live location app.", prototype: "Move 'bus', ETA on student dashboard.", type: "Hardware + Software"},
            {title: "Sports Ground Booker", context: "Double-bookings spoil games.", solution: "RFID gate check-in, usage calendar web.", prototype: "Swipe access, booked slots show.", type: "Hardware + Software"},
            {title: "Hostel Power Monitor", context: "Wastage from unused appliances.", solution: "Plug current sensors, room-wise dashboard.", prototype: "Load sim, per-room consumption graph.", type: "Hardware + Software"},
            {title: "Feedback Kiosk", context: "Slow prof feedback collection.", solution: "Touch buttons or QR on ESP32, anon dashboard.", prototype: "Rate submit, avg scores live.", type: "Hardware + Software"},
            {title: "Printer Queue Manager", context: "Paper jams from unmanaged prints.", solution: "RFID user auth ESP32, job status app.", prototype: "Auth print, queue position show.", type: "Hardware + Software"}
        ]
    },
    6: {
        title: "Data-Driven Systems & Digital Intelligence",
        problems: [
            {title: "Real-Time Poll System", context: "Classroom polls lack instant analytics.", solution: "QR join via phone, ESP32 hub tally dashboard.", prototype: "Vote submit, live pie chart.", type: "Hardware + Software"},
            {title: "Asset Tracker for Labs", context: "Equipment misplaced frequently.", solution: "ESP32 beacons on items, finder app heatmap.", prototype: "Move tags, signal strength map.", type: "Hardware + Software"},
            {title: "Visitor Management Gate", context: "Unauthorized campus entry risks security.", solution: "QR temp pass scanner ESP32, entry log dashboard.", prototype: "Scan approve/deny, visitor list.", type: "Hardware + Software"},
            {title: "Energy Consumption Analyzer", context: "No insights into campus power peaks.", solution: "CT clamps on mains ESP32, anomaly detection app.", prototype: "Load vary, spike alerts/graph.", type: "Hardware + Software"},
            {title: "Feedback Analytics Booth", context: "Event surveys unstructured.", solution: "Buttons for ratings ESP32, sentiment trend dashboard.", prototype: "Rate event, word cloud generate.", type: "Hardware + Software"},
            {title: "Queue Length Estimator", context: "Cafeteria waits unoptimized.", solution: "Camera count or IR ESP32, avg wait predictor.", prototype: "Line sim, time forecast.", type: "Hardware + Software"},
            {title: "Document Scanner Station", context: "Manual uploads slow submissions.", solution: "Camera ESP32 OCR, cloud upload dashboard.", prototype: "Scan paper, text extract/store.", type: "Hardware + Software"},
            {title: "Noise Complaint Mapper", context: "Campus noise sources unidentified.", solution: "Distributed mics ESP32 net, hotspot dashboard map.", prototype: "Sound play, loudest area highlight.", type: "Hardware + Software"},
            {title: "Maintenance Request Tracker", context: "Repair delays from poor logging.", solution: "QR on assets to ESP32 kiosk, priority dashboard.", prototype: "Scan report, status update.", type: "Hardware + Software"},
            {title: "Water Usage Predictor", context: "Fountains/coolers waste without forecasts.", solution: "Flow sensors ESP32, usage pattern app forecast.", prototype: "Usage log, next-hour predict.", type: "Hardware + Software"},
            {title: "Lost & Found Locator", context: "Items unclaimed due to no tracking.", solution: "RFID drop box ESP32, claim via app photo match.", prototype: "Drop item, notify matcher.", type: "Hardware + Software"},
            {title: "Classroom Utilization Tracker", context: "Empty rooms underutilized.", solution: "Door PIRs ESP32, booking optimizer dashboard.", prototype: "Occupancy toggle, free slot suggest.", type: "Hardware + Software"}
        ]
    }
};

function openThemeModal(themeId) {
    const modal = document.getElementById('themeModal');
    const title = document.getElementById('themeModalTitle');
    const problemsContainer = document.getElementById('themeModalProblems');
    
    if (!modal || !title || !problemsContainer) return;
    
    const theme = themeProblems[themeId];
    if (!theme) return;
    
    // Set title
    title.textContent = theme.title;
    
    // Clear and populate problems
    problemsContainer.innerHTML = '';
    theme.problems.forEach((problem, index) => {
        const psNumber = (index + 1).toString().padStart(2, '0');
        const psId = `PS${themeId}${psNumber}`;
        
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-item';
        problemDiv.innerHTML = `
            <div class="problem-header" onclick="toggleProblemDetails(this)">
                <span class="problem-id">${psId}</span>
                <span class="problem-title-text">${problem.title}</span>
                <span class="problem-expand-icon">▼</span>
            </div>
            <div class="problem-details">
                <p class="problem-context"><strong>Context:</strong> ${problem.context}</p>
                <p class="problem-solution"><strong>Solution:</strong> ${problem.solution}</p>
                <p class="problem-prototype"><strong>Expected prototype:</strong> ${problem.prototype}</p>
                <p class="problem-type"><span class="type-badge">${problem.type}</span></p>
            </div>
        `;
        problemsContainer.appendChild(problemDiv);
    });
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function searchAllProblems() {
    const searchInput = document.getElementById('problemSearch');
    const filterValue = searchInput.value.toLowerCase().trim();
    
    if (filterValue.length === 0) {
        closeSearchModal();
        return;
    }
    
    const resultsModal = document.getElementById('searchResultsModal');
    const resultsContainer = document.getElementById('searchResultsContainer');
    let resultsHTML = '';
    let foundCount = 0;
    
    // Search through all themes
    Object.keys(themeProblems).forEach(themeId => {
        const theme = themeProblems[themeId];
        
        theme.problems.forEach((problem, index) => {
            const psNumber = (index + 1).toString().padStart(2, '0');
            const psId = `PS${themeId}${psNumber}`;
            const searchText = `${psId} ${problem.title} ${problem.context} ${problem.solution} ${problem.prototype} ${problem.type}`.toLowerCase();
            
            if (searchText.includes(filterValue)) {
                foundCount++;
                resultsHTML += `
                    <div class="problem-item">
                        <div class="problem-header">
                            <div class="problem-number-wrapper">
                                <span class="problem-id">${psId}</span>
                                <span class="problem-theme-badge">Theme ${themeId}: ${theme.title}</span>
                            </div>
                            <button class="problem-toggle" onclick="toggleProblemDetails(this)">
                                <span class="problem-title-text">${problem.title}</span>
                                <svg class="problem-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="problem-details">
                            <div class="problem-detail-section">
                                <h4>Context</h4>
                                <p>${problem.context}</p>
                            </div>
                            <div class="problem-detail-section">
                                <h4>Solution Focus</h4>
                                <p>${problem.solution}</p>
                            </div>
                            <div class="problem-detail-section">
                                <h4>Prototype Suggestion</h4>
                                <p>${problem.prototype}</p>
                            </div>
                            <div class="problem-detail-section">
                                <h4>Project Type</h4>
                                <p>${problem.type}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    });
    
    if (foundCount === 0) {
        resultsHTML = '<div class="no-results"><p>No problem statements found matching your search.</p></div>';
    }
    
    resultsContainer.innerHTML = resultsHTML;
    resultsModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSearchModal() {
    const modal = document.getElementById('searchResultsModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function toggleProblemDetails(header) {
    const problemItem = header.closest('.problem-item');
    const details = problemItem.querySelector('.problem-details');
    const icon = problemItem.querySelector('.problem-expand-icon');
    
    problemItem.classList.toggle('expanded');
    
    if (problemItem.classList.contains('expanded')) {
        details.style.maxHeight = details.scrollHeight + 'px';
        icon.textContent = '▲';
    } else {
        details.style.maxHeight = '0';
        icon.textContent = '▼';
    }
}

function closeThemeModal() {
    const modal = document.getElementById('themeModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Close modal on outside click
if (document.getElementById('themeModal')) {
    document.getElementById('themeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeThemeModal();
        }
    });
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeThemeModal();
    }
});

// ========================================
// REMOVABLE FEATURES - Easy to Delete/Comment
// ========================================

/**
 * REPUBLIC DAY BACKGROUND MUSIC (REMOVABLE)
 * To remove: Comment out or delete this entire section
 */
let musicPlaying = false;
const republicMusic = document.getElementById('republicDayMusic');
const playStatusCheckbox = document.getElementById('playStatus');
const progressBar = document.getElementById('musicProgressBar');
const currentTimeSpan = document.querySelector('.music-time-current');
const totalTimeSpan = document.querySelector('.music-time-total');

// Format time helper
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Auto-play music when page loads with multiple attempts
function startMusic() {
    if (!republicMusic) return;
    
    republicMusic.volume = 0.7; // Set volume to 70%
    republicMusic.play().then(() => {
        musicPlaying = true;
        if (playStatusCheckbox) playStatusCheckbox.checked = true;
    }).catch((error) => {
        // Auto-play was prevented, try again on first user interaction
        console.log('Auto-play prevented, will try on first interaction');
        musicPlaying = false;
        if (playStatusCheckbox) playStatusCheckbox.checked = false;
        
        // Try to play on any user interaction
        document.addEventListener('click', function playOnClick() {
            republicMusic.play().then(() => {
                musicPlaying = true;
                if (playStatusCheckbox) playStatusCheckbox.checked = true;
                document.removeEventListener('click', playOnClick);
            }).catch(e => console.log('Playback failed:', e));
        }, { once: true });
    });
}

// Start music immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMusic);
} else {
    startMusic();
}

// Also try on window load
window.addEventListener('load', startMusic);

// Update progress bar and time
if (republicMusic) {
    republicMusic.addEventListener('loadedmetadata', () => {
        if (totalTimeSpan) totalTimeSpan.textContent = formatTime(republicMusic.duration);
        if (progressBar) progressBar.max = republicMusic.duration;
    });
    
    republicMusic.addEventListener('timeupdate', () => {
        if (currentTimeSpan) currentTimeSpan.textContent = formatTime(republicMusic.currentTime);
        if (progressBar) progressBar.value = republicMusic.currentTime;
    });
}

// Progress bar seek
if (progressBar) {
    progressBar.addEventListener('input', (e) => {
        if (republicMusic) {
            republicMusic.currentTime = e.target.value;
        }
    });
}

// Play/Pause toggle
if (playStatusCheckbox) {
    playStatusCheckbox.addEventListener('change', (e) => {
        if (!republicMusic) return;
        
        if (e.target.checked) {
            republicMusic.play().then(() => {
                musicPlaying = true;
            }).catch(error => {
                console.log('Playback failed:', error);
                e.target.checked = false;
            });
        } else {
            republicMusic.pause();
            musicPlaying = false;
        }
    });
}

// Skip forward (10 seconds)
function skipForward() {
    if (republicMusic) {
        republicMusic.currentTime = Math.min(republicMusic.currentTime + 10, republicMusic.duration);
    }
}

// Skip backward (10 seconds)
function skipBackward() {
    if (republicMusic) {
        republicMusic.currentTime = Math.max(republicMusic.currentTime - 10, 0);
    }
}

/**
 * PAGE LOADER (REMOVABLE)
 * To remove: Comment out or delete this entire section
 */
window.addEventListener('load', () => {
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

/**
 * REGISTRATION CLOSED POPUP
 */
function showRegistrationClosedPopup() {
    const popup = document.getElementById('registrationClosedPopup');
    if (!popup) return;
    
    // Check if user has closed it before in this session
    const popupClosed = sessionStorage.getItem('registrationClosedPopupClosed');
    if (popupClosed === 'true') return;
    
    // Show popup after 2 seconds
    setTimeout(() => {
        popup.classList.add('show');
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            closeRegistrationPopup();
        }, 10000);
    }, 2000);
}

function closeRegistrationPopup() {
    const popup = document.getElementById('registrationClosedPopup');
    if (popup) {
        popup.classList.remove('show');
        sessionStorage.setItem('registrationClosedPopupClosed', 'true');
    }
}

// Deadline notification removed - registrations are closed

/**
 * ENTREPIX REDIRECT WITH LOADER (REMOVABLE)
 * To remove: Comment out or delete this entire function
 */
function redirectToEntrepix() {
    // Show loader
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        pageLoader.style.display = 'flex';
        pageLoader.classList.remove('hidden');
    }
    
    // Redirect after short delay
    setTimeout(() => {
        window.open('https://ici-club.github.io/Entrepix/', '_blank');
        
        // Hide loader
        if (pageLoader) {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }
    }, 800);
}

/**
 * REGISTRATION CLOSED ALERT
 */
function addRegistrationClosedAlerts() {
    const registerButtons = document.querySelectorAll('a[href*="#register"], .hero-register-btn');
    
    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            alert('🚫 Registrations are Closed\n\nRegistration deadline has passed. For inquiries about available seats or other questions, please contact the event coordinators listed in the Contact section.');
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// END REMOVABLE FEATURES
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initScrollEffects();
    initRevealAnimations();
    initThemeCards();
    initSmoothScroll();
    initParallaxEffects();
    initButtonCountdown(); // Button countdown timer
    
    // Initialize registration closed features
    showRegistrationClosedPopup(); // Show registration closed notification
    addRegistrationClosedAlerts(); // Add alerts to registration buttons
});

/**
 * Button Countdown Timer
 * Counts down to January 31, 2026 at 9:00 AM
 */
function initButtonCountdown() {
    // Event date: January 31, 2026, 9:00 AM
    const eventDate = new Date('January 31, 2026 09:00:00').getTime();
    
    function updateButtonCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('btnCountdown').innerHTML = '<span style="font-size: 0.65rem;">Event Started!</span>';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update DOM elements
        const daysEl = document.getElementById('btnDays');
        const hoursEl = document.getElementById('btnHours');
        const minutesEl = document.getElementById('btnMinutes');
        const secondsEl = document.getElementById('btnSeconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update immediately and then every second
    updateButtonCountdown();
    setInterval(updateButtonCountdown, 1000);
}

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const scrollY = window.scrollY;
        
        // Add/remove scrolled class
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
}

/**
 * Scroll-triggered effects
 */
function initScrollEffects() {
    // Parallax for floating shapes
    const shapes = document.querySelectorAll('.shape');
    const blobs = document.querySelectorAll('.blob');

    function handleParallax() {
        const scrollY = window.scrollY;
        
        shapes.forEach((shape, index) => {
            const speed = 0.05 + (index * 0.02);
            const yPos = scrollY * speed;
            shape.style.transform = `translateY(${yPos}px) rotate(${scrollY * 0.02}deg)`;
        });

        blobs.forEach((blob, index) => {
            const speed = 0.02 + (index * 0.01);
            const yPos = scrollY * speed;
            blob.style.transform = `translate(${index % 2 === 0 ? yPos : -yPos}px, ${yPos}px)`;
        });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Reveal animations on scroll
 */
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-header, .feature-item, .date-card, .timeline-item, ' +
        '.expo-feature, .theme-card, .criteria-item, .evaluator-item, ' +
        '.contact-card, .org-card, .about-lead, .about-visual, ' +
        '.expo-learning, .register-wrapper, .visual-card, .coordinator-card'
    );

    // Add reveal class to elements
    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    // Intersection Observer for reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Add stagger effect for grid items
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                siblings.forEach((sibling, index) => {
                    sibling.style.transitionDelay = `${index * 0.1}s`;
                });
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Theme cards interactive effects
 */
function initThemeCards() {
    const themeCards = document.querySelectorAll('.theme-card');

    themeCards.forEach(card => {
        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            
            // Move glow
            const glow = card.querySelector('.theme-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 107, 53, 0.15), transparent 70%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effects for various elements
 */
function initParallaxEffects() {
    // Hero content subtle parallax
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    function handleHeroParallax() {
        const scrollY = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrollY < heroHeight) {
            const opacity = 1 - (scrollY / heroHeight) * 1.5;
            const translateY = scrollY * 0.3;
            
            if (heroContent) {
                heroContent.style.opacity = Math.max(opacity, 0);
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
        }
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleHeroParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Info cards hover effect
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Timeline items stagger animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
}

/**
 * Cursor effects (optional, for desktop)
 */
function initCursorEffects() {
    if (window.matchMedia('(pointer: fine)').matches) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, .theme-card, .feature-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
        });
    }
}

/**
 * Counter animation for stats
 */
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateCounter(target, 0, finalValue, 1500);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(num => observer.observe(num));
}

function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(start + range * easeOut);
        
        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Preloader (optional)
 */
function initPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">FORGIA</div>
            <div class="preloader-bar">
                <div class="preloader-progress"></div>
            </div>
        </div>
    `;
    document.body.prepend(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
            setTimeout(() => preloader.remove(), 500);
        }, 500);
    });
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Handle window resize
 */
window.addEventListener('resize', debounce(() => {
    // Recalculate any dimension-dependent values
    const navMenu = document.getElementById('navMenu');
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.getElementById('navToggle').classList.remove('active');
        document.body.style.overflow = '';
    }
}, 250));

/**
 * Keyboard accessibility
 */
document.addEventListener('keydown', (e) => {
    // ESC closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Initialize counter animation after DOM load
document.addEventListener('DOMContentLoaded', initCounterAnimation);
