"""
List AI Prompts
Display all available prompts organized by category.
"""

from pathlib import Path
from collections import defaultdict


def list_prompts(show_content=False):
    """
    List all available prompts.
    
    Args:
        show_content: Whether to show prompt content preview
    """
    
    input_dir = Path('individual-prompts')
    if not input_dir.exists():
        print(f"❌ Error: {input_dir} directory not found!")
        return
    
    # Collect prompts by category
    prompts_by_category = defaultdict(list)
    
    for md_file in sorted(input_dir.rglob('*.md')):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract title
        lines = content.split('\n')
        title = lines[0][2:].strip() if lines and lines[0].startswith('# ') else md_file.name
        
        # Get category
        category = md_file.parent.name
        
        # Get preview if requested
        preview = None
        if show_content:
            # Get first 100 chars after separator
            try:
                separator_idx = content.index('---')
                content_start = content[separator_idx+3:].strip()
                preview = content_start[:100] + '...' if len(content_start) > 100 else content_start
            except ValueError:
                pass
        
        prompts_by_category[category].append({
            'title': title,
            'file': md_file.name,
            'preview': preview
        })
    
    # Display results
    total_prompts = 0
    print("\n📚 AI Prompts Collection\n")
    print("=" * 80)
    
    for category in sorted(prompts_by_category.keys()):
        prompts = prompts_by_category[category]
        total_prompts += len(prompts)
        
        # Format category name
        cat_display = category.replace('_', ' ').title()
        print(f"\n📁 {cat_display} ({len(prompts)} prompts)")
        print("-" * 80)
        
        for i, prompt in enumerate(prompts, 1):
            print(f"\n  {i}. {prompt['title']}")
            print(f"     File: {prompt['file']}")
            
            if show_content and prompt['preview']:
                print(f"     Preview: {prompt['preview']}")
    
    print("\n" + "=" * 80)
    print(f"\n✅ Total: {total_prompts} prompts across {len(prompts_by_category)} categories\n")


def main():
    """Main function to handle command line arguments."""
    import sys
    
    show_content = '--preview' in sys.argv or '-p' in sys.argv
    
    if '--help' in sys.argv or '-h' in sys.argv:
        print("Usage: python list_prompts.py [--preview|-p]")
        print("\nOptions:")
        print("  --preview, -p    Show content preview for each prompt")
        return
    
    list_prompts(show_content)


if __name__ == "__main__":
    main()
