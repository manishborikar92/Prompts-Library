# 12.3 Dependency Audit & Updates

**Category:** 12. Code Review & Best Practices

---

```
Audit and update dependencies for [PROJECT_NAME]:

1. **Dependency Analysis**:
   - List all direct and transitive dependencies
   - Identify outdated packages
   - Check for deprecated packages
   - Find unused dependencies

2. **Security Audit**:
   - Scan for known vulnerabilities
   - Check security advisories
   - Identify packages with security issues
   - Evaluate alternative packages if needed

3. **Version Updates**:
   - Update to latest stable versions (where safe)
   - Test breaking changes
   - Update lockfiles (package-lock.json, Pipfile.lock, etc.)
   - Document version constraints

4. **License Compliance**:
   - Check license compatibility
   - Document all dependency licenses
   - Flag restrictive licenses
   - Ensure compliance with project license

5. **Dependency Management**:
   - Remove unused dependencies
   - Consolidate similar packages
   - Pin versions appropriately
   - Set up automated dependency updates

6. **Documentation**:
   - Update dependency documentation
   - Document known issues or workarounds
   - Provide upgrade guide if needed

Provide updated dependency files with security and compatibility analysis.
```