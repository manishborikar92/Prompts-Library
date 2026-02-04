"""
Search AI Prompts
Search through all prompt files for specific keywords or phrases.
"""

import sys
import re
from pathlib import Path


def search_prompts(query, case_sensitive=False):
    """
    Search for a query string in all prompt files.
    
    Args:
        query: Search string
        case_sensitive: Whether to perform case-sensitive search
    """
    
    input_dir = Path('individual-prompts')
    if not input_dir.exists():
        print(f"❌ Error: {input_dir} directory not found!")
        return
    
    # Prepare search pattern
    flags = 0 if case_sensitive else re.IGNORECASE
    try:
        pattern = re.compile(query, flags)
    except re.error as e:
        print(f"❌ Invalid regex pattern: {e}")
        return
    
    results = []
    
    # Search through all markdown files
    for md_file in input_dir.rglob('*.md'):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if pattern matches
        matches = pattern.findall(content)
        if matches:
            # Extract title
            lines = content.split('\n')
            title = lines[0][2:].strip() if lines and lines[0].startswith('# ') else md_file.name
            
            # Get category from path
            category = md_file.parent.name
            
            results.append({
                'file': md_file,
                'title': title,
                'category': category,
                'matches': len(matches)
            })
    
    # Display results
    if not results:
        print(f"❌ No results found for: '{query}'")
        return
    
    print(f"\n🔍 Found {len(results)} file(s) matching '{query}':\n")
    
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   📁 Category: {result['category']}")
        print(f"   📄 File: {result['file'].relative_to(input_dir)}")
        print(f"   🎯 Matches: {result['matches']}")
        print()


def main():
    """Main function to handle command line arguments."""
    
    if len(sys.argv) < 2:
        print("Usage: python search_prompts.py <query> [--case-sensitive]")
        print("\nExamples:")
        print("  python search_prompts.py 'API'")
        print("  python search_prompts.py 'test.*coverage' --case-sensitive")
        print("  python search_prompts.py 'database|API'")
        return
    
    query = sys.argv[1]
    case_sensitive = '--case-sensitive' in sys.argv
    
    search_prompts(query, case_sensitive)


if __name__ == "__main__":
    main()
