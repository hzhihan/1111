// Quick navigation test
setTimeout(() => {
    // Select first category
    document.querySelector('[onclick*="selectCategory"]').click();
    
    setTimeout(() => {
        // Select business subcategory
        document.querySelectorAll('[onclick*="selectSubCategory"]')[2].click();
        
        setTimeout(() => {
            // Select department
            document.querySelector('[onclick*="selectDepartment"]').click();
            
            setTimeout(() => {
                // Select career analysis
                document.querySelector('[onclick*="showCareerAnalysis"]').click();
            }, 500);
        }, 500);
    }, 500);
}, 500);
