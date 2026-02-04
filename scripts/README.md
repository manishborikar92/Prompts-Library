# AI Prompts Helper Scripts

Collection of Python scripts to manage and work with the AI Prompts collection.

## 📜 Available Scripts

### 1. split_prompts.py
Split the consolidated master file into individual prompt files.

```bash
python scripts/split_prompts.py
```

**What it does:**
- Reads `AI-Prompts-Master-Consolidated.md`
- Creates `individual-prompts/` directory structure
- Splits into 58 individual files organized by 20 categories
- Each file includes title, category, and full prompt content

---

### 2. merge_prompts.py
Merge individual prompt files back into a consolidated file.

```bash
python scripts/merge_prompts.py
```

**What it does:**
- Reads all files from `individual-prompts/` directory
- Combines them into a single consolidated file
- Creates `AI-Prompts-Master-Consolidated-NEW.md`
- Preserves category structure and formatting

**Use case:** After editing individual files, merge them back into master file.

---

### 3. search_prompts.py
Search through all prompt files for keywords or patterns.

```bash
# Basic search
python scripts/search_prompts.py "API"

# Case-sensitive search
python scripts/search_prompts.py "Database" --case-sensitive

# Regex search
python scripts/search_prompts.py "test.*coverage"

# Multiple terms (OR)
python scripts/search_prompts.py "database|API|testing"
```

**What it does:**
- Searches all prompt files for matching text
- Supports regex patterns
- Shows file location, category, and match count
- Case-insensitive by default

**Examples:**
```bash
python scripts/search_prompts.py "security"
python scripts/search_prompts.py "Python.*script"
python scripts/search_prompts.py "GUI|interface"
```

---

### 4. list_prompts.py
Display all available prompts organized by category.

```bash
# List all prompts
python scripts/list_prompts.py

# List with content preview
python scripts/list_prompts.py --preview
python scripts/list_prompts.py -p

# Show help
python scripts/list_prompts.py --help
```

**What it does:**
- Lists all prompts organized by category
- Shows prompt titles and filenames
- Optional content preview (first 100 characters)
- Displays total count statistics

---

### 5. validate_prompts.py
Check the integrity and consistency of all prompt files.

```bash
python scripts/validate_prompts.py
```

**What it does:**
- Validates file structure and format
- Checks for required elements (title, category, separator)
- Verifies filename format (X_Y_Title.md)
- Ensures all expected categories exist
- Reports any issues found

**Validation checks:**
- ✓ File starts with `# Title`
- ✓ Contains `**Category:**` line
- ✓ Has separator `---`
- ✓ Has content after separator
- ✓ Filename follows `X_Y_Title.md` format
- ✓ File is not empty
- ✓ All 20 category directories exist

---

## 🚀 Quick Start

### Setup
No installation required! Just Python 3.6+

```bash
# Check Python version
python --version

# Run any script
python scripts/script_name.py
```

### Common Workflows

**1. Split master file into individual files:**
```bash
python scripts/split_prompts.py
```

**2. Find all prompts about testing:**
```bash
python scripts/search_prompts.py "test"
```

**3. List all available prompts:**
```bash
python scripts/list_prompts.py
```

**4. Validate all files:**
```bash
python scripts/validate_prompts.py
```

**5. After editing, merge back to master:**
```bash
python scripts/merge_prompts.py
```

---

## 📁 Directory Structure

```
.
├── scripts/
│   ├── README.md                 # This file
│   ├── split_prompts.py          # Split master → individual
│   ├── merge_prompts.py          # Merge individual → master
│   ├── search_prompts.py         # Search prompts
│   ├── list_prompts.py           # List all prompts
│   └── validate_prompts.py       # Validate files
├── individual-prompts/           # Individual prompt files
│   ├── 01_Code_Analysis_Bug_Fixing/
│   ├── 02_Code_Refactoring_Optimization/
│   └── ...
└── AI-Prompts-Master-Consolidated.md  # Master file
```

---

## 💡 Tips

1. **Before editing:** Always validate files first
   ```bash
   python scripts/validate_prompts.py
   ```

2. **After editing:** Merge and validate
   ```bash
   python scripts/merge_prompts.py
   python scripts/validate_prompts.py
   ```

3. **Finding prompts:** Use search with regex
   ```bash
   python scripts/search_prompts.py "API|REST|endpoint"
   ```

4. **Quick overview:** List with preview
   ```bash
   python scripts/list_prompts.py --preview
   ```

---

## 🔧 Requirements

- Python 3.6 or higher
- No external dependencies (uses only standard library)

---

## 📝 Notes

- All scripts use UTF-8 encoding for proper character support
- Scripts are safe to run multiple times
- Original files are never modified (merge creates new file)
- All paths are relative to project root

---

**Created:** February 4, 2026
**Version:** 1.0
