// Global state management
const state = {
    selectedTrack: null,
    selectedSubField: null,
    selectedMath: null,
    selectedDepartment: null,
    selectedFunction: null,
    currentStep: 'step-track-selection'
};

// Data for different academic tracks and departments
const departmentsData = {
    1: {
        humanities: [
            { name: '中國文學系', careers: ['教師', '編輯', '文案企劃'], aiRisk: 25 },
            { name: '歷史學系', careers: ['研究員', '文史工作者', '博物館員'], aiRisk: 20 },
            { name: '哲學系', careers: ['研究員', '企業倫理顧問', '教師'], aiRisk: 15 },
            { name: '外國語文學系', careers: ['翻譯', '國際事務', '語言教師'], aiRisk: 40 }
        ],
        law: [
            { name: '法律學系', careers: ['律師', '法官', '法務人員'], aiRisk: 20 },
            { name: '政治學系', careers: ['公務員', '政策分析師', '民意代表'], aiRisk: 25 },
            { name: '外交學系', careers: ['外交官', '國際事務專員'], aiRisk: 15 }
        ],
        business: [
            { name: '企業管理學系', careers: ['管理師', '專案經理', '創業家'], aiRisk: 30 },
            { name: '會計學系', careers: ['會計師', '財務分析師', '審計員'], aiRisk: 60 },
            { name: '經濟學系', careers: ['經濟分析師', '研究員', '顧問'], aiRisk: 35 },
            { name: '財務金融學系', careers: ['金融分析師', '投資顧問', '風險管理'], aiRisk: 45 },
            { name: '國際貿易學系', careers: ['貿易專員', '採購', '商務開發'], aiRisk: 40 }
        ]
    },
    2: [
        { name: '資訊工程學系', careers: ['軟體工程師', 'AI工程師', '系統架構師'], aiRisk: 30 },
        { name: '電機工程學系', careers: ['電機工程師', '系統工程師', '研發工程師'], aiRisk: 25 },
        { name: '機械工程學系', careers: ['機械工程師', '產品設計師', '製程工程師'], aiRisk: 35 },
        { name: '化學工程學系', careers: ['化工工程師', '製程工程師', '研發人員'], aiRisk: 30 },
        { name: '土木工程學系', careers: ['土木工程師', '結構工程師', '專案經理'], aiRisk: 25 },
        { name: '材料科學系', careers: ['材料工程師', '研發工程師', '品保工程師'], aiRisk: 28 }
    ],
    3: [
        { name: '醫學系', careers: ['醫師', '醫學研究員', '公衛專家'], aiRisk: 10 },
        { name: '牙醫學系', careers: ['牙醫師', '口腔外科醫師'], aiRisk: 15 },
        { name: '藥學系', careers: ['藥師', '藥物研發', '臨床藥師'], aiRisk: 20 },
        { name: '護理學系', careers: ['護理師', '護理長', '個案管理師'], aiRisk: 15 },
        { name: '生命科學系', careers: ['生物研究員', '生技研發', '醫檢師'], aiRisk: 25 },
        { name: '獸醫學系', careers: ['獸醫師', '動物醫院院長'], aiRisk: 12 }
    ]
};

// Skills data for different fields
const skillsData = {
    humanities: [
        { skill: '批判性思維', importance: 95, transferable: true },
        { skill: '文字表達能力', importance: 90, transferable: true },
        { skill: '研究方法論', importance: 85, transferable: true },
        { skill: '跨文化理解', importance: 80, transferable: true }
    ],
    law: [
        { skill: '法律思維', importance: 95, transferable: true },
        { skill: '邏輯推理', importance: 90, transferable: true },
        { skill: '論述表達', importance: 85, transferable: true },
        { skill: '談判協商', importance: 80, transferable: true }
    ],
    business: [
        { skill: '資料分析', importance: 95, transferable: true },
        { skill: '財務管理', importance: 90, transferable: true },
        { skill: '專案管理', importance: 85, transferable: true },
        { skill: '市場分析', importance: 80, transferable: true }
    ],
    engineering: [
        { skill: 'Python/程式設計', importance: 95, transferable: true },
        { skill: '系統思維', importance: 90, transferable: true },
        { skill: '數據分析', importance: 88, transferable: true },
        { skill: '問題解決', importance: 92, transferable: true }
    ],
    medical: [
        { skill: '醫學知識', importance: 98, transferable: false },
        { skill: '同理心', importance: 95, transferable: true },
        { skill: '決策能力', importance: 90, transferable: true },
        { skill: '溝通技巧', importance: 88, transferable: true }
    ]
};

// Learning path data
const learningPaths = {
    humanities: {
        highschool: [
            { title: '強化國文與寫作', description: '培養文字敏感度與表達能力' },
            { title: '廣泛閱讀經典', description: '建立人文素養基礎' },
            { title: '參與辯論社團', description: '訓練邏輯與口語表達' },
            { title: '學習第二外語', description: '增加國際視野' }
        ],
        certifications: [
            '全民英檢（GEPT）中高級以上',
            '華語文能力測驗',
            '數位內容創作證照',
            'Google Analytics 認證'
        ],
        online: [
            { name: 'Coursera', desc: '人文學科課程' },
            { name: 'edX', desc: '哲學與歷史' },
            { name: 'Khan Academy', desc: '人文藝術' }
        ]
    },
    law: {
        highschool: [
            { title: '公民與社會深入研讀', description: '建立法政基礎知識' },
            { title: '培養邏輯思維', description: '透過數學與辯論訓練' },
            { title: '關注時事議題', description: '了解社會脈動' },
            { title: '參與模擬法庭', description: '實務經驗累積' }
        ],
        certifications: [
            '全民英檢（GEPT）中高級',
            '多益（TOEIC）750分以上',
            '法律實務工作坊證書',
            '辯論比賽經歷'
        ],
        online: [
            { name: 'Coursera', desc: '法律與政治課程' },
            { name: 'edX', desc: '國際法課程' },
            { name: 'Yale Open Courses', desc: '法律公開課' }
        ]
    },
    business: {
        highschool: [
            { title: '數學能力紮實', description: '選修數學A，加強微積分' },
            { title: '學習 Excel 與數據分析', description: '培養數據思維' },
            { title: '關注商業新聞', description: '建立商業敏感度' },
            { title: '參與商業競賽', description: '實戰經驗累積' }
        ],
        certifications: [
            'MOS (Microsoft Office Specialist)',
            'Google Analytics 認證',
            'Google Data Analytics 證書',
            'Python for Data Science (Coursera)',
            '多益（TOEIC）800分以上'
        ],
        online: [
            { name: 'Coursera', desc: '商業分析課程' },
            { name: 'edX', desc: 'MBA課程' },
            { name: 'DataCamp', desc: '數據分析' }
        ]
    },
    engineering: {
        highschool: [
            { title: '數學與物理紮實', description: '理工基礎必備' },
            { title: '學習程式設計', description: 'Python、C++ 入門' },
            { title: '參與科展或專題', description: '培養研究能力' },
            { title: '動手實作專案', description: 'Arduino、Raspberry Pi' }
        ],
        certifications: [
            'Python Programming 認證',
            'Java SE Programmer',
            'AWS Cloud Practitioner',
            'TQC+ 程式設計認證'
        ],
        online: [
            { name: 'Coursera', desc: '程式設計課程' },
            { name: 'Udemy', desc: '實戰專案課程' },
            { name: 'MIT OpenCourseWare', desc: '工程課程' }
        ]
    },
    medical: {
        highschool: [
            { title: '生物與化學深入學習', description: '醫學基礎科學' },
            { title: '培養服務熱忱', description: '志工服務經驗' },
            { title: '英文能力強化', description: '醫學文獻閱讀必備' },
            { title: '觀察與記錄能力', description: '科學實驗訓練' }
        ],
        certifications: [
            '全民英檢（GEPT）中高級以上',
            '急救證照（CPR/AED）',
            '醫療志工服務時數',
            '生物奧林匹亞競賽'
        ],
        online: [
            { name: 'Coursera', desc: '醫學基礎課程' },
            { name: 'Khan Academy', desc: '生物與化學' },
            { name: 'edX', desc: '公共衛生課程' }
        ]
    }
};

// Salary chart instance
let salaryChart = null;

// Navigation functions
function selectTrack(track) {
    state.selectedTrack = track;
    
    if (track === 1) {
        showStep('step-type1-subdivision');
    } else {
        state.selectedSubField = null;
        showStep('step-department-selection');
        populateDepartments();
    }
}

function selectSubField(field) {
    state.selectedSubField = field;
    // Don't navigate yet, wait for math selection
}

function selectMath(mathType) {
    state.selectedMath = mathType;
    
    if (state.selectedSubField) {
        showStep('step-department-selection');
        populateDepartments();
    }
}

function populateDepartments() {
    const departmentsList = document.getElementById('departments-list');
    departmentsList.innerHTML = '';
    
    let departments = [];
    
    if (state.selectedTrack === 1) {
        departments = departmentsData[1][state.selectedSubField] || [];
    } else {
        departments = departmentsData[state.selectedTrack] || [];
    }
    
    departments.forEach(dept => {
        const deptCard = document.createElement('div');
        deptCard.className = 'tech-border rounded-lg p-6 card-hover cursor-pointer';
        deptCard.onclick = () => selectDepartment(dept);
        
        const riskColor = dept.aiRisk > 50 ? 'text-red-600' : dept.aiRisk > 30 ? 'text-yellow-600' : 'text-green-600';
        
        deptCard.innerHTML = `
            <h3 class="text-lg font-bold text-gray-800 mb-3">${dept.name}</h3>
            <div class="text-sm text-gray-600 mb-3">
                <p class="mb-2"><strong>相關職業：</strong></p>
                <ul class="list-disc list-inside space-y-1">
                    ${dept.careers.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-200">
                <span class="text-xs text-gray-500">AI取代風險：</span>
                <span class="${riskColor} font-bold">${dept.aiRisk}%</span>
            </div>
        `;
        
        departmentsList.appendChild(deptCard);
    });
}

function selectDepartment(dept) {
    state.selectedDepartment = dept;
    document.getElementById('selected-department').textContent = dept.name;
    showStep('step-function-selection');
}

function selectFunction(func) {
    state.selectedFunction = func;
    
    if (func === 'career') {
        showModule('module-career');
        initializeSalaryChart();
        updateCareerData();
    } else {
        showModule('module-skills');
        updateSkillsData();
    }
}

function showStep(stepId) {
    // Hide all steps and modules
    document.querySelectorAll('.step-container, .module-container').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Show selected step
    const step = document.getElementById(stepId);
    if (step) {
        step.classList.remove('hidden');
        state.currentStep = stepId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showModule(moduleId) {
    // Hide all steps and modules
    document.querySelectorAll('.step-container, .module-container').forEach(el => {
        el.classList.add('hidden');
    });
    
    // Show selected module
    const module = document.getElementById(moduleId);
    if (module) {
        module.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function goBack(stepId) {
    showStep(stepId);
}

function goBackToPrevious() {
    if (state.selectedTrack === 1) {
        showStep('step-type1-subdivision');
    } else {
        showStep('step-track-selection');
    }
}

// Salary Chart functionality
function initializeSalaryChart() {
    const ctx = document.getElementById('salaryChart');
    
    // Check if element exists
    if (!ctx) {
        console.warn('Salary chart canvas not found');
        return;
    }
    
    if (salaryChart) {
        salaryChart.destroy();
    }
    
    const years = Array.from({ length: 21 }, (_, i) => i);
    const data = generateSalaryData();
    
    salaryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years.map(y => `第${y}年`),
            datasets: [{
                label: '預測薪資（萬元/年）',
                data: data,
                borderColor: 'rgb(102, 126, 234)',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: '20年薪資預測曲線',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `薪資: ${context.parsed.y.toFixed(1)} 萬元/年`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: '年薪（萬元）'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '工作年資'
                    }
                }
            }
        }
    });
}

function generateSalaryData() {
    const region = document.getElementById('region-select').value;
    const education = document.getElementById('education-select').value;
    const company = document.getElementById('company-select').value;
    
    // Base salary factors
    let baseSalary = 40;
    const regionMultiplier = region === 'north' ? 1.2 : region === 'central' ? 1.0 : 0.9;
    const educationMultiplier = education === 'master' ? 1.3 : 1.0;
    const companyMultiplier = company === 'large' ? 1.15 : 1.0;
    
    baseSalary *= regionMultiplier * educationMultiplier * companyMultiplier;
    
    // Generate 20-year projection
    const data = [];
    for (let year = 0; year <= 20; year++) {
        let salary = baseSalary;
        
        // Early career growth (0-5 years): steep
        if (year <= 5) {
            salary += year * 8;
        }
        // Mid career (6-15 years): moderate growth
        else if (year <= 15) {
            salary += 40 + (year - 5) * 4;
        }
        // Late career (16-20 years): plateau
        else {
            salary += 80 + (year - 15) * 2;
        }
        
        // Add some variation
        const variation = (Math.random() - 0.5) * 5;
        data.push(salary + variation);
    }
    
    return data;
}

function updateSalaryChart() {
    if (salaryChart) {
        salaryChart.data.datasets[0].data = generateSalaryData();
        salaryChart.update();
    }
}

// Career data update
function updateCareerData() {
    // Update quantitative indicators
    const dept = state.selectedDepartment;
    
    // Calculate indicators based on department and field
    let stressIndex = 7.5;
    let workHours = 48;
    let socialContribution = 8.2;
    let aiRisk = dept.aiRisk || 35;
    
    // Adjust based on track
    if (state.selectedTrack === 3) { // Medical
        stressIndex = 8.5;
        workHours = 60;
        socialContribution = 9.5;
    } else if (state.selectedTrack === 2) { // Engineering
        stressIndex = 7.0;
        workHours = 50;
        socialContribution = 7.5;
    } else if (state.selectedSubField === 'law') {
        stressIndex = 8.0;
        workHours = 55;
        socialContribution = 8.8;
    }
    
    document.getElementById('stress-index').textContent = stressIndex.toFixed(1);
    document.getElementById('work-hours').textContent = workHours;
    document.getElementById('social-contribution').textContent = socialContribution.toFixed(1);
    document.getElementById('ai-risk').textContent = aiRisk;
    
    // Update skills list
    updateSkillsList();
    
    // Update career paths
    updateCareerPaths();
}

function updateSkillsList() {
    const skillsList = document.getElementById('skills-list');
    let skills = [];
    
    if (state.selectedTrack === 1) {
        skills = skillsData[state.selectedSubField] || skillsData.humanities;
    } else if (state.selectedTrack === 2) {
        skills = skillsData.engineering;
    } else {
        skills = skillsData.medical;
    }
    
    skillsList.innerHTML = skills.map(skill => `
        <div class="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
            <div class="flex-1">
                <h5 class="font-bold text-gray-800">${skill.skill}</h5>
                <span class="text-xs ${skill.transferable ? 'text-green-600' : 'text-gray-600'}">
                    ${skill.transferable ? '✓ 可轉移技能' : '專業技能'}
                </span>
            </div>
            <div class="w-24 bg-gray-200 rounded-full h-3">
                <div class="bg-purple-600 h-3 rounded-full" style="width: ${skill.importance}%"></div>
            </div>
            <span class="ml-3 text-sm font-bold text-purple-600">${skill.importance}%</span>
        </div>
    `).join('');
}

function updateCareerPaths() {
    const careerPaths = document.getElementById('career-paths');
    const careers = state.selectedDepartment.careers || [];
    
    careerPaths.innerHTML = careers.map(career => `
        <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200">
            <h4 class="font-bold text-gray-800 mb-2">${career}</h4>
            <div class="flex items-center text-sm text-gray-600">
                <span class="mr-2">💼</span>
                <span>職涯發展路徑</span>
            </div>
        </div>
    `).join('');
}

// Skills/Learning path update
function updateSkillsData() {
    // Determine learning path category
    let category = 'humanities';
    if (state.selectedTrack === 1) {
        category = state.selectedSubField;
    } else if (state.selectedTrack === 2) {
        category = 'engineering';
    } else {
        category = 'medical';
    }
    
    const path = learningPaths[category];
    
    // Update math impact section
    const mathImpactSection = document.getElementById('math-impact-section');
    if (state.selectedMath && mathImpactSection) {
        mathImpactSection.classList.remove('hidden');
        document.getElementById('selected-math-display').textContent = `數學 ${state.selectedMath}`;
        
        let recommendation = '';
        if (state.selectedMath === 'A') {
            if (category === 'business') {
                recommendation = '這是很好的選擇！數學A為商管領域提供紮實的量化分析基礎，建議加強微積分與統計應用。';
            } else if (category === 'humanities') {
                recommendation = '雖然人文領域不強制要求數學A，但這能為您開啟更多跨域可能，如數位人文、文化數據分析等領域。';
            } else {
                recommendation = '數學A提供良好的量化基礎，有助於未來跨域發展。';
            }
        } else {
            if (category === 'business') {
                recommendation = '數學B可能在商管領域受限，建議額外加強統計與資料分析能力，並考慮修習相關線上課程。';
            } else {
                recommendation = '數學B適合您選擇的領域，建議專注於統計應用與實務技能的培養。';
            }
        }
        
        document.getElementById('math-recommendation').textContent = recommendation;
    } else if (mathImpactSection) {
        mathImpactSection.classList.add('hidden');
    }
    
    // Update high school recommendations
    const highschoolRecs = document.getElementById('highschool-recommendations');
    highschoolRecs.innerHTML = path.highschool.map(item => `
        <div class="bg-white rounded-lg p-4 border-2 border-blue-200">
            <h5 class="font-bold text-blue-800 mb-2">${item.title}</h5>
            <p class="text-sm text-gray-600">${item.description}</p>
        </div>
    `).join('');
    
    // Update certifications
    const certRecs = document.getElementById('certification-recommendations');
    certRecs.innerHTML = path.certifications.map(cert => `
        <div class="flex items-start bg-white rounded-lg p-3 border border-green-200">
            <span class="text-green-600 mr-3 text-xl">🏆</span>
            <span class="text-gray-700">${cert}</span>
        </div>
    `).join('');
    
    // Update online resources
    const onlineRecs = document.getElementById('online-resources');
    onlineRecs.innerHTML = path.online.map(resource => `
        <div class="bg-white rounded-lg p-4 border-2 border-purple-200">
            <h5 class="font-bold text-purple-800 mb-2">${resource.name}</h5>
            <p class="text-sm text-gray-600">${resource.desc}</p>
        </div>
    `).join('');
    
    // Update core skills
    updateCoreSkills(category);
}

function updateCoreSkills(category) {
    const coreSkillsEl = document.getElementById('core-skills');
    const skills = skillsData[category] || skillsData.humanities;
    
    coreSkillsEl.innerHTML = skills.map(skill => `
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-2 border-gray-200">
            <h5 class="font-bold text-gray-800 mb-2">${skill.skill}</h5>
            <div class="flex items-center justify-between">
                <span class="text-xs ${skill.transferable ? 'text-green-600' : 'text-gray-600'}">
                    ${skill.transferable ? '✓ 可轉移' : '專業技能'}
                </span>
                <span class="text-sm font-bold text-purple-600">${skill.importance}%</span>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // System initialized
});
