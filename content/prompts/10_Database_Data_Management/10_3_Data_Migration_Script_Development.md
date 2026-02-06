# 10.3 Data Migration Script Development

**Category:** 10. Database & Data Management

---

```
Create a robust data migration script for [MIGRATION_PURPOSE]:

1. **Migration Requirements**:
   - Source: [SOURCE_DATABASE/SYSTEM]
   - Target: [TARGET_DATABASE/SYSTEM]
   - Data volume: [APPROXIMATE_SIZE]
   - Downtime allowed: [TIME_WINDOW]

2. **Migration Strategy**:
   - Extract data from source system
   - Transform data to match target schema
   - Load data into target system
   - Validate data integrity

3. **Data Transformation**:
   - Map source fields to target fields
   - Handle data type conversions
   - Clean and normalize data
   - Handle missing or invalid data

4. **Safety & Rollback**:
   - Create backup before migration
   - Implement transaction management
   - Provide rollback procedure
   - Add data validation checks

5. **Performance**:
   - Use bulk insert operations
   - Implement batching for large datasets
   - Add progress tracking
   - Optimize for minimal downtime

6. **Validation**:
   - Compare record counts
   - Validate data integrity
   - Check referential integrity
   - Verify data transformations

Provide complete migration script with validation, logging, and rollback capabilities.
```