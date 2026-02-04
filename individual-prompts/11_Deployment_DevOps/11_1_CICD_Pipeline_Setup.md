# 11.1 CI/CD Pipeline Setup

**Category:** 11. Deployment & DevOps

---

```
Design and implement a complete CI/CD pipeline for [PROJECT_NAME]:

1. **Pipeline Stages**:
   - Source code checkout
   - Dependency installation
   - Code linting and formatting checks
   - Unit test execution
   - Integration test execution
   - Security scanning
   - Build artifacts
   - Deploy to staging
   - Deploy to production (with approval)

2. **Build Configuration**:
   - Define build scripts
   - Set environment variables
   - Configure build triggers
   - Implement caching for dependencies

3. **Testing in Pipeline**:
   - Run all test suites automatically
   - Generate test coverage reports
   - Fail pipeline on test failures
   - Archive test results

4. **Deployment Strategy**:
   - Implement blue-green or canary deployment
   - Add health checks before routing traffic
   - Configure rollback mechanisms
   - Set up deployment notifications

5. **Tools & Platform**:
   - Platform: [GitHub Actions/GitLab CI/Jenkins/CircleCI/etc.]
   - Container registry: [Docker Hub/ECR/GCR/etc.]
   - Deployment target: [AWS/Azure/GCP/Kubernetes/etc.]

6. **Security**:
   - Scan for vulnerabilities
   - Check dependencies for known issues
   - Implement secret management
   - Add SAST/DAST scanning

Provide complete CI/CD configuration files with documentation.
```