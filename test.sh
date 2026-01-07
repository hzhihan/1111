#!/bin/bash
# Simple test script to verify the website functionality

echo "Testing Educational and Career Trend Navigation System"
echo "======================================================"

# Check if required files exist
echo ""
echo "Checking file structure..."
if [ -f "index.html" ]; then
    echo "✓ index.html exists"
else
    echo "✗ index.html missing"
    exit 1
fi

if [ -f "app.js" ]; then
    echo "✓ app.js exists"
else
    echo "✗ app.js missing"
    exit 1
fi

if [ -f "README.md" ]; then
    echo "✓ README.md exists"
else
    echo "✗ README.md missing"
    exit 1
fi

# Verify HTML structure
echo ""
echo "Verifying HTML content..."
if grep -q "升學與職涯趨勢導航系統" index.html; then
    echo "✓ Title found"
else
    echo "✗ Title not found"
    exit 1
fi

if grep -q "第一類組" index.html; then
    echo "✓ Type 1 track found"
else
    echo "✗ Type 1 track not found"
    exit 1
fi

if grep -q "第二類組" index.html; then
    echo "✓ Type 2 track found"
else
    echo "✗ Type 2 track not found"
    exit 1
fi

if grep -q "第三類組" index.html; then
    echo "✓ Type 3 track found"
else
    echo "✗ Type 3 track not found"
    exit 1
fi

if grep -q "數學 A" index.html; then
    echo "✓ Math A option found"
else
    echo "✗ Math A option not found"
    exit 1
fi

if grep -q "薪資分析儀" index.html; then
    echo "✓ Salary analyzer found"
else
    echo "✗ Salary analyzer not found"
    exit 1
fi

if grep -q "AI取代風險" index.html; then
    echo "✓ AI risk indicator found"
else
    echo "✗ AI risk indicator not found"
    exit 1
fi

# Verify JavaScript content
echo ""
echo "Verifying JavaScript content..."
if grep -q "departmentsData" app.js; then
    echo "✓ Department data found"
else
    echo "✗ Department data not found"
    exit 1
fi

if grep -q "initializeSalaryChart" app.js; then
    echo "✓ Salary chart function found"
else
    echo "✗ Salary chart function not found"
    exit 1
fi

if grep -q "learningPaths" app.js; then
    echo "✓ Learning paths data found"
else
    echo "✗ Learning paths data not found"
    exit 1
fi

echo ""
echo "======================================================"
echo "All tests passed! ✓"
echo "======================================================"
