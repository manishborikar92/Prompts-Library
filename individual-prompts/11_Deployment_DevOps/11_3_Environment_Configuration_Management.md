# 11.3 Environment Configuration Management

**Category:** 11. Deployment & DevOps

---

```
Set up comprehensive environment configuration for [PROJECT_NAME]:

1. **Environment Separation**:
   - Development
   - Staging/QA
   - Production
   - (Optional: Local, Testing)

2. **Configuration Structure**:
   - Create environment-specific config files
   - Use .env files for local development
   - Implement config validation on startup
   - Document all configuration options

3. **Secrets Management**:
   - Never commit secrets to version control
   - Use secret management tools ([AWS Secrets Manager/HashiCorp Vault/Azure Key Vault])
   - Implement secret rotation procedures
   - Add secret scanning to CI/CD

4. **Configuration Loading**:
   - Load configs based on environment
   - Provide sensible defaults
   - Validate required configurations
   - Support config overrides

5. **Environment Variables**:
   - List all required environment variables
   - Provide example .env.example file
   - Document expected formats and values
   - Implement type checking/validation

6. **Best Practices**:
   - Use feature flags for gradual rollouts
   - Implement configuration hot-reloading (if applicable)
   - Add configuration change auditing
   - Create configuration documentation

Provide complete configuration setup with examples for each environment.
```