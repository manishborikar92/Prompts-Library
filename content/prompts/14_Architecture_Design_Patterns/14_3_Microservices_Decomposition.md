# 14.3 Microservices Decomposition

**Category:** 14. Architecture & Design Patterns

---

```
Decompose [MONOLITHIC_APPLICATION] into microservices:

1. **Service Identification**:
   - Identify bounded contexts
   - Define service boundaries
   - Determine data ownership
   - Map business capabilities to services

2. **Service Design**:
   - Define service APIs
   - Design inter-service communication
   - Choose synchronous vs. asynchronous patterns
   - Plan data consistency strategy

3. **Data Management**:
   - Database per service pattern
   - Handle distributed transactions (Saga pattern)
   - Implement event sourcing if needed
   - Plan data migration strategy

4. **Cross-Cutting Concerns**:
   - Service discovery
   - API gateway
   - Authentication/authorization
   - Centralized logging and monitoring

5. **Migration Strategy**:
   - Identify strangler pattern opportunities
   - Plan incremental migration
   - Define rollback procedures
   - Minimize downtime

6. **Documentation**:
   - Service architecture diagrams
   - API documentation for each service
   - Deployment architecture
   - Migration roadmap

Provide service decomposition plan with architecture and migration strategy.
```