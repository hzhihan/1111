// Data structures for departments and careers
const departmentData = {
    '1-文': {
        name: '第一類組 - 文學院',
        departments: [
            { name: '中文系', careers: ['教師', '編輯', '文字工作者', '翻譯'] },
            { name: '外文系', careers: ['翻譯', '國際業務', '語言教師', '外交人員'] },
            { name: '歷史系', careers: ['教師', '研究員', '文化工作者', '策展人'] },
            { name: '哲學系', careers: ['教師', '研究員', '顧問', '評論家'] },
            { name: '藝術系', careers: ['藝術家', '設計師', '策展人', '藝術教師'] }
        ],
        crossDomain: [
            '文創產業：結合藝術與商業',
            '數位內容：融合科技與人文',
            '文化科技：AI輔助創作與翻譯',
            '跨文化溝通：國際化趨勢'
        ]
    },
    '1-法': {
        name: '第一類組 - 法學院',
        departments: [
            { name: '法律系', careers: ['律師', '法官', '檢察官', '法務人員'] },
            { name: '政治系', careers: ['公務員', '政策分析師', '民意代表', '外交官'] },
            { name: '社會系', careers: ['社工師', '研究員', 'NGO工作者', '顧問'] },
            { name: '公共行政系', careers: ['公務員', '政策規劃師', '顧問', '智庫研究員'] }
        ],
        crossDomain: [
            '科技法律：AI、區塊鏈相關法規',
            '智慧財產權：專利、商標專業',
            '法律科技：LegalTech創新',
            '國際法務：跨國企業需求'
        ]
    },
    '1-商': {
        name: '第一類組 - 商學院',
        departments: [
            { name: '企管系', careers: ['經理人', '顧問', '創業家', '專案經理'] },
            { name: '會計系', careers: ['會計師', '財務經理', '稽核人員', '稅務顧問'] },
            { name: '財金系', careers: ['投資分析師', '理財顧問', '銀行專員', '風險管理師'] },
            { name: '行銷系', careers: ['行銷經理', '品牌經理', '數位行銷', '市場分析師'] },
            { name: '資管系', careers: ['系統分析師', '產品經理', 'IT顧問', '資料分析師'] }
        ],
        crossDomain: [
            'FinTech：金融科技整合',
            '數據分析：商業智慧應用',
            '電子商務：數位轉型',
            '創新創業：跨領域整合'
        ]
    },
    '2-理工': {
        name: '第二類組 - 理工學院',
        departments: [
            { name: '資工系', careers: ['軟體工程師', 'AI工程師', '資安專家', '系統架構師'] },
            { name: '電機系', careers: ['電機工程師', '硬體工程師', '研發工程師', '自動化工程師'] },
            { name: '機械系', careers: ['機械工程師', '製程工程師', '研發工程師', '品保工程師'] },
            { name: '化工系', careers: ['製程工程師', '研發工程師', '品管工程師', '環保工程師'] },
            { name: '土木系', careers: ['土木工程師', '結構工程師', '營建工程師', '專案經理'] }
        ],
        crossDomain: [
            'AI與機器學習：跨產業應用',
            '智慧製造：工業4.0',
            '綠色科技：永續發展',
            '跨領域研發：整合創新'
        ]
    },
    '3-生醫': {
        name: '第三類組 - 生醫學院',
        departments: [
            { name: '醫學系', careers: ['醫師', '研究員', '醫學教育者', '公衛專家'] },
            { name: '牙醫系', careers: ['牙醫師', '口腔外科醫師', '齒顎矯正醫師'] },
            { name: '藥學系', careers: ['藥師', '藥物研發', '臨床藥師', '藥廠研發'] },
            { name: '護理系', careers: ['護理師', '專科護理師', '護理教育者', '護理長'] },
            { name: '生科系', careers: ['生技研發', '研究員', '品管工程師', '實驗室技術員'] },
            { name: '公衛系', careers: ['流行病學家', '公衛專家', '健康政策分析師', '衛生官員'] }
        ],
        crossDomain: [
            '精準醫療：AI輔助診斷',
            '生物科技：基因工程',
            '數位健康：遠距醫療',
            '醫療器材：跨域創新'
        ]
    }
};

// Career data with detailed information
const careerData = {
    '教師': {
        salaryData: {
            north: { bachelor: { startup: 35000, enterprise: 45000 }, master: { startup: 42000, enterprise: 55000 } },
            central: { bachelor: { startup: 32000, enterprise: 42000 }, master: { startup: 38000, enterprise: 50000 } },
            south: { bachelor: { startup: 30000, enterprise: 40000 }, master: { startup: 36000, enterprise: 48000 } }
        },
        metrics: { stress: 6.5, workHours: 45, socialContribution: 8.5, aiRisk: 25 },
        skills: ['教學能力', '溝通技巧', '學科專業', '課程設計', '班級經營'],
        aiRiskLevel: 'high',
        aiRiskDesc: '需要情感連結與創造性教學'
    },
    '律師': {
        salaryData: {
            north: { bachelor: { startup: 45000, enterprise: 70000 }, master: { startup: 55000, enterprise: 90000 } },
            central: { bachelor: { startup: 40000, enterprise: 65000 }, master: { startup: 50000, enterprise: 80000 } },
            south: { bachelor: { startup: 38000, enterprise: 60000 }, master: { startup: 48000, enterprise: 75000 } }
        },
        metrics: { stress: 8.5, workHours: 55, socialContribution: 7.5, aiRisk: 30 },
        skills: ['法律分析', '邏輯思維', '辯論技巧', '文書撰寫', '人際溝通'],
        aiRiskLevel: 'high',
        aiRiskDesc: '需要複雜判斷與人際協商'
    },
    '軟體工程師': {
        salaryData: {
            north: { bachelor: { startup: 50000, enterprise: 75000 }, master: { startup: 65000, enterprise: 95000 } },
            central: { bachelor: { startup: 45000, enterprise: 68000 }, master: { startup: 58000, enterprise: 85000 } },
            south: { bachelor: { startup: 42000, enterprise: 65000 }, master: { startup: 55000, enterprise: 80000 } }
        },
        metrics: { stress: 7.0, workHours: 48, socialContribution: 7.0, aiRisk: 45 },
        skills: ['程式設計', '演算法', '系統架構', '問題解決', '協作能力'],
        aiRiskLevel: 'medium',
        aiRiskDesc: '人機協作，AI輔助開發'
    },
    '醫師': {
        salaryData: {
            north: { bachelor: { startup: 80000, enterprise: 120000 }, master: { startup: 100000, enterprise: 150000 } },
            central: { bachelor: { startup: 75000, enterprise: 110000 }, master: { startup: 95000, enterprise: 140000 } },
            south: { bachelor: { startup: 70000, enterprise: 105000 }, master: { startup: 90000, enterprise: 135000 } }
        },
        metrics: { stress: 9.0, workHours: 60, socialContribution: 9.5, aiRisk: 20 },
        skills: ['醫學知識', '診斷能力', '溝通技巧', '同理心', '應變能力'],
        aiRiskLevel: 'high',
        aiRiskDesc: '需要專業判斷與人文關懷'
    },
    '會計師': {
        salaryData: {
            north: { bachelor: { startup: 40000, enterprise: 60000 }, master: { startup: 50000, enterprise: 75000 } },
            central: { bachelor: { startup: 38000, enterprise: 55000 }, master: { startup: 45000, enterprise: 68000 } },
            south: { bachelor: { startup: 35000, enterprise: 52000 }, master: { startup: 42000, enterprise: 65000 } }
        },
        metrics: { stress: 7.5, workHours: 50, socialContribution: 6.5, aiRisk: 55 },
        skills: ['會計原理', '稅務法規', '財務分析', '審計技能', '軟體應用'],
        aiRiskLevel: 'medium',
        aiRiskDesc: '部分工作可自動化，需轉型顧問'
    },
    '行政人員': {
        salaryData: {
            north: { bachelor: { startup: 32000, enterprise: 42000 }, master: { startup: 38000, enterprise: 50000 } },
            central: { bachelor: { startup: 30000, enterprise: 40000 }, master: { startup: 35000, enterprise: 45000 } },
            south: { bachelor: { startup: 28000, enterprise: 38000 }, master: { startup: 33000, enterprise: 43000 } }
        },
        metrics: { stress: 5.5, workHours: 42, socialContribution: 5.5, aiRisk: 70 },
        skills: ['文書處理', '時間管理', '溝通協調', '電腦技能', '組織能力'],
        aiRiskLevel: 'low',
        aiRiskDesc: '重複性工作易被自動化'
    }
};

// Learning path data
const learningPathData = {
    '1-文': {
        highSchool: ['加強國文寫作能力', '培養閱讀習慣', '參與文學社團', '學習第二外語'],
        certificates: ['華語文能力測驗', '多益TOEIC', '全民英檢', '第二外語檢定'],
        courses: ['文學創作課程', '修辭學', '文化研究', '數位人文'],
        mathA: { suitable: true, desc: '數學A提供更廣的選系彈性，適合跨領域發展' },
        mathB: { suitable: true, desc: '數學B即可滿足文學院需求，專注人文素養培養' }
    },
    '1-法': {
        highSchool: ['培養邏輯思維', '關注時事議題', '參與辯論社', '加強國文能力'],
        certificates: ['法律相關檢定', '多益TOEIC', '公民與社會科能力競賽'],
        courses: ['法律基礎概論', '邏輯思考', '公民素養', '國際關係'],
        mathA: { suitable: true, desc: '數學A有助於法律邏輯推理，增加跨領域優勢' },
        mathB: { suitable: true, desc: '數學B符合基本需求，重點在法律思維訓練' }
    },
    '1-商': {
        highSchool: ['數學能力培養', '經濟學入門', '統計概念', '商業新聞閱讀'],
        certificates: ['會計丙級', '商業簡報', '電腦軟體應用', 'Excel專業認證'],
        courses: ['基礎會計', '經濟學原理', '統計學', '商業分析'],
        mathA: { suitable: true, desc: '數學A必要！商學院多數科系要求數學A，利於財金、資管等科系' },
        mathB: { suitable: false, desc: '數學B限制較多科系選擇，建議選擇數學A' }
    },
    '2-理工': {
        highSchool: ['強化數學與物理', '程式設計入門', '科學實驗', '邏輯思維訓練'],
        certificates: ['程式設計檢定', 'APCS', '數學競賽', '物理奧林匹亞'],
        courses: ['Python程式設計', '微積分先修', '物理進階', '工程數學'],
        mathA: { suitable: true, desc: '數學A必要！理工學院絕大多數科系要求數學A' },
        mathB: { suitable: false, desc: '數學B不適用理工學院，必須選擇數學A' }
    },
    '3-生醫': {
        highSchool: ['生物化學深化', '數學物理強化', '實驗技能', '科學研究方法'],
        certificates: ['生物奧林匹亞', '化學競賽', '科展參與', '急救證照'],
        courses: ['生物學進階', '化學進階', '解剖生理學', '醫學倫理'],
        mathA: { suitable: true, desc: '數學A必要！醫學、牙醫、藥學等科系皆要求數學A' },
        mathB: { suitable: false, desc: '數學B限制許多醫學相關科系，強烈建議選數學A' }
    }
};

// Global state
let currentState = {
    stream: null,
    subStream: null,
    department: null,
    career: null
};

let salaryChart = null;

// Navigation functions
function selectStream(stream, subStream) {
    currentState.stream = stream;
    currentState.subStream = subStream;
    
    const key = `${stream}-${subStream}`;
    const data = departmentData[key];
    
    if (!data) return;
    
    // Update UI
    document.getElementById('streamSelection').classList.add('hidden');
    document.getElementById('departmentSelection').classList.remove('hidden');
    document.getElementById('streamName').textContent = data.name;
    
    // Populate departments
    const grid = document.getElementById('departmentGrid');
    grid.innerHTML = '';
    
    data.departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'tech-card rounded-xl p-6 shadow-lg cursor-pointer';
        card.onclick = () => selectDepartment(dept);
        card.innerHTML = `
            <h3 class="text-xl font-bold text-purple-600 mb-3">${dept.name}</h3>
            <p class="text-sm text-gray-600 mb-2">相關職業：</p>
            <div class="flex flex-wrap gap-2">
                ${dept.careers.map(career => `
                    <span class="skill-tag text-xs px-2 py-1 rounded">${career}</span>
                `).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Populate cross-domain section
    const crossDomain = document.getElementById('crossDomainContent');
    crossDomain.innerHTML = data.crossDomain.map(item => `
        <div class="flex items-start">
            <span class="text-purple-600 mr-2">✦</span>
            <p class="text-gray-700">${item}</p>
        </div>
    `).join('');
}

function selectDepartment(dept) {
    currentState.department = dept;
    currentState.career = dept.careers[0]; // Default to first career
    
    document.getElementById('departmentSelection').classList.add('hidden');
    document.getElementById('functionSelection').classList.remove('hidden');
    document.getElementById('departmentName').textContent = dept.name;
}

function showCareerAnalysis() {
    document.getElementById('functionSelection').classList.add('hidden');
    document.getElementById('careerAnalysis').classList.remove('hidden');
    
    // Initialize or update visualizations
    updateSalaryChart();
    updateCareerMetrics();
    updateSkillsAnalysis();
    updateAIRiskAnalysis();
}

function showBasicSkills() {
    document.getElementById('functionSelection').classList.add('hidden');
    document.getElementById('basicSkills').classList.remove('hidden');
    
    updateLearningPath();
    updateMathAnalysis();
}

function backToStreamSelection() {
    document.getElementById('departmentSelection').classList.add('hidden');
    document.getElementById('streamSelection').classList.remove('hidden');
}

function backToDepartmentSelection() {
    document.getElementById('functionSelection').classList.add('hidden');
    document.getElementById('departmentSelection').classList.remove('hidden');
}

function backToFunctionSelection() {
    document.getElementById('careerAnalysis').classList.add('hidden');
    document.getElementById('basicSkills').classList.add('hidden');
    document.getElementById('functionSelection').classList.remove('hidden');
}

// Salary chart functions
function updateSalaryChart() {
    const career = currentState.career;
    const careerInfo = careerData[career] || careerData['教師']; // Fallback
    
    const region = document.getElementById('regionFilter').value;
    const education = document.getElementById('educationFilter').value;
    const company = document.getElementById('companyFilter').value;
    
    const baseSalary = careerInfo.salaryData[region][education][company];
    
    // Generate 20-year projection
    const years = [];
    const salaries = [];
    const currentYear = new Date().getFullYear();
    
    for (let i = 0; i <= 20; i++) {
        years.push(currentYear + i);
        // Simulate growth with some variation
        const growthRate = 1.03 + (Math.random() * 0.02 - 0.01); // 2-4% annual growth
        const salary = Math.round(baseSalary * Math.pow(growthRate, i));
        salaries.push(salary);
    }
    
    // Create or update chart
    const ctx = document.getElementById('salaryChart').getContext('2d');
    
    if (salaryChart) {
        salaryChart.destroy();
    }
    
    salaryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: '預測薪資 (元/月)',
                data: salaries,
                borderColor: 'rgb(102, 126, 234)',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: '20年薪資預測曲線',
                    font: { size: 16 }
                },
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' 元';
                        }
                    }
                }
            }
        }
    });
}

function updateCareerMetrics() {
    const career = currentState.career;
    const careerInfo = careerData[career] || careerData['教師'];
    
    document.getElementById('stressIndex').textContent = careerInfo.metrics.stress;
    document.getElementById('workHours').textContent = careerInfo.metrics.workHours;
    document.getElementById('socialContribution').textContent = careerInfo.metrics.socialContribution;
    document.getElementById('aiRisk').textContent = careerInfo.metrics.aiRisk + '%';
}

function updateSkillsAnalysis() {
    const dept = currentState.department;
    if (!dept) return;
    
    const skillsDiv = document.getElementById('skillsAnalysis');
    skillsDiv.innerHTML = '';
    
    dept.careers.forEach(careerName => {
        const careerInfo = careerData[careerName] || { skills: ['專業技能', '溝通能力', '問題解決'] };
        
        const careerCard = document.createElement('div');
        careerCard.className = 'bg-gray-50 rounded-lg p-4';
        careerCard.innerHTML = `
            <h5 class="font-semibold text-gray-800 mb-2">${careerName}</h5>
            <p class="text-sm text-gray-600 mb-2">核心技能（可轉移）：</p>
            <div class="flex flex-wrap gap-2">
                ${careerInfo.skills.map(skill => `
                    <span class="skill-tag text-xs px-3 py-1 rounded-full">${skill}</span>
                `).join('')}
            </div>
        `;
        skillsDiv.appendChild(careerCard);
    });
}

function updateAIRiskAnalysis() {
    const dept = currentState.department;
    if (!dept) return;
    
    const highRisk = [];
    const mediumRisk = [];
    const lowRisk = [];
    
    dept.careers.forEach(careerName => {
        const careerInfo = careerData[careerName];
        if (careerInfo) {
            if (careerInfo.aiRiskLevel === 'high') {
                highRisk.push(careerName + ' - ' + careerInfo.aiRiskDesc);
            } else if (careerInfo.aiRiskLevel === 'medium') {
                mediumRisk.push(careerName + ' - ' + careerInfo.aiRiskDesc);
            } else {
                lowRisk.push(careerName + ' - ' + careerInfo.aiRiskDesc);
            }
        }
    });
    
    document.getElementById('highRiskJobs').innerHTML = highRisk.length > 0 
        ? highRisk.map(job => `<div>• ${job}</div>`).join('') 
        : '<div>• 無符合此類別的職業</div>';
    
    document.getElementById('mediumRiskJobs').innerHTML = mediumRisk.length > 0 
        ? mediumRisk.map(job => `<div>• ${job}</div>`).join('') 
        : '<div>• 無符合此類別的職業</div>';
    
    document.getElementById('lowRiskJobs').innerHTML = lowRisk.length > 0 
        ? lowRisk.map(job => `<div>• ${job}</div>`).join('') 
        : '<div>• 無符合此類別的職業</div>';
}

function updateLearningPath() {
    const key = `${currentState.stream}-${currentState.subStream}`;
    const pathData = learningPathData[key];
    
    if (!pathData) return;
    
    // High school connection
    const hsDiv = document.getElementById('highSchoolConnection');
    hsDiv.innerHTML = `
        <h5 class="font-semibold text-blue-700 mb-2">建議準備方向：</h5>
        <ul class="space-y-1">
            ${pathData.highSchool.map(item => `<li class="text-gray-700">• ${item}</li>`).join('')}
        </ul>
    `;
    
    // Certificates
    const certDiv = document.getElementById('certificates');
    certDiv.innerHTML = pathData.certificates.map(cert => `
        <div class="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p class="text-sm font-medium text-purple-700">📜 ${cert}</p>
        </div>
    `).join('');
    
    // Online courses
    const coursesDiv = document.getElementById('onlineCourses');
    coursesDiv.innerHTML = pathData.courses.map(course => `
        <div class="bg-green-50 border-l-4 border-green-400 p-3 rounded">
            <p class="text-sm text-gray-700">💻 ${course}</p>
        </div>
    `).join('');
}

function updateMathAnalysis() {
    const key = `${currentState.stream}-${currentState.subStream}`;
    const pathData = learningPathData[key];
    
    if (!pathData) return;
    
    // Math A
    const mathADiv = document.getElementById('mathAContent');
    mathADiv.innerHTML = `
        <div class="mb-3">
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold ${pathData.mathA.suitable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                ${pathData.mathA.suitable ? '✓ 適合' : '✗ 不適合'}
            </span>
        </div>
        <p class="text-sm text-gray-700">${pathData.mathA.desc}</p>
        <div class="mt-3 text-xs text-gray-500">
            <p><strong>適用科系：</strong>大部分科系皆可申請</p>
            <p><strong>優勢：</strong>選擇彈性大，跨領域發展容易</p>
        </div>
    `;
    
    // Math B
    const mathBDiv = document.getElementById('mathBContent');
    mathBDiv.innerHTML = `
        <div class="mb-3">
            <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold ${pathData.mathB.suitable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                ${pathData.mathB.suitable ? '✓ 適合' : '✗ 不適合'}
            </span>
        </div>
        <p class="text-sm text-gray-700">${pathData.mathB.desc}</p>
        <div class="mt-3 text-xs text-gray-500">
            <p><strong>適用科系：</strong>限定部分文法商科系</p>
            <p><strong>限制：</strong>無法申請理工、醫學等科系</p>
        </div>
    `;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('升學與職涯趨勢導航系統已載入');
});
