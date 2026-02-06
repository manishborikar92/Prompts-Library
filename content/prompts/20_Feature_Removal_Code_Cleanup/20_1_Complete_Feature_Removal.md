# 20.1 Complete Feature Removal

**Category:** 20. Feature Removal & Code Cleanup

---

```
Remove "[FEATURE_NAME]" and all its related functionality from the code completely and properly, following best-in-class implementation practices.

**Requirements**:

1. **Identify All Related Code**:
   - Find all functions, classes, and methods related to the feature
   - Locate UI components and event handlers
   - Identify database tables, migrations, or schema changes
   - Find configuration settings and environment variables
   - Locate API endpoints and routes
   - Identify tests related to the feature

2. **Dependencies Analysis**:
   - Check for dependencies on this feature
   - Identify code that calls the feature
   - Find imports and references
   - Locate documentation references

3. **Safe Removal**:
   - Remove all feature code
   - Remove related tests
   - Update documentation
   - Remove database migrations (or add new migrations to remove tables)
   - Update configuration files
   - Remove unused dependencies

4. **Verification**:
   - Ensure application still compiles/runs
   - Run all remaining tests
   - Check for broken references
   - Verify UI still functions correctly
   - Test affected workflows

5. **Cleanup**:
   - Remove commented code
   - Clean up imports
   - Update README and documentation
   - Remove feature flags (if applicable)

Provide the complete updated code with clear documentation of what was removed and why.
```

---

## Usage Guidelines

### How to Use These Prompts

1. **Replace Placeholders**: Update bracketed placeholders like `[SCRIPT_NAME]`, `[FILE_TYPE]`, `[DOCUMENTATION_PATH]` with your actual values.

2. **Customize Context**: Add specific context about your project, technology stack, or requirements where needed.

3. **Combine Prompts**: Feel free to combine multiple prompts for complex tasks. For example, use the "Deep Review & Cleanup" prompt followed by the "Performance Optimization" prompt.

4. **Iterate**: Start with analysis prompts before moving to implementation prompts for best results.

5. **Provide Context**: Always include relevant code files, documentation, or project structure when using these prompts.

### Best Practices

- **Be Specific**: The more context you provide, the better the AI can assist you.
- **Start Simple**: Begin with analysis and understanding before requesting major changes.
- **Verify Output**: Always review and test AI-generated code before deploying.
- **Iterative Approach**: Use phased prompts for large refactoring tasks.
- **Document Changes**: Keep track of what changes were made and why.

### Prompt Categories Quick Reference

| Category | Use When |
|----------|----------|
| Code Analysis & Bug Fixing | You need to understand, debug, or fix existing code |
| Code Refactoring & Optimization | You want to improve code quality, performance, or structure |
| GUI Development & Integration | You're building or improving user interfaces |
| File Conversion & Format Support | You're working with file format conversions or multi-version support |
| Documentation & User Manuals | You need to create or consolidate documentation |
| Comparative Analysis & Code Ranking | You have multiple implementations and need to choose the best one |
| Project Structure & Path Verification | You're reorganizing project structure or verifying paths |
| Testing & Quality Assurance | You need to create tests, improve coverage, or validate quality |
| API & Integration Development | You're building APIs, SDKs, or integrating with third-party services |
| Database & Data Management | You're working with databases, schemas, queries, or data pipelines |
| Deployment & DevOps | You need CI/CD, containerization, or infrastructure setup |
| Code Review & Best Practices | You want to enforce standards, review code, or modernize legacy code |
| Debugging & Troubleshooting | You're investigating bugs, performance issues, or memory leaks |
| Architecture & Design Patterns | You're designing system architecture or applying design patterns |
| Security & Vulnerability Assessment | You need security audits, vulnerability scanning, or secure coding review |
| Web Development & Frontend Frameworks | You're working with React, Next.js, or other frontend frameworks |
| UI/UX Design & Layout Optimization | You need to improve layouts, responsiveness, or accessibility |
| Notification & Messaging Systems | You're implementing or standardizing notifications and messages |
| Documentation Organization & Cleanup | You need to organize, consolidate, or clean up documentation |
| Feature Removal & Code Cleanup | You need to remove features or clean up dead code |

---

## Version History

- **v3.0 (Master Edition)** - Added 5 new categories with 7 additional prompts (Web Development, UI/UX Design, Notification Systems, Documentation Cleanup, Feature Removal). Enhanced Section 1 with Deep Systematic Analysis prompt. Total: 54 prompts across 20 categories.
- **v2.0 (Enhanced)** - Added 8 new categories with 32 additional prompts (Testing, API, Database, DevOps, Code Review, Debugging, Architecture, Security)
- **v1.0** - Initial consolidation of all prompts from source documents
- Created: February 2026

---

## Notes

- These prompts are designed to work with various AI assistants and AI IDEs
- Adjust the level of detail and specificity based on your AI tool's capabilities
- Some prompts reference specific technologies (e.g., Jetson, WebSocket, ROS, Next.js) - adapt these to your use case
- Always review AI-generated code for security, correctness, and adherence to your project standards
- The master edition includes **54 total prompts across 20 categories** for comprehensive development support
- All prompts follow best-in-class implementation practices and industry standards
- New prompts added focus on web development, UI/UX optimization, notifications, documentation organization, and feature cleanup

---

*This master document consolidates prompts from multiple sources and represents a comprehensive reference for AI-assisted development tasks across all stages of the software development lifecycle.*