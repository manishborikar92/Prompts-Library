"""
Split AI Prompts - Consolidated to Individual Files
Splits the master consolidated file into individual prompt files organized by category.
"""

import re
import os
from pathlib import Path


def split_prompts():
    """Split the consolidated prompts file into individual files."""
    
    # Define the category structure
    categories = {
        "01_Code_Analysis_Bug_Fixing": "1. Code Analysis & Bug Fixing",
        "02_Code_Refactoring_Optimization": "2. Code Refactoring & Optimization",
        "03_GUI_Development_Integration": "3. GUI Development & Integration",
        "04_File_Conversion_Format_Support": "4. File Conversion & Format Support",
        "05_Documentation_User_Manuals": "5. Documentation & User Manuals",
        "06_Comparative_Analysis_Code_Ranking": "6. Comparative Analysis & Code Ranking",
        "07_Project_Structure_Path_Verification": "7. Project Structure & Path Verification",
        "08_Testing_Quality_Assurance": "8. Testing & Quality Assurance",
        "09_API_Integration_Development": "9. API & Integration Development",
        "10_Database_Data_Management": "10. Database & Data Management",
        "11_Deployment_DevOps": "11. Deployment & DevOps",
        "12_Code_Review_Best_Practices": "12. Code Review & Best Practices",
        "13_Debugging_Troubleshooting": "13. Debugging & Troubleshooting",
        "14_Architecture_Design_Patterns": "14. Architecture & Design Patterns",
        "15_Security_Vulnerability_Assessment": "15. Security & Vulnerability Assessment",
        "16_Web_Development_Frontend_Frameworks": "16. Web Development & Frontend Frameworks",
        "17_UIUX_Design_Layout_Optimization": "17. UI/UX Design & Layout Optimization",
        "18_Notification_Messaging_Systems": "18. Notification & Messaging Systems",
        "19_Documentation_Organization_Cleanup": "19. Documentation Organization & Cleanup",
        "20_Feature_Removal_Code_Cleanup": "20. Feature Removal & Code Cleanup"
    }
    
    # Read the consolidated file
    consolidated_file = Path('AI-Prompts-Master-Consolidated.md')
    if not consolidated_file.exists():
        print(f"❌ Error: {consolidated_file} not found!")
        return
    
    with open(consolidated_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Create individual-prompts directory
    output_dir = Path('individual-prompts')
    output_dir.mkdir(exist_ok=True)
    
    # Split content by main sections
    sections = re.split(r'\n## (\d+\. [^\n]+)\n', content)
    
    total_files = 0
    
    # Process each section
    for i in range(1, len(sections), 2):
        if i+1 < len(sections):
            section_title = sections[i]
            section_content = sections[i+1]
            
            # Find matching category folder
            cat_folder = None
            for folder, title in categories.items():
                if title == section_title:
                    cat_folder = folder
                    break
            
            if not cat_folder:
                continue
            
            # Create category directory
            cat_path = output_dir / cat_folder
            cat_path.mkdir(exist_ok=True)
            
            # Split into individual prompts
            prompts = re.split(r'\n### (\d+\.\d+ [^\n]+)\n', section_content)
            
            for j in range(1, len(prompts), 2):
                if j+1 < len(prompts):
                    prompt_title = prompts[j]
                    prompt_content = prompts[j+1].strip()
                    
                    # Create filename with proper format (X_Y_Title.md)
                    parts = prompt_title.split(' ', 1)
                    number = parts[0].replace('.', '_')  # Convert 1.1 to 1_1
                    title_part = parts[1] if len(parts) > 1 else prompt_title
                    
                    filename = f"{number}_{title_part}"
                    filename = filename.replace(' ', '_').replace('/', '').replace('&', '')
                    filename = re.sub(r'[^\w\s_-]', '', filename)
                    filename = filename.replace('__', '_') + '.md'
                    
                    # Create file content
                    file_content = f"# {prompt_title}\n\n"
                    file_content += f"**Category:** {section_title}\n\n"
                    file_content += "---\n\n"
                    file_content += prompt_content
                    
                    # Write file
                    filepath = cat_path / filename
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(file_content)
                    
                    total_files += 1
                    print(f"✓ Created: {filepath}")
    
    print(f"\n✅ Successfully split {total_files} prompts into individual files!")
    print(f"📁 Output directory: {output_dir.absolute()}")


if __name__ == "__main__":
    split_prompts()
