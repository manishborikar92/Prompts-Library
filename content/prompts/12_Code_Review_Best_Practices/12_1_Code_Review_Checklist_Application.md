# 12.1 Code Review Checklist Application

**Category:** 12. Code Review & Best Practices

---

```
Perform a comprehensive code review of [FILE/MODULE] using the following checklist:

1. **Code Quality**:
   - [ ] Follows project coding standards and conventions
   - [ ] Uses meaningful variable and function names
   - [ ] Functions are focused and do one thing well
   - [ ] Code is DRY (Don't Repeat Yourself)
   - [ ] Appropriate use of comments and documentation

2. **Functionality**:
   - [ ] Code works as intended
   - [ ] Edge cases are handled
   - [ ] Error handling is appropriate
   - [ ] Input validation is implemented
   - [ ] No obvious bugs or logic errors

3. **Performance**:
   - [ ] No obvious performance bottlenecks
   - [ ] Efficient algorithms and data structures
   - [ ] Database queries are optimized
   - [ ] No unnecessary computations in loops
   - [ ] Appropriate caching where needed

4. **Security**:
   - [ ] No SQL injection vulnerabilities
   - [ ] User input is sanitized
   - [ ] Authentication/authorization is correct
   - [ ] Secrets are not hardcoded
   - [ ] HTTPS is used for sensitive data

5. **Testing**:
   - [ ] Unit tests exist and pass
   - [ ] Test coverage is adequate
   - [ ] Tests are meaningful and not just for coverage
   - [ ] Edge cases are tested

6. **Maintainability**:
   - [ ] Code is easy to understand
   - [ ] Complex logic is well-documented
   - [ ] Dependencies are justified and minimal
   - [ ] Code is modular and reusable

Provide detailed feedback for each item that needs improvement.
```