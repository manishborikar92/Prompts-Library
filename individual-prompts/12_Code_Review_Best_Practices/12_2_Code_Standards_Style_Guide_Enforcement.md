# 12.2 Code Standards & Style Guide Enforcement

**Category:** 12. Code Review & Best Practices

---

```
Review [PROJECT_NAME] codebase and enforce coding standards:

1. **Style Guide Compliance**:
   - Apply [PEP 8/Google Style/Airbnb/Standard/etc.]
   - Check naming conventions (variables, functions, classes)
   - Verify indentation and formatting
   - Ensure consistent code structure

2. **Linting & Formatting**:
   - Run linters ([pylint/eslint/rubocop/etc.])
   - Apply auto-formatters ([black/prettier/etc.])
   - Fix linting errors and warnings
   - Configure linting rules in project

3. **Documentation Standards**:
   - Add/update docstrings for all functions
   - Ensure comments explain "why" not "what"
   - Update README and inline documentation
   - Remove outdated or misleading comments

4. **Best Practices**:
   - Remove magic numbers (use constants)
   - Eliminate code duplication
   - Improve function composition
   - Apply SOLID principles

5. **Type Hints & Annotations** (for applicable languages):
   - Add type hints to function signatures
   - Use appropriate types from typing module
   - Add return type annotations
   - Enable static type checking

6. **Configuration**:
   - Provide linting configuration files
   - Set up pre-commit hooks
   - Add formatting checks to CI/CD
   - Document coding standards

Apply all corrections and provide updated, standards-compliant code.
```