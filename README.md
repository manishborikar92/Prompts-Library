# Prompts Library

**A curated collection of 58+ professional AI prompts for software development**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Prompts](https://img.shields.io/badge/Prompts-58-blue.svg)]()
[![Categories](https://img.shields.io/badge/Categories-20-green.svg)]()

---

## 🎯 What is This?

**Prompts Library** is an open-source collection of carefully crafted AI prompts designed for software developers. Use these prompts with ChatGPT, Claude, or any AI assistant to accelerate your development workflow.

**PromptBase** is the web platform (coming soon) that brings this library to life with search, management, and AI-powered features.

---

## ✨ Features

- 📚 **58 Professional Prompts** - Covering the entire development lifecycle
- 🗂️ **20 Categories** - From code analysis to deployment
- 🔍 **Easy Search** - Find prompts quickly with Python scripts
- 📝 **Ready to Use** - Copy, customize, and use immediately
- 🆓 **Free & Open Source** - MIT licensed

---

## 🚀 Quick Start

### Browse Prompts

```bash
# Clone the repository
git clone https://github.com/manishborikar92/Prompts-Library.git
cd Prompts-Library

# List all prompts
python scripts/list_prompts.py

# Search for specific prompts
python scripts/search_prompts.py "API"

# Validate prompt files
python scripts/validate_prompts.py
```

### Use a Prompt

1. Browse `individual-prompts/` folder or use search
2. Open the prompt file you need
3. Copy the prompt text
4. Customize placeholders (e.g., `[FILE_NAME]`, `[PROJECT]`)
5. Paste into your AI assistant

---

## 📚 Prompt Categories

| Category | Prompts | Description |
|----------|---------|-------------|
| Code Analysis & Bug Fixing | 5 | Line-by-line analysis, debugging |
| Code Refactoring & Optimization | 3 | Performance, documentation |
| GUI Development & Integration | 3 | UI development, state management |
| File Conversion & Format Support | 2 | Format conversion, compatibility |
| Documentation & User Manuals | 2 | Technical writing, guides |
| Comparative Analysis & Code Ranking | 4 | Code comparison, quality assessment |
| Project Structure & Path Verification | 1 | Project organization |
| Testing & Quality Assurance | 4 | Test generation, coverage |
| API & Integration Development | 4 | REST APIs, SDKs, webhooks |
| Database & Data Management | 4 | Schema design, optimization |
| Deployment & DevOps | 4 | CI/CD, Docker, monitoring |
| Code Review & Best Practices | 4 | Review checklists, standards |
| Debugging & Troubleshooting | 4 | Root cause analysis, profiling |
| Architecture & Design Patterns | 4 | System design, patterns |
| Security & Vulnerability Assessment | 4 | Security audits, OWASP |
| Web Development & Frontend | 1 | Next.js, React |
| UI/UX Design & Layout | 1 | Interface design |
| Notification & Messaging | 1 | Toast notifications |
| Documentation Organization | 2 | Docs cleanup, markdown |
| Feature Removal & Cleanup | 1 | Code cleanup |

**Total: 58 prompts across 20 categories**

---

## 🛠️ Helper Scripts

Python scripts to manage the prompt library:

```bash
# List all prompts with optional preview
python scripts/list_prompts.py
python scripts/list_prompts.py --preview

# Search prompts by keyword or regex
python scripts/search_prompts.py "database"
python scripts/search_prompts.py "API|REST"

# Validate all prompt files
python scripts/validate_prompts.py

# Split master file into individual files
python scripts/split_prompts.py

# Merge individual files back to master
python scripts/merge_prompts.py
```

See [scripts/README.md](scripts/README.md) for detailed documentation.

---

## 📖 Documentation

- **[OVERVIEW.md](OVERVIEW.md)** - Complete package overview
- **[QUICK_START.md](QUICK_START.md)** - Quick reference guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project summary
- **[docs/](docs/)** - Development documentation for PromptBase web app

---

## 🌐 PromptBase Web Platform (Coming Soon)

We're building a modern web application to make this library even more powerful:

- 🔍 **Advanced Search** - Semantic search with AI
- ✏️ **Prompt Editor** - Create and edit prompts online
- 🤖 **AI Assistant** - Get prompt suggestions from Google Gemini
- 📊 **Analytics** - Track usage and popularity
- 🔗 **Sharing** - Share prompts with your team
- 📚 **Collections** - Organize prompts your way

**Tech Stack:** Next.js 15, React 19, Tailwind v4, Supabase, Google AI

See [docs/DEVELOPMENT_PLAN.md](docs/DEVELOPMENT_PLAN.md) for details.

---

## 💡 Example Usage

### Code Review Prompt
```markdown
File: individual-prompts/01_Code_Analysis_Bug_Fixing/1_3_Quick_Code_Review_Issue_Resolution.md

Review the code thoroughly, line by line. Identify and fix any bugs 
or issues. Remove unnecessary or redundant code without changing the 
existing functionality. Refactor the code to improve its structure, 
readability, and organization, following best practices.
```

### API Design Prompt
```markdown
File: individual-prompts/09_API_Integration_Development/9_1_RESTful_API_Design_Implementation.md

Design and implement a RESTful API for [FEATURE/MODULE] with the 
following requirements:
1. API Endpoints - Define all necessary endpoints...
2. Request/Response Format - Use JSON for data exchange...
[Full prompt in file]
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Add New Prompts
1. Fork the repository
2. Create a new prompt file in the appropriate category
3. Follow the existing format
4. Submit a pull request

### Improve Existing Prompts
1. Open an issue describing the improvement
2. Make your changes
3. Submit a pull request

### Report Issues
- Found a bug? [Open an issue](https://github.com/manishborikar92/Prompts-Library/issues)
- Have a suggestion? [Start a discussion](https://github.com/manishborikar92/Prompts-Library/discussions)

---

## 📄 License

MIT License - Free to use, modify, and distribute.

See [LICENSE](LICENSE) for details.

---

## 🔗 Links

- **Repository:** https://github.com/manishborikar92/Prompts-Library
- **Web Platform:** https://promptbase.dev (coming soon)
- **Documentation:** [docs/](docs/)
- **Issues:** https://github.com/manishborikar92/Prompts-Library/issues

---

## 🙏 Acknowledgments

- All contributors to the prompt library
- The AI community for inspiration
- Open-source projects that made this possible

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/manishborikar92/Prompts-Library?style=social)
![GitHub forks](https://img.shields.io/github/forks/manishborikar92/Prompts-Library?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/manishborikar92/Prompts-Library?style=social)

---

**Made with ❤️ for developers by developers**

**Prompts Library** → The collection  
**PromptBase** → The platform

## Directory Structure

Each numbered directory represents a category:

### Code Analysis Bug Fixing

- `1_1_Comprehensive_Line_by_Line_Script_Analysis.md` - Comprehensive Line by Line Script Analysis
- `1_2_Deep_Review_Cleanup_for_Large_Python_Scripts.md` - Deep Review Cleanup for Large Python Scripts
- `1_3_Quick_Code_Review_Issue_Resolution.md` - Quick Code Review Issue Resolution
- `1_4_Comprehensive_Analysis_with_Complete_Corrected_Version.md` - Comprehensive Analysis with Complete Corrected Version
- `1_5_Deep_Systematic_Analysis_for_Complex_Files.md` - Deep Systematic Analysis for Complex Files

### Code Refactoring Optimization

- `2_1_Performance_Optimization_Up_to_50x_Speed_Improvement.md` - Performance Optimization Up to 50x Speed Improvement
- `2_2_Code_Enhancement_with_Documentation.md` - Code Enhancement with Documentation
- `2_3_Terminal_Output_Enhancement_with_Rich_Library.md` - Terminal Output Enhancement with Rich Library

### GUI Development Integration

- `3_1_GUI_Integration_with_Visualization_Capabilities.md` - GUI Integration with Visualization Capabilities
- `3_2_Power_Management_State_Machine_Implementation.md` - Power Management State Machine Implementation
- `3_3_Comprehensive_GUI_State_Management_Workflow.md` - Comprehensive GUI State Management Workflow

### File Conversion Format Support

- `4_1_Comparative_Analysis_of_Conversion_Scripts.md` - Comparative Analysis of Conversion Scripts
- `4_2_Multi_Version_Format_Support_Enhancement.md` - Multi Version Format Support Enhancement

### Documentation User Manuals

- `5_1_Comprehensive_Document_Consolidation.md` - Comprehensive Document Consolidation
- `5_2_Complete_GUI_User_Manual_Development.md` - Complete GUI User Manual Development

### Comparative Analysis Code Ranking

- `6_1_Full_Stack_Code_Comparison_Ranking.md` - Full Stack Code Comparison Ranking
- `6_2_GUI_Focused_Code_Comparison_Ranking.md` - GUI Focused Code Comparison Ranking
- `6_3_Document_Quality_Accuracy_Assessment.md` - Document Quality Accuracy Assessment
- `6_4_Simple_Document_Quality_Comparison.md` - Simple Document Quality Comparison

### Project Structure Path Verification

- `7_1_Folder_Structure_Path_Validation.md` - Folder Structure Path Validation

### Testing Quality Assurance

- `8_1_Comprehensive_Test_Suite_Generation.md` - Comprehensive Test Suite Generation
- `8_2_Test_Coverage_Analysis_Improvement.md` - Test Coverage Analysis Improvement
- `8_3_E2E_and_Integration_Test_Development.md` - E2E and Integration Test Development
- `8_4_Performance_Load_Testing.md` - Performance Load Testing

### API Integration Development

- `9_1_RESTful_API_Design_Implementation.md` - RESTful API Design Implementation
- `9_2_API_ClientSDK_Development.md` - API ClientSDK Development
- `9_3_Third_Party_Integration_Implementation.md` - Third Party Integration Implementation
- `9_4_Webhook_Implementation.md` - Webhook Implementation

### Database Data Management

- `10_1_Database_Schema_Design.md` - Database Schema Design
- `10_2_Database_Query_Optimization.md` - Database Query Optimization
- `10_3_Data_Migration_Script_Development.md` - Data Migration Script Development
- `10_4_Data_Validation_Cleaning_Pipeline.md` - Data Validation Cleaning Pipeline

### Deployment DevOps

- `11_1_CICD_Pipeline_Setup.md` - CICD Pipeline Setup
- `11_2_Docker_Containerization.md` - Docker Containerization
- `11_3_Environment_Configuration_Management.md` - Environment Configuration Management
- `11_4_Application_Monitoring_Logging_Setup.md` - Application Monitoring Logging Setup

### Code Review Best Practices

- `12_1_Code_Review_Checklist_Application.md` - Code Review Checklist Application
- `12_2_Code_Standards_Style_Guide_Enforcement.md` - Code Standards Style Guide Enforcement
- `12_3_Dependency_Audit_Updates.md` - Dependency Audit Updates
- `12_4_Legacy_Code_Modernization.md` - Legacy Code Modernization

### Debugging Troubleshooting

- `13_1_Bug_Investigation_Root_Cause_Analysis.md` - Bug Investigation Root Cause Analysis
- `13_2_Performance_Profiling_Bottleneck_Identification.md` - Performance Profiling Bottleneck Identification
- `13_3_Memory_Leak_Detection_Resolution.md` - Memory Leak Detection Resolution
- `13_4_Error_Log_Analysis_Alert_Reduction.md` - Error Log Analysis Alert Reduction

### Architecture Design Patterns

- `14_1_System_Architecture_Design.md` - System Architecture Design
- `14_2_Design_Pattern_Application.md` - Design Pattern Application
- `14_3_Microservices_Decomposition.md` - Microservices Decomposition
- `14_4_Event_Driven_Architecture_Implementation.md` - Event Driven Architecture Implementation

### Security Vulnerability Assessment

- `15_1_Security_Audit_Vulnerability_Assessment.md` - Security Audit Vulnerability Assessment
- `15_2_Secure_Coding_Review.md` - Secure Coding Review
- `15_3_OWASP_Top_10_Compliance_Check.md` - OWASP Top 10 Compliance Check
- `15_4_Penetration_Testing_Simulation.md` - Penetration Testing Simulation

### Web Development Frontend Frameworks

- `16_1_Nextjs_Application_Restructuring.md` - Nextjs Application Restructuring

### UIUX Design Layout Optimization

- `17_1_UI_Layout_Redesign.md` - UI Layout Redesign

### Notification Messaging Systems

- `18_1_Toast_Notification_Standardization.md` - Toast Notification Standardization

### Documentation Organization Cleanup

- `19_1_Documentation_Audit_and_Cleanup.md` - Documentation Audit and Cleanup
- `19_2_Markdown_Documentation_Enhancement_and_Cleanup.md` - Markdown Documentation Enhancement and Cleanup

### Feature Removal Code Cleanup

- `20_1_Complete_Feature_Removal.md` - Complete Feature Removal

## Usage

1. Navigate to the appropriate category directory
2. Open the specific prompt file you need
3. Copy the prompt and customize the placeholders (e.g., `[FILE_NAME]`, `[PROJECT]`) for your use case

## Source

All prompts are extracted from: `AI-Prompts-Master-Consolidated.md`
