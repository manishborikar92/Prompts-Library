"""
Validate AI Prompts
Check the integrity and consistency of prompt files.
"""

from pathlib import Path
import re


def validate_prompts():
    """Validate all prompt files for consistency and integrity."""
    
    input_dir = Path('individual-prompts')
    if not input_dir.exists():
        print(f"❌ Error: {input_dir} directory not found!")
        return
    
    issues = []
    valid_files = 0
    total_files = 0
    
    print("\n🔍 Validating AI Prompts Collection...\n")
    
    # Expected categories
    expected_categories = [
        "01_Code_Analysis_Bug_Fixing",
        "02_Code_Refactoring_Optimization",
        "03_GUI_Development_Integration",
        "04_File_Conversion_Format_Support",
        "05_Documentation_User_Manuals",
        "06_Comparative_Analysis_Code_Ranking",
        "07_Project_Structure_Path_Verification",
        "08_Testing_Quality_Assurance",
        "09_API_Integration_Development",
        "10_Database_Data_Management",
        "11_Deployment_DevOps",
        "12_Code_Review_Best_Practices",
        "13_Debugging_Troubleshooting",
        "14_Architecture_Design_Patterns",
        "15_Security_Vulnerability_Assessment",
        "16_Web_Development_Frontend_Frameworks",
        "17_UIUX_Design_Layout_Optimization",
        "18_Notification_Messaging_Systems",
        "19_Documentation_Organization_Cleanup",
        "20_Feature_Removal_Code_Cleanup"
    ]
    
    # Check for missing categories
    for cat in expected_categories:
        cat_path = input_dir / cat
        if not cat_path.exists():
            issues.append(f"❌ Missing category directory: {cat}")
    
    # Validate each file
    for md_file in sorted(input_dir.rglob('*.md')):
        total_files += 1
        file_issues = []
        
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        
        # Check 1: File should start with # title
        if not lines or not lines[0].startswith('# '):
            file_issues.append("Missing title (should start with '# ')")
        
        # Check 2: Should have category line
        if '**Category:**' not in content:
            file_issues.append("Missing category line")
        
        # Check 3: Should have separator
        if '---' not in content:
            file_issues.append("Missing separator (---)")
        
        # Check 4: Should have content after separator
        try:
            separator_idx = content.index('---')
            content_after = content[separator_idx+3:].strip()
            if not content_after:
                file_issues.append("No content after separator")
        except ValueError:
            pass
        
        # Check 5: Filename format (X_Y_Title.md)
        filename = md_file.name
        if not re.match(r'^\d+_\d+_.*\.md$', filename):
            file_issues.append(f"Invalid filename format: {filename}")
        
        # Check 6: File should not be empty
        if len(content.strip()) < 50:
            file_issues.append("File appears to be empty or too short")
        
        if file_issues:
            issues.append(f"\n📄 {md_file.relative_to(input_dir)}")
            for issue in file_issues:
                issues.append(f"   ⚠️  {issue}")
        else:
            valid_files += 1
    
    # Display results
    print("=" * 80)
    
    if issues:
        print("\n⚠️  Issues Found:\n")
        for issue in issues:
            print(issue)
        print("\n" + "=" * 80)
    
    print(f"\n📊 Validation Summary:")
    print(f"   Total files checked: {total_files}")
    print(f"   Valid files: {valid_files}")
    print(f"   Files with issues: {total_files - valid_files}")
    
    if not issues:
        print("\n✅ All prompts are valid!\n")
    else:
        print(f"\n⚠️  Found {len([i for i in issues if i.startswith('📄')])} files with issues\n")


if __name__ == "__main__":
    validate_prompts()
