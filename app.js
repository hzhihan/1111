// 全局常量 / Global Constants
const SALARY_PREDICTION_YEARS = 20;
const CHART_DISPLAY_INTERVAL = 2; // Show every Nth year in fallback chart

// 全局狀態管理
const state = {
    currentCategory: null,
    currentSubCategory: null,
    currentDepartment: null,
    previousStep: null
};

// 科系數據庫
const departmentsData = {
    humanities: {
        name: '文學類',
        departments: ['中國文學系', '外國文學系', '歷史系', '哲學系', '語言學系', '圖書資訊學系'],
        crossDomain: ['數位人文學系', '文化創意產業學系', '應用語言學系']
    },
    law: {
        name: '法律類',
        departments: ['法律系', '財經法律系', '科技法律學系', '政治系', '公共行政系'],
        crossDomain: ['法律科技學系', '國際事務學系', '風險管理學系']
    },
    business: {
        name: '商學類',
        departments: ['企業管理系', '會計系', '財務金融系', '國際企業系', '資訊管理系', '經濟系'],
        crossDomain: ['金融科技系', '商業數據分析系', '電子商務系']
    },
    second: {
        name: '理工類',
        departments: ['資訊工程系', '電機工程系', '機械工程系', '化學工程系', '土木工程系', '材料科學系'],
        crossDomain: ['生物資訊系', '智慧製造系', '綠色科技系']
    },
    third: {
        name: '醫藥生科類',
        departments: ['醫學系', '藥學系', '護理系', '生命科學系', '生物科技系', '公共衛生系'],
        crossDomain: ['精準醫療系', '醫學資訊系', '再生醫學系']
    }
};

// 職業數據
const careerData = {
    '中國文學系': {
        careers: ['編輯', '文案企劃', '教師', '作家', '文化工作者'],
        skills: [
            { name: '文字撰寫', description: '專業寫作與編輯能力' },
            { name: '文獻分析', description: '古籍與現代文本分析' },
            { name: '創意表達', description: '創作與表達能力' }
        ],
        aiRisk: {
            high: ['文化評論家', '創意總監'],
            medium: ['編輯', '教師'],
            low: ['資料整理員']
        }
    },
    '法律系': {
        careers: ['律師', '法官', '檢察官', '法務人員', '智財顧問'],
        skills: [
            { name: '法規解釋', description: '法律條文分析與應用' },
            { name: '邏輯推理', description: '法律論證與辯護' },
            { name: '談判協商', description: '案件調解與協商' }
        ],
        aiRisk: {
            high: ['法官', '資深律師', '仲裁人'],
            medium: ['法務專員', '智財顧問'],
            low: ['法律文書處理']
        }
    },
    '企業管理系': {
        careers: ['專案經理', '行銷企劃', '人力資源', '管理顧問', '創業家'],
        skills: [
            { name: 'Python', description: '數據分析與自動化' },
            { name: '專案管理', description: 'PMP、敏捷方法' },
            { name: '數據分析', description: 'Excel、Tableau、Power BI' }
        ],
        aiRisk: {
            high: ['策略顧問', '創業家', '組織變革專家'],
            medium: ['專案經理', '行銷企劃', 'HR經理'],
            low: ['行政助理', '資料輸入員']
        }
    },
    '資訊工程系': {
        careers: ['軟體工程師', '系統架構師', 'AI工程師', '資安專家', 'DevOps工程師'],
        skills: [
            { name: 'Python', description: '後端開發與AI應用' },
            { name: 'JavaScript', description: '前端與全端開發' },
            { name: '雲端架構', description: 'AWS、Azure、GCP' },
            { name: '資料庫', description: 'SQL、NoSQL設計' }
        ],
        aiRisk: {
            high: ['系統架構師', 'AI研究員', '資安專家'],
            medium: ['軟體工程師', 'DevOps工程師'],
            low: ['程式碼維護員']
        }
    },
    '醫學系': {
        careers: ['醫師', '外科醫師', '研究員', '公衛專家', '醫療顧問'],
        skills: [
            { name: '臨床診斷', description: '疾病診斷與治療' },
            { name: '醫學研究', description: '臨床研究與論文' },
            { name: '醫病溝通', description: '同理心與溝通技巧' }
        ],
        aiRisk: {
            high: ['外科醫師', '心理醫師', '家庭醫師'],
            medium: ['影像診斷醫師', '病理科醫師'],
            low: ['醫療紀錄員']
        }
    }
};

// 預設職業數據（用於沒有特定數據的科系）
const defaultCareerData = {
    careers: ['專業人員', '研究員', '顧問', '教師', '企業職員'],
    skills: [
        { name: '專業知識', description: '領域專業能力' },
        { name: '分析能力', description: '問題分析與解決' },
        { name: '溝通協作', description: '團隊合作與溝通' }
    ],
    aiRisk: {
        high: ['高階決策者', '創新研究員'],
        medium: ['專業顧問', '分析師'],
        low: ['基礎作業員']
    }
};

// 能力數據
const abilityData = {
    '中國文學系': {
        mathImpact: {
            mathA: ['可選擇跨領域應用（如數位人文）', '提升邏輯分析能力', '有助於學術研究'],
            mathB: ['專注於人文素養培養', '適合純文學創作方向', '教學與編輯領域充足']
        },
        learningPath: [
            { category: '高中準備', items: ['加強國文寫作', '閱讀經典文學', '參加文學營隊'] },
            { category: '建議證照', items: ['華語文能力測驗', '教育學程', '編輯證照'] },
            { category: '線上資源', items: ['Coursera 文學課程', 'edX 中文課程', '國家圖書館資源'] }
        ],
        coreAbilities: [
            { icon: '✍️', name: '文字能力', level: '必備' },
            { icon: '📚', name: '文學素養', level: '必備' },
            { icon: '💭', name: '批判思考', level: '重要' },
            { icon: '🎨', name: '創意表達', level: '重要' }
        ]
    },
    '法律系': {
        mathImpact: {
            mathA: ['有利於財經法律', '數理邏輯強化論證', '跨域科技法律發展'],
            mathB: ['傳統法律路線充足', '著重案例分析', '司法考試不受影響']
        },
        learningPath: [
            { category: '高中準備', items: ['培養邏輯思維', '關注時事議題', '辯論社團參與'] },
            { category: '建議證照', items: ['律師執照', '專利師', '仲裁人證照'] },
            { category: '線上資源', items: ['法律白話文運動', 'Coursera 法律課程', '司法院資源'] }
        ],
        coreAbilities: [
            { icon: '⚖️', name: '邏輯推理', level: '必備' },
            { icon: '📖', name: '法規研讀', level: '必備' },
            { icon: '🗣️', name: '口語表達', level: '重要' },
            { icon: '🔍', name: '批判分析', level: '重要' }
        ]
    },
    '企業管理系': {
        mathImpact: {
            mathA: ['商業分析與數據科學優勢', '金融工程領域必備', '策略規劃能力提升'],
            mathB: ['行銷與人資管理充足', '創業管理可行', '需額外加強統計能力']
        },
        learningPath: [
            { category: '高中準備', items: ['學習Excel與資料分析', '了解商業模式', '參與商業競賽'] },
            { category: '建議證照', items: ['PMP專案管理', 'Google Analytics', 'TOEIC 英文'] },
            { category: '線上資源', items: ['Coursera MBA課程', 'edX 商業分析', 'Harvard Business Review'] }
        ],
        coreAbilities: [
            { icon: '📊', name: '數據分析', level: '必備' },
            { icon: '💼', name: '管理能力', level: '必備' },
            { icon: '🎯', name: '策略思維', level: '重要' },
            { icon: '🤝', name: '領導協調', level: '重要' }
        ]
    },
    '資訊工程系': {
        mathImpact: {
            mathA: ['演算法與理論基礎必備', 'AI/機器學習發展優勢', '研究所深造有利'],
            mathB: ['基礎程式開發可行', '網頁開發充足', '進階領域較困難']
        },
        learningPath: [
            { category: '高中準備', items: ['學習Python基礎', '參加程式競賽', '建立GitHub作品集'] },
            { category: '建議證照', items: ['AWS認證', 'Google Cloud證照', 'APCS檢定'] },
            { category: '線上資源', items: ['LeetCode練習', 'Coursera CS課程', 'GitHub開源專案'] }
        ],
        coreAbilities: [
            { icon: '💻', name: '程式設計', level: '必備' },
            { icon: '🧮', name: '數學邏輯', level: '必備' },
            { icon: '🔧', name: '問題解決', level: '必備' },
            { icon: '🌐', name: '系統思維', level: '重要' }
        ]
    },
    '醫學系': {
        mathImpact: {
            mathA: ['生物統計與研究優勢', '醫學工程發展有利', '精準醫療趨勢必備'],
            mathB: ['臨床醫療充足', '著重生物與化學', '需額外補強統計']
        },
        learningPath: [
            { category: '高中準備', items: ['強化生物與化學', '醫學營隊參與', '志工服務經驗'] },
            { category: '建議證照', items: ['醫師執照', 'ACLS證照', '專科醫師證照'] },
            { category: '線上資源', items: ['UpToDate醫學資料庫', 'Coursera 醫學課程', 'PubMed研究資源'] }
        ],
        coreAbilities: [
            { icon: '🏥', name: '醫學知識', level: '必備' },
            { icon: '❤️', name: '同理心', level: '必備' },
            { icon: '🔬', name: '科學思維', level: '必備' },
            { icon: '⚡', name: '抗壓能力', level: '重要' }
        ]
    }
};

// 預設能力數據
const defaultAbilityData = {
    mathImpact: {
        mathA: ['有利於量化分析', '跨領域發展優勢', '研究方法多元'],
        mathB: ['基礎學習充足', '著重專業知識', '實務應用導向']
    },
    learningPath: [
        { category: '高中準備', items: ['強化專業科目', '參與相關活動', '培養興趣與熱情'] },
        { category: '建議證照', items: ['專業證照', '語言證照', '技能認證'] },
        { category: '線上資源', items: ['Coursera課程', 'edX學習平台', '專業網站資源'] }
    ],
    coreAbilities: [
        { icon: '📚', name: '專業知識', level: '必備' },
        { icon: '🧠', name: '學習能力', level: '必備' },
        { icon: '💪', name: '執行力', level: '重要' },
        { icon: '🤝', name: '團隊合作', level: '重要' }
    ]
};

// 薪資數據生成函數
function generateSalaryData(region, education, company) {
    const baseData = {
        north: { bachelor: { startup: 35000, large: 45000 }, master: { startup: 45000, large: 60000 } },
        central: { bachelor: { startup: 32000, large: 40000 }, master: { startup: 42000, large: 55000 } },
        south: { bachelor: { startup: 30000, large: 38000 }, master: { startup: 40000, large: 52000 } }
    };

    const baseSalary = baseData[region][education][company];
    const data = [];
    
    for (let year = 0; year <= SALARY_PREDICTION_YEARS; year++) {
        // 使用指數成長模型，但有上限
        const growthRate = company === 'startup' ? 0.08 : 0.06;
        const maxMultiplier = company === 'startup' ? 3.5 : 2.8;
        const salary = Math.min(
            baseSalary * (1 + growthRate) ** year,
            baseSalary * maxMultiplier
        );
        data.push(Math.round(salary / 1000) * 1000);
    }
    
    return data;
}

// Chart.js 實例
let salaryChart = null;

// 初始化薪資圖表
function initSalaryChart() {
    const ctx = document.getElementById('salaryChart');
    if (!ctx) return;

    const region = document.getElementById('region-filter').value;
    const education = document.getElementById('education-filter').value;
    const company = document.getElementById('company-filter').value;

    const data = generateSalaryData(region, education, company);
    const labels = Array.from({ length: SALARY_PREDICTION_YEARS + 1 }, (_, i) => `${i}年`);

    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        // Fallback: Create a simple text-based visualization
        createFallbackChart(ctx, labels, data);
        return;
    }

    if (salaryChart) {
        salaryChart.destroy();
    }

    salaryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '預估月薪 (元)',
                data: data,
                borderColor: 'rgb(102, 126, 234)',
                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#f8fafc',
                        font: { size: 14 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: '#667eea',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#cbd5e1',
                        callback: function(value) {
                            return value.toLocaleString() + '元';
                        }
                    },
                    grid: {
                        color: 'rgba(203, 213, 225, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#cbd5e1'
                    },
                    grid: {
                        color: 'rgba(203, 213, 225, 0.1)'
                    }
                }
            }
        }
    });
}

// Fallback chart visualization when Chart.js is not available
function createFallbackChart(canvas, labels, data) {
    const container = document.getElementById('salaryChartContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div style="padding: 20px; color: #f8fafc;">
            <h4 style="margin-bottom: 15px; color: #667eea;">薪資成長趨勢（${SALARY_PREDICTION_YEARS}年預測）</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px;">
                ${data.map((salary, i) => {
                    const height = (salary / Math.max(...data)) * 100;
                    return `
                        <div style="text-align: center;">
                            <div style="background: linear-gradient(to top, #667eea, #764ba2); height: ${height}px; border-radius: 5px; margin-bottom: 5px;"></div>
                            <div style="font-size: 0.75rem; color: #cbd5e1;">${i}年</div>
                            <div style="font-size: 0.8rem; font-weight: bold;">${salary.toLocaleString()}</div>
                        </div>
                    `;
                }).filter((_, i) => i % CHART_DISPLAY_INTERVAL === 0).join('')}
            </div>
            <div style="margin-top: 20px; text-align: center;">
                <p style="color: #cbd5e1;">起薪: ${data[0].toLocaleString()}元 → ${SALARY_PREDICTION_YEARS}年後: ${data[SALARY_PREDICTION_YEARS].toLocaleString()}元</p>
            </div>
        </div>
    `;
}

// 更新薪資圖表
function updateSalaryChart() {
    initSalaryChart();
    updateIndicators();
}

// 更新量化指標
function updateIndicators() {
    const region = document.getElementById('region-filter').value;
    const company = document.getElementById('company-filter').value;

    // 根據選擇設定不同的指標值
    const indicators = {
        startup: { stress: 75, workhours: 55, contribution: 70, aiRisk: 35 },
        large: { stress: 60, workhours: 50, contribution: 65, aiRisk: 45 }
    };

    const values = indicators[company];

    // 更新每個指標
    updateIndicator('stress', values.stress, '高');
    updateIndicator('workhours', values.workhours, `${Math.round(values.workhours * 0.8 + 40)} 小時/週`);
    updateIndicator('contribution', values.contribution, '中高');
    updateIndicator('ai-risk', values.aiRisk, values.aiRisk > 50 ? '中' : '低');
}

function updateIndicator(id, percentage, displayValue) {
    const indicator = document.getElementById(`${id}-indicator`);
    const value = document.getElementById(`${id}-value`);
    
    if (indicator && value) {
        indicator.style.width = percentage + '%';
        value.textContent = displayValue;
    }
}

// 類組選擇
function selectCategory(category) {
    state.currentCategory = category;
    
    if (category === 'first') {
        showStep('step-first-subcategory');
    } else {
        state.currentSubCategory = category;
        showDepartments();
    }
}

// 一類組子分類選擇
function selectSubCategory(subCategory) {
    state.currentSubCategory = subCategory;
    showDepartments();
}

// 顯示科系頁面
function showDepartments() {
    const data = departmentsData[state.currentSubCategory];
    if (!data) return;

    document.getElementById('department-title').textContent = data.name + ' - 適合科系';
    
    const departmentsList = document.getElementById('departments-list');
    departmentsList.innerHTML = data.departments.map(dept => 
        `<div class="department-item" onclick="selectDepartment('${dept}')">${dept}</div>`
    ).join('');

    const crossDomainList = document.getElementById('cross-domain-list');
    crossDomainList.innerHTML = data.crossDomain.map(dept => 
        `<div class="cross-domain-item" onclick="selectDepartment('${dept}')">${dept}</div>`
    ).join('');

    state.previousStep = state.currentCategory === 'first' ? 'step-first-subcategory' : 'step-category';
    showStep('step-departments');
}

// 選擇科系
function selectDepartment(department) {
    state.currentDepartment = department;
    document.getElementById('selected-department-name').textContent = department;
    showStep('step-function-select');
}

// 顯示職業分析
function showCareerAnalysis() {
    showStep('step-career-analysis');
    
    // 初始化薪資圖表
    setTimeout(() => {
        initSalaryChart();
        updateIndicators();
        loadCareerData();
    }, 100);
}

// 載入職業數據
function loadCareerData() {
    const data = careerData[state.currentDepartment] || defaultCareerData;

    // 技能分解
    const skillsBreakdown = document.getElementById('skills-breakdown');
    skillsBreakdown.innerHTML = data.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-description">${skill.description}</div>
        </div>
    `).join('');

    // AI 風險職位
    document.getElementById('high-risk-jobs').innerHTML = 
        data.aiRisk.high.map(job => `<div class="risk-job">${job}</div>`).join('');
    document.getElementById('medium-risk-jobs').innerHTML = 
        data.aiRisk.medium.map(job => `<div class="risk-job">${job}</div>`).join('');
    document.getElementById('low-risk-jobs').innerHTML = 
        data.aiRisk.low.map(job => `<div class="risk-job">${job}</div>`).join('');
}

// 顯示能力分析
function showAbilityAnalysis() {
    showStep('step-ability-analysis');
    loadAbilityData();
}

// 載入能力數據
function loadAbilityData() {
    const data = abilityData[state.currentDepartment] || defaultAbilityData;

    // 學習路徑
    const learningPath = document.getElementById('learning-path');
    learningPath.innerHTML = data.learningPath.map(path => `
        <div class="learning-path-item">
            <div class="path-category">${path.category}</div>
            <ul class="path-items">
                ${path.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // 數學 A vs B 影響
    document.getElementById('math-a-impact').innerHTML = `
        <ul class="impact-list">
            ${data.mathImpact.mathA.map(impact => 
                `<li class="impact-item impact-positive">${impact}</li>`
            ).join('')}
        </ul>
    `;

    document.getElementById('math-b-impact').innerHTML = `
        <ul class="impact-list">
            ${data.mathImpact.mathB.map(impact => 
                `<li class="impact-item">${impact}</li>`
            ).join('')}
        </ul>
    `;

    // 核心能力
    const coreAbilities = document.getElementById('core-abilities');
    coreAbilities.innerHTML = data.coreAbilities.map(ability => `
        <div class="ability-item">
            <div class="ability-icon">${ability.icon}</div>
            <div class="ability-name">${ability.name}</div>
            <div class="ability-level">${ability.level}</div>
        </div>
    `).join('');
}

// 顯示步驟
function showStep(stepId) {
    document.querySelectorAll('.step-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 返回功能
function goBack(stepId) {
    showStep(stepId);
}

function goBackToPrevious() {
    if (state.previousStep) {
        showStep(state.previousStep);
    }
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('升學與職涯趨勢導航系統已載入');
});
