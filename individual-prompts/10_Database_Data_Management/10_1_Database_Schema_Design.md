# 10.1 Database Schema Design

**Category:** 10. Database & Data Management

---

```
Design an optimal database schema for [APPLICATION/FEATURE]:

1. **Requirements Analysis**:
   - Identify all entities and relationships
   - Define data types and constraints
   - Determine query patterns and access patterns

2. **Schema Design**:
   - Create normalized schema (3NF or higher)
   - Define primary keys, foreign keys, and indexes
   - Add appropriate constraints (unique, not null, check)
   - Consider denormalization for performance where needed

3. **Indexing Strategy**:
   - Identify columns that need indexing
   - Create composite indexes for common queries
   - Balance query performance vs. write performance

4. **Data Integrity**:
   - Define cascading rules for foreign keys
   - Add database triggers if needed
   - Implement audit trails if required

5. **Migration Plan**:
   - Provide SQL migration scripts
   - Include rollback scripts
   - Plan for data migration if updating existing schema

6. **Documentation**:
   - Create entity-relationship diagrams
   - Document table purposes and relationships
   - Provide data dictionary

Deliver complete schema with migrations, indexes, and documentation.
```