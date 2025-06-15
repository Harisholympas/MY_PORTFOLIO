const projects = [
    {
        id: 1,
        title: "Intelligent Traffic Management System",
        description: "YOLO-based dynamic signal control using Raspberry Pi, sensors, and adaptive logic to reduce congestion.",
        category: "Computer Vision",
        image: "🚦",
        detailedDescription: "An AI-driven system using YOLO for vehicle detection and Raspberry Pi for traffic light control. It dynamically manages traffic flow by analyzing real-time data, optimizing signal timings to reduce queue lengths and wait times. Embedded in hardware with LED control and potential relay integration",
        technologies: ["Python", "YOLO", "Raspberry Pi", "OpenCV", "TensorFlow", "IoT Sensors"],
        features: [
            "Real-time vehicle detection and counting",
            "Dynamic signal timing optimization",
            "Emergency vehicle priority system",
            "Traffic density analysis and reporting",
            "Weather-adaptive signal control"
        ],
        impact: "Reduced average waiting time by 35% and improved traffic flow efficiency by 40% in test implementations."
    },
    {
        id: 2,
        title: "Telemedicine Kiosk for Rural India",
        description: "AI-driven health assistant with basic diagnostics and consultation features for remote locations.",
        category: "Healthcare AI",
        image: "🏥",
        detailedDescription: "A standalone kiosk system enabling remote medical consultation for underserved regions. It includes basic diagnostics, doctor video calls, and digital prescriptions. Designed to be low-cost, offline-capable, and integrated with rural healthcare centers.",
        technologies: ["React", "Node.js", "Machine Learning", "IoT Sensors", "WebRTC", "MongoDB"],
        features: [
            "AI-powered symptom checker",
            "Vital signs monitoring",
            "Video consultation with doctors",
            "Prescription management",
            "Health record digitization",
            "Multi-language support"
        ],
        impact: "Deployed in 15+ rural health centers, serving over 2000 patients monthly with 95% satisfaction rate."
    },
    {
        id: 3,
        title: "Autonomous Rover with Obstacle Avoidance",
        description: "Lidar + CV-based 4-motor rover to navigate intelligently in rough terrains.",
        category: "Robotics",
        image: "🤖",
        detailedDescription: "A Raspberry Pi-based rover with four individual wheel motors and a LiDAR module. Uses computer vision to detect and avoid obstacles. Depth estimation and adaptive wheel control allow it to autonomously navigate various terrains.",
        technologies: ["ROS", "Python", "LiDAR", "Computer Vision", "Arduino", "SLAM"],
        features: [
            "360-degree LiDAR mapping",
            "Real-time obstacle detection",
            "Terrain analysis and classification",
            "GPS-based navigation",
            "Remote monitoring dashboard",
            "Battery optimization system"
        ],
        impact: "Successfully navigated 50+ different terrain types with 98% obstacle avoidance accuracy."
    },
    {
        id: 4,
        title: "AI-Based Cloth Segregation",
        description: "Plastic vs cotton fabric classification using spectral sensor and suction-based sorting.",
        category: "Sustainability",
        image: "👕",
        detailedDescription: "Identifies different cloth types using AS7265 spectral sensor. Handles material with a suction system instead of grippers. Designed for textile recycling or automated laundry sorting where material-based separation is critical.",
        technologies: ["Python", "Spectral Analysis", "Machine Learning", "Arduino", "Computer Vision"],
        features: [
            "Spectral signature analysis",
            "Real-time fabric classification",
            "Automated sorting mechanism",
            "Quality control system",
            "Production analytics",
            "Error detection and correction"
        ],
        impact: "Achieved 92% accuracy in fabric classification and increased sorting efficiency by 300%."
    },
    {
        id: 5,
        title: "SolarAI: Intelligent Solar Panel Cleaning System",
        description: "AI monitors energy loss & automates cleaning using IoT & ML models.",
        category: "Green Tech",
        image: "☀️",
        detailedDescription: "Monitors panel performance using temperature and energy sensors. AI model compares real-time data with benchmarks to detect soiling. If underperformance is detected, it triggers automated/manual cleaning. Targeted at 1–50 MW solar farms in arid regions like Rajasthan.",
        technologies: ["IoT", "Machine Learning", "Python", "Solar Analytics", "Automated Robotics"],
        features: [
            "Real-time efficiency monitoring",
            "Predictive maintenance scheduling",
            "Automated cleaning robots",
            "Weather impact analysis",
            "Performance optimization",
            "Remote monitoring dashboard"
        ],
        impact: "Increased solar panel efficiency by 25% and reduced maintenance costs by 40%."
    },
    {
        id: 6,
        title: "Elephant Track Monitoring System",
        description: "AI + GPS-based alerting system to prevent train-elephant collisions in forest zones.",
        category: "Wildlife Conservation",
        image: "🐘",
        detailedDescription: "Designed for railway-elephant collision zones. Uses computer vision to detect elephants on tracks, activates horns to deter them, and sends real-time alerts. GPS collars on elephants enable continuous monitoring via a dashboard.",
        technologies: ["GPS Tracking", "Machine Learning", "IoT Sensors", "Mobile Apps", "Alert Systems"],
        features: [
            "Real-time elephant tracking",
            "Predictive movement analysis",
            "Automated train alert system",
            "Mobile app for forest officials",
            "Historical data analysis",
            "Emergency response coordination"
        ],
        impact: "Reduced train-elephant collisions by 80% in pilot zones and protected 200+ elephants."
    }
];

const categories = ["All", "Computer Vision", "Healthcare AI", "Robotics", "Sustainability", "Green Tech", "Wildlife Conservation"];
let currentTab = "All";
let currentView = "portfolio";

function createProjectCard(project) {
    return `
        <div class="project-card" onclick="showProjectDetail(${project.id})">
            <div class="card-glow"></div>
            <div class="card">
                <div class="card-image-container">
                    <div class="image-placeholder">${project.image}</div>
                    <div class="image-overlay"></div>
                </div>
                <div class="card-content">
                    <h2 class="card-title">${project.title}</h2>
                    <p class="card-description">${project.description}</p>
                    <span class="category-badge">${project.category}</span>
                </div>
            </div>
        </div>
    `;
}

function createProjectDetailPage(project) {
    return `
        <div class="project-detail" id="project-${project.id}">
            <button class="back-btn" onclick="showPortfolio()">← Back to Portfolio</button>
            
            <div class="project-hero">
                <h1>${project.title}</h1>
                <div class="category-badge">${project.category}</div>
                <div class="project-hero-image" style="font-size: 8rem; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #374151, #1f2937); border-radius: 1rem; margin: 2rem 0;">
                    ${project.image}
                </div>
            </div>

            <div class="project-section">
                <h2>Project Overview</h2>
                <p>${project.detailedDescription}</p>
            </div>

            <div class="project-section">
                <h2>Key Features</h2>
                ${project.features.map(feature => `<p>• ${feature}</p>`).join('')}
            </div>

            <div class="project-section">
                <h2>Technologies Used</h2>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
            </div>

            <div class="project-section">
                <h2>Impact & Results</h2>
                <p>${project.impact}</p>
            </div>
        </div>
    `;
}

function renderProjects(category) {
    const container = document.getElementById('project-grid');
    const filteredProjects = category === "All" ? projects : projects.filter(p => p.category === category);
    
    container.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
}

function renderProjectDetails() {
    const container = document.getElementById('project-details');
    container.innerHTML = projects.map(project => createProjectDetailPage(project)).join('');
}

function showProjectDetail(projectId) {
    document.getElementById('portfolio-view').style.display = 'none';
    
    // Hide all project details
    const allDetails = document.querySelectorAll('.project-detail');
    allDetails.forEach(detail => detail.classList.remove('active'));
    
    // Show selected project detail
    document.getElementById(`project-${projectId}`).classList.add('active');
    currentView = 'detail';
}

function showPortfolio() {
    document.getElementById('portfolio-view').style.display = 'block';
    
    // Hide all project details
    const allDetails = document.querySelectorAll('.project-detail');
    allDetails.forEach(detail => detail.classList.remove('active'));
    
    currentView = 'portfolio';
}

function handleTabClick(event) {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const clickedTab = event.target;
    const tabCategory = clickedTab.getAttribute('data-tab');

    // Remove active class from all tabs
    tabTriggers.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to clicked tab
    clickedTab.classList.add('active');

    // Update current tab and render projects
    currentTab = tabCategory;
    renderProjects(currentTab);
}

// Initialize the portfolio
function init() {
    // Add event listeners to tab triggers
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    tabTriggers.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });

    // Render initial projects and detail pages
    renderProjects(currentTab);
    renderProjectDetails();

    // Add resume button functionality
    const resumeBtn = document.querySelector('.resume-btn');
    resumeBtn.addEventListener('click', () => {
        window.open('https://drive.google.com/file/d/1vvw-1mJSPHfJSfrvXwBXLhn15yI73fqM/view?usp=drive_link', '_blank');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
