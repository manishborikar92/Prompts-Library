# 11.2 Docker Containerization

**Category:** 11. Deployment & DevOps

---

```
Containerize [APPLICATION_NAME] using Docker:

1. **Dockerfile Creation**:
   - Use appropriate base image
   - Optimize layer caching
   - Minimize image size (multi-stage builds)
   - Set correct working directory and user
   - Copy only necessary files

2. **Application Configuration**:
   - Use environment variables for configuration
   - Externalize secrets and credentials
   - Configure logging to stdout/stderr
   - Set up health check endpoints

3. **Docker Compose (if applicable)**:
   - Define all services (app, database, cache, etc.)
   - Configure service dependencies
   - Set up networking between services
   - Define volume mounts for data persistence

4. **Optimization**:
   - Use .dockerignore to exclude unnecessary files
   - Minimize number of layers
   - Use specific version tags (avoid :latest)
   - Implement security best practices

5. **Documentation**:
   - Building instructions
   - Running instructions
   - Environment variable reference
   - Volume and port mappings
   - Troubleshooting common issues

Provide complete Dockerfile, docker-compose.yml (if needed), and documentation.
```