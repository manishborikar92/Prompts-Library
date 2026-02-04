"""
Merge AI Prompts - Individual Files to Consolidated
Merges all individual prompt files back into a single consolidated file.
"""

import os
from pathlib import Path
from collections import defaultdict


def merge_prompts():
    """Merge individual prompt files back into consolidated file."""
    
    # Category mapping
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
    
    input_dir = Path('individual-prompts')
    if not input_dir.exists():
        print(f"❌ Error: {input_dir} directory not found!")
        return
    
    # Collect all prompts by category
    prompts_by_category = defaultdict(list)
    
    for cat_folder, cat_title in sorted(categories.items()):
        cat_path = input_dir / cat_folder
        if not cat_path.exists():
            continue
        
        # Get all markdown files in category
        md_files = sorted(cat_path.glob('*.md'))
        
        for md_file in md_files:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract prompt title and content
            lines = content.split('\n')
            if lines and lines[0].startswith('# '):
                prompt_title = lines[0][2:].strip()
                
                # Find the separator and get content after it
                try:
                    separator_idx = lines.index('---')
                    prompt_content = '\n'.join(lines[separator_idx+1:]).strip()
                    
                    prompts_by_category[cat_folder].append({
                        'title': prompt_title,
                        'content': prompt_content
                    })
                except ValueError:
                    print(f"⚠️  Warning: No separator found in {md_file}")
    
    # Build consolidated file
    output = []
    output.append("# AI/AI IDE Prompts - Consolidated Reference Guide\n")
    output.append("**Master Edition - All Prompts Consolidated**\n")
    output.append("## Table of Contents\n")
    
    # Add table of contents
    for i, (cat_folder, cat_title) in enumerate(sorted(categories.items()), 1):
        anchor = cat_title.lower().replace(' ', '-').replace('&', '').replace('/', '')
        output.append(f"{i}. [{cat_title}](#{anchor})")
    
    output.append("\n---\n")
    
    # Add all sections
    for cat_folder, cat_title in sorted(categories.items()):
        if cat_folder not in prompts_by_category:
            continue
        
        output.append(f"\n## {cat_title}\n")
        
        for prompt in prompts_by_category[cat_folder]:
            output.append(f"\n### {prompt['title']}\n")
            output.append(f"\n{prompt['content']}\n")
    
    # Write consolidated file
    output_file = Path('AI-Prompts-Master-Consolidated-NEW.md')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))
    
    total_prompts = sum(len(prompts) for prompts in prompts_by_category.values())
    print(f"✅ Successfully merged {total_prompts} prompts!")
    print(f"📄 Output file: {output_file.absolute()}")
    print(f"\n💡 Review the file and rename to 'AI-Prompts-Master-Consolidated.md' if correct")


if __name__ == "__main__":
    merge_prompts()
