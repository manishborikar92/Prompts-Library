# AI/AI IDE Prompts - Consolidated Reference Guide

**Enhanced Edition with Additional Essential Prompts**

## Table of Contents

1. [Code Analysis & Bug Fixing](#1-code-analysis--bug-fixing)
2. [Code Refactoring & Optimization](#2-code-refactoring--optimization)
3. [GUI Development & Integration](#3-gui-development--integration)
4. [File Conversion & Format Support](#4-file-conversion--format-support)
5. [Documentation & User Manuals](#5-documentation--user-manuals)
6. [Comparative Analysis & Code Ranking](#6-comparative-analysis--code-ranking)
7. [Project Structure & Path Verification](#7-project-structure--path-verification)
8. [Testing & Quality Assurance](#8-testing--quality-assurance)
9. [API & Integration Development](#9-api--integration-development)
10. [Database & Data Management](#10-database--data-management)
11. [Deployment & DevOps](#11-deployment--devops)
12. [Code Review & Best Practices](#12-code-review--best-practices)
13. [Debugging & Troubleshooting](#13-debugging--troubleshooting)
14. [Architecture & Design Patterns](#14-architecture--design-patterns)
15. [Security & Vulnerability Assessment](#15-security--vulnerability-assessment)

---

## 1. Code Analysis & Bug Fixing

### 1.1 Comprehensive Line-by-Line Script Analysis

```
Perform a comprehensive line-by-line analysis of the Python script `[SCRIPT_NAME]`.

1. **Understand Functionality:** Detail the script's purpose, its operational mechanics, and its implementation strategy.

2. **Identify Issues:** Pinpoint all problems, bugs, and potential issues within the code. Specifically, evaluate how the script handles [SPECIFIC_FUNCTIONALITY] and identify any related vulnerabilities or inefficiencies.

3. **Documentation:** Create thorough documentation for the script, outlining its functionality, identified problems, and proposed solutions.

4. **Phased Rectification:** Address and resolve each identified problem systematically, one by one.

5. **Verification:** After each fix, rigorously test and verify that the implemented solution functions correctly and resolves the issue without introducing new regressions.
```

### 1.2 Deep Review & Cleanup for Large Python Scripts

```
I will give you a **large, potentially messy Python script**.
Your job is to:

**1. Deep Review & Cleanup**

* Go **line-by-line** through the entire code, even for long files.
* Identify and fix **bugs, logical errors, and inefficiencies**.
* Remove **dead code**, unused variables/imports, and **duplicate logic**.
* Ensure **all constants and configuration values** are well-structured (e.g., in a config section or constants file).

**2. Refactoring to Class-Based Design**

* Wrap the core functionality into **one or more Python classes** with clear responsibilities.
* Use descriptive class and method names.
* Convert repeated code into **reusable methods**.
* Ensure a clean **OOP structure** and follow **PEP8** naming conventions.

**3. Code Quality Enhancements**

* Add **docstrings** for classes and methods explaining their purpose.
* Add **inline comments** for tricky logic.
* Implement **robust error handling** with clear exception messages.
* Replace any hardcoded values with configurable parameters.

**4. Output Requirements**

* (a) **Detailed list** of bugs/issues found and how you fixed them.
* (b) **Full refactored class-based code**.
* (c) **Summary of improvements** and why they were made.

**Important:**

* Maintain the original **core functionality** unless changes are essential for bug fixes or maintainability.
* Keep the final code **production-ready, readable, and maintainable**.
* Optimize for both **clarity and efficiency**.
```

### 1.3 Quick Code Review & Issue Resolution

```
Review the code thoroughly, line by line. Identify and fix any bugs or issues. Remove unnecessary or redundant code without changing the existing functionality. Refactor the code to improve its structure, readability, and organization, following best practices.
```

### 1.4 Comprehensive Analysis with Complete Corrected Version

```
Conduct a comprehensive analysis of the script to thoroughly understand its functionality. Identify all issues including bugs, implementation errors, and potential improvements. Subsequently, provide a complete corrected version of the script with all fixes implemented. Ensure the revised script maintains all original functionality while resolving all identified problems.
```

---

## 2. Code Refactoring & Optimization

### 2.1 Performance Optimization (Up to 50x Speed Improvement)

```
Analyze the provided script thoroughly to understand its complete context and functionality. Examine each function in detail to identify performance bottlenecks. Apply optimization techniques to potentially increase execution speed by up to 50 times while maintaining all required functionality.
```

### 2.2 Code Enhancement with Documentation

```
Analyze the provided [FILE_TYPE] converter script and perform the following improvements:

1. Assign appropriate function names that clearly describe their purpose

2. Add comprehensive documentation including:
   - Detailed function descriptions
   - Parameter explanations
   - Return value specifications

3. Ensure the script maintains all core conversion capabilities while improving code clarity and maintainability
```

### 2.3 Terminal Output Enhancement with Rich Library

```
Enhance the terminal output of the script to feature a clean, modern, and professional design using rich library. Implement the following improvements:

1. Use consistent color schemes with appropriate contrast
2. Apply proper spacing and alignment for readability
3. Include clear section headers and visual separators
4. Format data output in structured tables when applicable
5. Add subtle animations or loading indicators for better user experience
6. Ensure the output remains functional while being visually appealing
7. Maintain compatibility across different terminal environments
8. Implement responsive design principles for various terminal sizes
```

---

## 3. GUI Development & Integration

### 3.1 GUI Integration with Visualization Capabilities

```
Conduct a comprehensive line-by-line analysis of [GUI_FILE] and [MAIN_FILE], then systematically modify [GUI_FILE] by incorporating the structural patterns and logical flow from [MAIN_FILE]. The modifications must seamlessly integrate [MAIN_FILE] into [GUI_FILE] while preserving code consistency and full functionality. Specifically, ensure the updated [GUI_FILE] includes proper visualization capabilities with visualization settings that clearly display the scan processing workflow, with real-time visual feedback showing each processing stage.
```

### 3.2 Power Management & State Machine Implementation

```
Carefully analyze the document located at `[DOCUMENTATION_PATH]` as well as the file `[GUI_FILE_PATH]` in order to gain a complete and thorough understanding of the existing implementation, design approach, and overall context of the GUI.

I want you to understand and update the **Power Management logic** within the system. At this stage, you do **not** need to implement real hardware interactions — instead, use **simulated logic only** — but ensure that the behavior accurately reflects the intended real-world workflow and future integration.

The intended logic is that **Power ON** will ultimately be controlled via a smart plug, while **Shutdown** will be executed using an SSH command, which should only be allowed when the Jetson is already connected to the system.

Based on the details provided below, update the code completely and properly by following best-in-class implementation practices, and provide the **full updated code** reflecting these changes.

The system should assume that the Jetson has been configured at the BIOS level for automatic boot upon power restoration. This involves enabling settings such as **"AC Recovery"** or **"Power On after Power Loss"**, which ensures that the Jetson powers on automatically when electrical power is restored.

For the **simulated remote boot workflow**, when the user clicks the **"Power ON"** button in the Windows dashboard, the system should simulate turning the smart plug **OFF**, waiting approximately two seconds, and then turning it **ON** again. The Jetson is expected to detect the restored power and boot automatically due to the BIOS configuration.

Once the Jetson comes online, the GUI should automatically attempt to establish a WebSocket (or ROS) connection without requiring additional user action.

Please incorporate this simulated power control logic into the application's central state machine and overall power workflow, ensuring a clear architectural separation between simulated behavior and future real hardware control mechanisms.
```

### 3.3 Comprehensive GUI State Management & Workflow

```
Analyze the "[DOCUMENTATION_PATH]" and "[GUI_FILE_PATH]" to gain a complete understanding of the implementation for the GUI to verify, and update the workflow for enabling and disabling **all functionalities in the GUI** (not just buttons) based on different system conditions as follows:

* When the GUI starts and the **Jetson is powered off**, only the **"Power On"** functionality should be available; all other functionalities must remain disabled or inactive.

* When the GUI starts and the **Jetson is powered on**, only the **"Connect to System"** functionalities should be available; all other functionalities must remain disabled or inactive.

* When the Jetson is powered on **and connected**, both **"Power On"** functionalities should remain disabled until the Jetson is disconnected.

**Note:** To determine whether the Jetson is powered on or off, you may use a reliable method such as pinging the device or apply any other best possible logic based on your technical expertise and system design.

Additionally, do **not limit the analysis to only these three conditions**. Carefully consider **all possible system states and transitions**, including partial connectivity, connection failures, booting states, disconnection scenarios, and error conditions, to ensure a robust and logically sound workflow.

Thoroughly evaluate all possible system states and conditions, and design the most logical, user-friendly, and unambiguous workflow governing the availability of **all GUI functionalities**. The final behavior should be intuitive, consistent, and free from confusion for end users.

Once the correct and logical workflow is finalized, update the code completely and properly by following best-in-class implementation practices and provide the full updated code.
```

---

## 4. File Conversion & Format Support

### 4.1 Comparative Analysis of Conversion Scripts

```
Analyze the three provided scripts that perform [SOURCE_FORMAT] to [TARGET_FORMAT] file conversion. Identify and compare the following aspects for each script:

1. **Approaches Used**:
   - Describe the methodology, libraries, and techniques employed for file conversion.
   - Highlight any unique processing steps or optimizations.

2. **Similarities**:
   - Common libraries or dependencies used across scripts.
   - Shared preprocessing or postprocessing steps.
   - Consistent output formats or metadata handling.

3. **Dissimilarities**:
   - Differences in conversion logic or algorithmic efficiency.
   - Variations in error handling, logging, or validation.
   - Distinct performance optimizations or trade-offs.

4. **Pros and Cons for Each Script**:
   - **Pros**: Speed, accuracy, memory efficiency, readability, maintainability.
   - **Cons**: Limitations, potential bottlenecks, dependencies, or edge-case failures.

5. **Ranking**:
   - Rank the scripts based on the analysis criteria, with the most efficient and effective script receiving the highest rank.
   - Justify the ranking choices based on the analysis results, considering factors such as conversion speed, resource utilization, and error handling.

Provide a structured comparison to facilitate an informed decision on the most suitable script for specific use cases.
```

### 4.2 Multi-Version Format Support Enhancement

```
Analyze the specified document and script, then enhance the script to provide complete support for all [FILE_FORMAT] file format versions. The enhanced implementation must include:

1. Robust version detection logic to accurately identify each [FILE_FORMAT] format variation
2. Dedicated processing routines tailored for each supported format version
3. Full backward compatibility with existing core functionality

Optimize the code to be:
- Minimal: Include only essential components for the required functionality
- Efficient: Remove redundant code and unnecessary complexity
- Reliable: Ensure data integrity across all supported versions
- Maintainable: Implement clear, well-structured code that meets all specified requirements

The solution must preserve all existing features while adding comprehensive [FILE_FORMAT] version support.
```

---

## 5. Documentation & User Manuals

### 5.1 Comprehensive Document Consolidation

```
Compile a comprehensive and well-structured document by consolidating all relevant information from the [NUMBER] provided source documents. Ensure the final document:

1. Maintains logical organization with clear sections and headings
2. Preserves all key data points, facts, and insights from each source
3. Eliminates redundant information while retaining all unique content
4. Features professional formatting and consistent styling throughout

The final output should be a cohesive, reader-friendly document that effectively combines and presents all valuable information from the [NUMBER] source materials.
```

### 5.2 Complete GUI User Manual Development

```
Develop a comprehensive user manual for the GUI application that includes the following sections:

1. **Introduction**
   - Purpose and functionality of the application
   - System requirements and dependencies

2. **Installation Guide**
   - Step-by-step installation instructions
   - Configuration settings if applicable

3. **User Interface Overview**
   - Detailed description of all interface elements
   - Screenshots with annotations for key components

4. **Feature Documentation**
   - Explanation of each feature and its usage
   - Step-by-step operational procedures

5. **Troubleshooting**
   - Common issues and solutions
   - Error messages and their meanings

6. **Frequently Asked Questions**
   - Answers to common user queries

Ensure the manual follows professional documentation standards with clear language, consistent formatting, and appropriate visual aids. Include version control information and maintain a logical flow from basic to advanced topics.
```

---

## 6. Comparative Analysis & Code Ranking

### 6.1 Full-Stack Code Comparison & Ranking

```
**Task: Comparative Analysis and Ranking of Code Files**

Analyze the following code files, all of which implement the same (or very similar) functionality, to gain a complete understanding of their design, structure, and implementation approaches.

I am unsure which code is technically the best in terms of correctness, code quality, maintainability, robustness, and completeness. Your goal is to help determine the "best of the best" implementation.

Please perform a detailed comparative analysis of all files based on the following criteria:

1. **Correctness** — Identify which implementation is most functionally correct and reliable.

2. **Code Quality** — Evaluate readability, structure, naming conventions, and adherence to best practices.

3. **Maintainability & Extensibility** — Assess how easy it would be to modify, scale, or extend the code in the future.

4. **Error Handling & Edge Cases** — Analyze how well each file handles failures, unexpected inputs, and real-world scenarios.

5. **Consistency with Project Architecture** — Compare how well each implementation aligns with existing project patterns (e.g., settings management, configuration handling, theming, state management, etc.).

6. **Performance & Efficiency (if applicable)** — Highlight any major differences in efficiency or resource usage.

After your analysis:
 - Rank all files from **best to worst** based on overall quality.
 - Provide a clear justification for each ranking.
 - Clearly state which file you recommend as the primary implementation and why.
 - If none of them is ideal, suggest a hybrid approach (i.e., which parts should be taken from which files).

The final goal is to select the strongest implementation as the foundation going forward.
```

### 6.2 GUI-Focused Code Comparison & Ranking

```
**Task: Comparative Analysis and Ranking of Code Files (GUI-Only)**

Analyze the following code files, all of which implement the same (or very similar) **GUI functionality**, to gain a complete understanding of their design, structure, and implementation approaches.

Note: These files currently contain **only GUI implementation** and **do not include backend functionality or business logic**. Your analysis should focus primarily on the GUI design, structure, architecture, and code quality rather than functional backend behavior.

I am unsure which code is technically the best in terms of correctness, code quality, maintainability, robustness, and completeness **from a GUI and architectural perspective**. Your goal is to help determine the "best of the best" implementation as a foundation for future development.

Please perform a detailed comparative analysis of all files based on the following criteria:

1. **GUI Correctness & Structure** — Identify which implementation has the most logically structured and well-organized GUI design.

2. **Code Quality** — Evaluate readability, structure, naming conventions, modularity, and adherence to best practices in GUI development.

3. **Maintainability & Extensibility** — Assess how easy it would be to modify, scale, or extend the GUI in the future, including integration with backend logic.

4. **Robustness & Edge Considerations** — Analyze how well each GUI is structured to handle dynamic changes, future states, or additional components.

5. **Consistency with Project Architecture** — Compare how well each implementation aligns with existing project patterns (e.g., theming, layout management, configuration handling, user settings, and component structure).

6. **Performance & Efficiency (if applicable)** — Highlight any major differences in GUI performance, unnecessary re-renders, or inefficient design patterns.

After your analysis:

* Rank all files from **best to worst** based on overall GUI quality and architecture.
* Provide a clear justification for each ranking.
* Clearly state which file you recommend as the primary GUI implementation and why.
* If none of them is ideal, suggest a **hybrid approach** (i.e., which parts should be taken from which files to create the best final version).

The final goal is to select the strongest **GUI implementation** as the foundation going forward, which can later be integrated with backend functionality.
```

### 6.3 Document Quality & Accuracy Assessment

```
Conduct a comprehensive evaluation of all [NUMBER] documents and perform a comparative analysis to determine which one:

1. Provides the most accurate information by cross-referencing official sources and documentation
2. Demonstrates superior organization through logical structure and clear hierarchy
3. Offers the highest clarity in presenting information with precise language and minimal ambiguity
4. Exhibits the best writing quality in terms of grammar, style, and professional tone

The assessment should specifically analyze:
- Structural effectiveness (introduction, body, conclusion flow)
- Coherence of ideas and logical progression
- Readability (sentence structure, vocabulary, formatting)
- Overall communication effectiveness in conveying key messages

Rank the documents based on these criteria and provide justification for the ranking.
```

### 6.4 Simple Document Quality Comparison

```
Evaluate all [NUMBER] documents and provide a comparative analysis to determine which one demonstrates superior organization, clarity, and writing quality. The assessment should consider structure, coherence, readability, and overall effectiveness of communication.
```

---

## 7. Project Structure & Path Verification

### 7.1 Folder Structure Path Validation

```
I have updated the folder structure as follows:

```
[PROJECT_NAME]/
├── [FOLDER_1]/
│   ├── [FILE_1]
│   ├── [FILE_2]
│   └── [FILE_N]
├── [FOLDER_2]/
│   ├── [FILE_1]
│   └── [FILE_2]
└── [FILE_ROOT]
```

Please review all files to verify that file paths are correctly specified according to this structure. For any incorrect paths, update them to match the current folder organization and provide the complete corrected file content for each affected file.
```

---

## 8. Testing & Quality Assurance

### 8.1 Comprehensive Test Suite Generation

```
Analyze the provided [FILE_TYPE] and create a comprehensive test suite that includes:

1. **Unit Tests**:
   - Test each function/method with valid inputs
   - Test edge cases and boundary conditions
   - Test error handling and exception scenarios
   - Achieve at least 80% code coverage

2. **Integration Tests**:
   - Test interactions between modules/components
   - Verify data flow across system boundaries
   - Test external dependencies and APIs

3. **Test Organization**:
   - Use appropriate testing framework ([pytest/unittest/jest/etc.])
   - Follow naming conventions (test_*, should_*, etc.)
   - Group related tests into test classes or modules
   - Add descriptive docstrings for each test

4. **Test Fixtures & Mocks**:
   - Create reusable test fixtures
   - Mock external dependencies appropriately
   - Set up and tear down test environments properly

5. **Assertions & Validation**:
   - Use clear, specific assertions
   - Test both positive and negative scenarios
   - Validate return values, side effects, and state changes

Provide the complete test suite with clear comments explaining what each test validates.
```

### 8.2 Test Coverage Analysis & Improvement

```
Review the existing test suite for [PROJECT_NAME] and analyze:

1. **Current Coverage**:
   - Calculate code coverage percentage
   - Identify untested functions, branches, and edge cases
   - List critical paths lacking test coverage

2. **Test Quality Assessment**:
   - Evaluate test assertions for specificity
   - Check for flaky or unreliable tests
   - Identify tests that are too broad or too narrow

3. **Missing Test Scenarios**:
   - Error handling and exception cases
   - Boundary conditions and edge cases
   - Integration points and data flow
   - Performance and load scenarios

4. **Improvement Plan**:
   - Prioritize which areas need testing most urgently
   - Provide new test cases to fill coverage gaps
   - Suggest refactoring for better testability

Generate additional tests to bring coverage to at least [TARGET_PERCENTAGE]% while ensuring test quality and maintainability.
```

### 8.3 E2E and Integration Test Development

```
Create end-to-end tests for [APPLICATION_NAME] that validate complete user workflows:

1. **Critical User Journeys**:
   - [Journey 1: e.g., User registration and login]
   - [Journey 2: e.g., Create and process data]
   - [Journey 3: e.g., Export and share results]

2. **Test Implementation**:
   - Use [Selenium/Playwright/Cypress/etc.] for UI testing
   - Include setup and teardown procedures
   - Handle asynchronous operations properly
   - Add explicit waits and error handling

3. **Test Data Management**:
   - Create test data fixtures
   - Reset database/state between tests
   - Use realistic but safe test data

4. **Assertions**:
   - Verify UI elements are present and functional
   - Validate data persistence across operations
   - Check error messages and user feedback
   - Confirm navigation and state transitions

Provide complete E2E test suite with clear documentation for running and maintaining the tests.
```

### 8.4 Performance & Load Testing

```
Design and implement performance tests for [APPLICATION/API_NAME]:

1. **Performance Benchmarks**:
   - Measure response times for critical operations
   - Identify acceptable performance thresholds
   - Test with varying data sizes and loads

2. **Load Testing Scenarios**:
   - Simulate [N] concurrent users
   - Test sustained load over [TIME_PERIOD]
   - Identify breaking points and bottlenecks

3. **Resource Monitoring**:
   - Track memory usage and leaks
   - Monitor CPU utilization
   - Check database connection pooling
   - Measure network I/O

4. **Test Tools & Setup**:
   - Use appropriate tools ([JMeter/Locust/k6/etc.])
   - Create realistic load patterns
   - Set up monitoring and reporting

5. **Analysis & Recommendations**:
   - Identify performance bottlenecks
   - Suggest optimization opportunities
   - Provide before/after metrics

Include complete test scripts, configuration, and analysis methodology.
```

---

## 9. API & Integration Development

### 9.1 RESTful API Design & Implementation

```
Design and implement a RESTful API for [FEATURE/MODULE] with the following requirements:

1. **API Endpoints**:
   - Define all necessary endpoints (GET, POST, PUT, DELETE, PATCH)
   - Follow RESTful naming conventions and resource hierarchy
   - Include versioning strategy (e.g., /api/v1/)

2. **Request/Response Format**:
   - Use JSON for data exchange
   - Define clear request/response schemas
   - Include proper HTTP status codes
   - Implement pagination for list endpoints

3. **Authentication & Authorization**:
   - Implement [JWT/OAuth2/API Keys/etc.]
   - Define role-based access control
   - Secure sensitive endpoints

4. **Error Handling**:
   - Return consistent error response format
   - Provide meaningful error messages
   - Include error codes and descriptions

5. **Documentation**:
   - Generate OpenAPI/Swagger documentation
   - Include example requests and responses
   - Document authentication requirements

6. **Validation**:
   - Validate all input data
   - Sanitize user inputs
   - Return validation errors clearly

Provide complete API implementation with routes, controllers, models, and documentation.
```

### 9.2 API Client/SDK Development

```
Create a robust client library/SDK for the [API_NAME] API:

1. **Core Functionality**:
   - Implement methods for all API endpoints
   - Handle authentication and token management
   - Manage rate limiting and retries
   - Support both sync and async operations (if applicable)

2. **Error Handling**:
   - Create custom exception classes
   - Handle network errors gracefully
   - Provide clear error messages
   - Implement retry logic with exponential backoff

3. **Configuration**:
   - Support multiple environments (dev, staging, prod)
   - Allow custom timeout and retry settings
   - Enable logging configuration

4. **Developer Experience**:
   - Use clear, intuitive method names
   - Provide type hints and return types
   - Include comprehensive docstrings
   - Add usage examples for each method

5. **Testing**:
   - Include unit tests with mocked responses
   - Provide integration tests
   - Add example scripts

6. **Documentation**:
   - Complete API reference
   - Quick start guide
   - Advanced usage examples
   - Troubleshooting section

Provide production-ready SDK code with tests and documentation.
```

### 9.3 Third-Party Integration Implementation

```
Implement integration with [THIRD_PARTY_SERVICE]:

1. **Authentication Setup**:
   - Configure API credentials securely
   - Implement OAuth flow if required
   - Handle token refresh and expiration

2. **Core Integration Features**:
   - [Feature 1: e.g., Data synchronization]
   - [Feature 2: e.g., Webhook handling]
   - [Feature 3: e.g., Event notifications]

3. **Error Handling & Resilience**:
   - Handle API rate limits
   - Implement retry logic with backoff
   - Log integration errors properly
   - Provide fallback mechanisms

4. **Data Mapping & Transformation**:
   - Map external data models to internal models
   - Handle data type conversions
   - Validate incoming and outgoing data

5. **Monitoring & Logging**:
   - Log all API calls and responses
   - Track integration health metrics
   - Set up alerts for failures

6. **Testing**:
   - Mock external API for unit tests
   - Create integration test suite
   - Test error scenarios and edge cases

Provide complete integration code with configuration, error handling, and tests.
```

### 9.4 Webhook Implementation

```
Implement a webhook system for [APPLICATION_NAME]:

1. **Webhook Server**:
   - Create endpoint to receive webhook events
   - Validate webhook signatures
   - Implement idempotency to handle duplicate events
   - Queue events for async processing

2. **Event Processing**:
   - Parse and validate event payloads
   - Route events to appropriate handlers
   - Handle processing errors gracefully
   - Implement retry logic for failures

3. **Security**:
   - Verify webhook signatures
   - Validate event sources
   - Implement rate limiting
   - Log all webhook events

4. **Monitoring**:
   - Track webhook success/failure rates
   - Monitor processing times
   - Alert on repeated failures

5. **Testing**:
   - Create test webhooks
   - Simulate various event types
   - Test error scenarios

6. **Documentation**:
   - Document expected webhook payload formats
   - Provide example webhooks
   - Explain signature verification process

Provide complete webhook implementation with security, processing, and monitoring.
```

---

## 10. Database & Data Management

### 10.1 Database Schema Design

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

### 10.2 Database Query Optimization

```
Analyze and optimize the following database queries in [PROJECT_NAME]:

1. **Query Analysis**:
   - Identify slow queries using query profiler
   - Analyze execution plans
   - Measure current performance metrics

2. **Optimization Techniques**:
   - Add or modify indexes
   - Rewrite queries for better performance
   - Eliminate N+1 query problems
   - Use appropriate JOIN types
   - Implement query result caching

3. **Database Configuration**:
   - Suggest database parameter tuning
   - Recommend connection pooling settings
   - Identify missing database statistics

4. **Code Improvements**:
   - Replace ORM queries with raw SQL where beneficial
   - Implement pagination for large result sets
   - Use bulk operations instead of loops
   - Add database query monitoring

5. **Performance Metrics**:
   - Provide before/after performance comparisons
   - Show execution time improvements
   - Document query performance benchmarks

6. **Ongoing Monitoring**:
   - Set up slow query logging
   - Create performance dashboards
   - Define performance alerts

Provide optimized queries with performance analysis and monitoring setup.
```

### 10.3 Data Migration Script Development

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

### 10.4 Data Validation & Cleaning Pipeline

```
Create a comprehensive data validation and cleaning pipeline for [DATASET/TABLE]:

1. **Data Quality Assessment**:
   - Identify missing values and their patterns
   - Detect duplicates and inconsistencies
   - Find outliers and anomalies
   - Check data type mismatches

2. **Validation Rules**:
   - Define business logic validations
   - Set acceptable value ranges
   - Verify referential integrity
   - Check format consistency (dates, emails, phone numbers)

3. **Cleaning Operations**:
   - Handle missing values (imputation/removal)
   - Remove or merge duplicates
   - Standardize formats
   - Correct data type issues
   - Normalize string data (trim, case, encoding)

4. **Quality Reporting**:
   - Generate data quality metrics
   - Create before/after statistics
   - Flag records requiring manual review
   - Document all transformations applied

5. **Pipeline Implementation**:
   - Make pipeline reusable and configurable
   - Add logging for all operations
   - Implement dry-run mode for testing
   - Create data quality dashboards

6. **Output**:
   - Cleaned dataset
   - Validation report
   - Data quality metrics
   - Rejected records log

Provide complete data validation and cleaning pipeline with documentation.
```

---

## 11. Deployment & DevOps

### 11.1 CI/CD Pipeline Setup

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

### 11.2 Docker Containerization

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

### 11.3 Environment Configuration Management

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

### 11.4 Application Monitoring & Logging Setup

```
Implement comprehensive monitoring and logging for [APPLICATION_NAME]:

1. **Logging Strategy**:
   - Define log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)
   - Implement structured logging (JSON format)
   - Add correlation IDs for request tracking
   - Include relevant context in logs

2. **Log Aggregation**:
   - Set up centralized logging ([ELK Stack/Splunk/CloudWatch/etc.])
   - Configure log shipping
   - Implement log retention policies
   - Create log analysis dashboards

3. **Application Metrics**:
   - Request/response times
   - Error rates and types
   - Resource utilization (CPU, memory, disk)
   - Business metrics (users, transactions, etc.)

4. **Monitoring Tools**:
   - Set up APM ([New Relic/DataDog/Prometheus/etc.])
   - Configure health check endpoints
   - Implement uptime monitoring
   - Create performance dashboards

5. **Alerting**:
   - Define alert rules and thresholds
   - Set up notification channels (email, Slack, PagerDuty)
   - Implement alert escalation
   - Create runbooks for common alerts

6. **Observability**:
   - Implement distributed tracing
   - Add custom instrumentation
   - Track key business events
   - Monitor external dependencies

Provide complete monitoring and logging setup with dashboards and alert configurations.
```

---

## 12. Code Review & Best Practices

### 12.1 Code Review Checklist Application

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

### 12.2 Code Standards & Style Guide Enforcement

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

### 12.3 Dependency Audit & Updates

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

### 12.4 Legacy Code Modernization

```
Modernize the legacy codebase [PROJECT/MODULE]:

1. **Code Analysis**:
   - Identify deprecated patterns and practices
   - Find uses of outdated APIs
   - Locate tightly coupled code
   - Identify areas lacking tests

2. **Modernization Strategy**:
   - Update to modern language features
   - Refactor procedural code to OOP/functional style
   - Replace deprecated APIs with modern equivalents
   - Improve code organization and structure

3. **Technology Updates**:
   - Upgrade framework versions
   - Update deprecated libraries
   - Migrate to modern tooling
   - Adopt current best practices

4. **Testing**:
   - Add tests before refactoring
   - Ensure behavior is preserved
   - Add integration tests
   - Improve test coverage

5. **Documentation**:
   - Update outdated documentation
   - Add missing documentation
   - Document modernization decisions
   - Create migration guide

6. **Gradual Migration**:
   - Identify safe refactoring boundaries
   - Plan incremental updates
   - Ensure backwards compatibility where needed
   - Create feature flags for gradual rollout

Provide modernized code with migration plan and updated documentation.
```

---

## 13. Debugging & Troubleshooting

### 13.1 Bug Investigation & Root Cause Analysis

```
Investigate and resolve the following bug/issue in [PROJECT_NAME]:

**Bug Description**: [DESCRIPTION]
**Steps to Reproduce**: [STEPS]
**Expected Behavior**: [EXPECTED]
**Actual Behavior**: [ACTUAL]

Please perform the following:

1. **Bug Reproduction**:
   - Reproduce the bug in controlled environment
   - Identify minimum reproduction steps
   - Determine affected versions/environments

2. **Root Cause Analysis**:
   - Analyze code execution flow
   - Review relevant logs and error messages
   - Identify the exact point of failure
   - Determine underlying cause (not just symptoms)

3. **Impact Assessment**:
   - Identify affected functionality
   - Determine severity and priority
   - Check for related issues
   - Assess potential data corruption

4. **Solution Development**:
   - Propose fix(es) with trade-offs
   - Implement the solution
   - Add tests to prevent regression
   - Update documentation if needed

5. **Verification**:
   - Test the fix thoroughly
   - Verify no new issues introduced
   - Test edge cases and related functionality
   - Validate in different environments

6. **Documentation**:
   - Document root cause
   - Explain the fix
   - Update troubleshooting guide
   - Add comments to complex fixes

Provide detailed analysis, fix, and tests.
```

### 13.2 Performance Profiling & Bottleneck Identification

```
Profile and optimize performance for [APPLICATION/FEATURE]:

1. **Profiling Setup**:
   - Use appropriate profiling tools ([cProfile/py-spy/perf/Chrome DevTools])
   - Profile under realistic load conditions
   - Capture CPU, memory, and I/O metrics
   - Generate flame graphs or call graphs

2. **Bottleneck Identification**:
   - Identify slow functions and hot paths
   - Measure database query times
   - Check network request latency
   - Analyze memory allocation patterns

3. **Performance Analysis**:
   - Quantify performance issues with metrics
   - Identify algorithmic inefficiencies
   - Find unnecessary computations
   - Locate blocking operations

4. **Optimization Strategy**:
   - Prioritize high-impact optimizations
   - Implement caching where appropriate
   - Optimize database queries
   - Use asynchronous operations for I/O
   - Reduce memory allocations

5. **Implementation**:
   - Apply optimizations incrementally
   - Measure improvement after each change
   - Ensure correctness is maintained
   - Add performance benchmarks

6. **Results**:
   - Provide before/after performance metrics
   - Show profiling data comparison
   - Document optimization techniques used
   - Recommend ongoing monitoring

Deliver optimized code with performance analysis and benchmarks.
```

### 13.3 Memory Leak Detection & Resolution

```
Investigate and fix memory leaks in [APPLICATION_NAME]:

1. **Memory Profiling**:
   - Use memory profilers ([memory_profiler/heapdump/valgrind])
   - Track memory usage over time
   - Identify memory growth patterns
   - Generate memory snapshots

2. **Leak Detection**:
   - Identify objects not being garbage collected
   - Find circular references
   - Locate unclosed resources (files, connections, etc.)
   - Check for global variables accumulating data

3. **Root Cause Analysis**:
   - Trace object lifecycle
   - Identify retention points
   - Review event listener registrations
   - Check caching strategies

4. **Fix Implementation**:
   - Implement proper cleanup
   - Use context managers/try-finally
   - Break circular references
   - Clear caches periodically
   - Unregister event listeners

5. **Verification**:
   - Run long-duration tests
   - Monitor memory over time
   - Verify memory is released
   - Check for related leaks

6. **Prevention**:
   - Add resource management guidelines
   - Implement automated leak detection tests
   - Document common leak patterns to avoid

Provide fixes with memory profiling data and verification.
```

### 13.4 Error Log Analysis & Alert Reduction

```
Analyze error logs and reduce alert noise for [APPLICATION_NAME]:

1. **Log Collection & Categorization**:
   - Collect logs from [TIME_PERIOD]
   - Categorize errors by type and severity
   - Identify most frequent errors
   - Group related errors together

2. **Error Analysis**:
   - Determine root causes for top errors
   - Identify patterns and trends
   - Find false positives/noisy alerts
   - Assess actual vs. perceived severity

3. **Prioritization**:
   - Rank errors by impact and frequency
   - Identify critical vs. noise
   - Determine which errors need immediate fixes
   - Which can be downgraded or filtered

4. **Resolution Strategy**:
   - Fix critical errors
   - Improve error handling for common cases
   - Add retry logic where appropriate
   - Update alert thresholds

5. **Alert Optimization**:
   - Reduce false positive alerts
   - Combine related alerts
   - Implement alert aggregation
   - Adjust alert severities

6. **Documentation**:
   - Document error patterns
   - Create troubleshooting guides
   - Update runbooks
   - Define alert response procedures

Provide error analysis, fixes, and updated alerting configuration.
```

---

## 14. Architecture & Design Patterns

### 14.1 System Architecture Design

```
Design a scalable system architecture for [PROJECT/FEATURE]:

1. **Requirements Analysis**:
   - Functional requirements
   - Non-functional requirements (scalability, reliability, performance)
   - Expected load and growth
   - Constraints and dependencies

2. **Architecture Components**:
   - Define system components and services
   - Specify data stores and databases
   - Identify external integrations
   - Define communication patterns

3. **Design Patterns**:
   - Choose appropriate architectural patterns (Microservices/Monolith/Event-driven/etc.)
   - Apply design patterns (MVC, Repository, Factory, etc.)
   - Define separation of concerns
   - Ensure loose coupling, high cohesion

4. **Scalability Strategy**:
   - Horizontal vs. vertical scaling approach
   - Load balancing strategy
   - Caching layers
   - Database sharding/replication

5. **Reliability & Resilience**:
   - Fault tolerance mechanisms
   - Failure recovery procedures
   - Circuit breakers and retries
   - Health checks and monitoring

6. **Documentation**:
   - Architecture diagrams (C4 model/UML)
   - Component interaction flows
   - Data flow diagrams
   - Technology stack justification

Provide complete architecture design with diagrams and documentation.
```

### 14.2 Design Pattern Application

```
Refactor [MODULE/FILE] to implement the [DESIGN_PATTERN] pattern:

**Common Design Patterns**:
- Singleton: Ensure single instance of a class
- Factory: Create objects without specifying exact class
- Strategy: Define family of algorithms, make them interchangeable
- Observer: Subscribe to and notify about state changes
- Repository: Abstract data access layer
- Dependency Injection: Invert control of dependencies
- Builder: Construct complex objects step by step
- Adapter: Make incompatible interfaces work together

1. **Current Design Analysis**:
   - Analyze existing code structure
   - Identify design issues and anti-patterns
   - Determine appropriate pattern(s) to apply

2. **Pattern Implementation**:
   - Refactor code to implement the pattern
   - Maintain existing functionality
   - Improve code organization and flexibility
   - Add interfaces/abstractions where needed

3. **Benefits**:
   - Explain how pattern improves the code
   - Show increased flexibility or maintainability
   - Demonstrate testability improvements

4. **Testing**:
   - Ensure all tests still pass
   - Add new tests for pattern-specific behavior
   - Verify easy mocking/testing

5. **Documentation**:
   - Document pattern usage
   - Explain design decisions
   - Provide usage examples

Deliver refactored code with pattern implementation and documentation.
```

### 14.3 Microservices Decomposition

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

### 14.4 Event-Driven Architecture Implementation

```
Design and implement event-driven architecture for [SYSTEM/FEATURE]:

1. **Event Modeling**:
   - Identify domain events
   - Define event schemas
   - Determine event producers and consumers
   - Map event flows

2. **Event Infrastructure**:
   - Choose event broker ([Kafka/RabbitMQ/AWS SNS-SQS/etc.])
   - Design topic/queue structure
   - Implement event publishing
   - Implement event consumption

3. **Event Processing**:
   - Implement event handlers
   - Handle idempotency
   - Implement event ordering if needed
   - Handle duplicate events

4. **Error Handling**:
   - Implement dead letter queues
   - Add retry mechanisms
   - Handle poison messages
   - Implement event replay capability

5. **Monitoring**:
   - Track event flow and latency
   - Monitor queue depths
   - Alert on processing failures
   - Implement distributed tracing

6. **Documentation**:
   - Event catalog
   - Event flow diagrams
   - Consumer/producer documentation
   - Operational runbooks

Provide complete event-driven implementation with infrastructure and documentation.
```

---

## 15. Security & Vulnerability Assessment

### 15.1 Security Audit & Vulnerability Assessment

```
Perform a comprehensive security audit of [APPLICATION/MODULE]:

1. **Authentication & Authorization**:
   - Review authentication mechanisms
   - Check password policies and storage
   - Verify role-based access control
   - Test session management
   - Check for authentication bypass vulnerabilities

2. **Input Validation & Injection**:
   - Test for SQL injection
   - Check for XSS (Cross-Site Scripting)
   - Test for command injection
   - Verify input sanitization
   - Check for LDAP/XML/etc. injection

3. **Data Protection**:
   - Verify encryption at rest and in transit
   - Check for exposed sensitive data
   - Review PII handling
   - Test for insecure data storage
   - Verify secure communication (HTTPS/TLS)

4. **API Security**:
   - Test API authentication
   - Check rate limiting
   - Verify CORS configuration
   - Test for API abuse vectors
   - Check for mass assignment vulnerabilities

5. **Dependency Vulnerabilities**:
   - Scan dependencies for known CVEs
   - Check for outdated packages
   - Identify vulnerable components
   - Recommend updates or alternatives

6. **Security Headers & Configuration**:
   - Verify security headers (CSP, HSTS, X-Frame-Options)
   - Check server configuration
   - Review error handling (no sensitive info leaks)
   - Test for clickjacking protection

7. **Report**:
   - List all vulnerabilities found
   - Classify by severity (Critical/High/Medium/Low)
   - Provide remediation steps
   - Include proof of concept where applicable

Provide detailed security audit report with prioritized remediation steps.
```

### 15.2 Secure Coding Review

```
Review [CODE/MODULE] for secure coding practices:

1. **Secure Authentication**:
   - Use strong password hashing (bcrypt/Argon2)
   - Implement multi-factor authentication
   - Secure session token generation
   - Proper logout and session invalidation

2. **Input Validation**:
   - Validate all user inputs
   - Use allowlists over denylists
   - Sanitize data before use
   - Implement output encoding

3. **Secrets Management**:
   - No hardcoded credentials
   - Use environment variables or secret managers
   - Implement secret rotation
   - Secure API key storage

4. **Error Handling**:
   - No sensitive data in error messages
   - Generic error messages to users
   - Detailed logs for debugging (not exposed)
   - Proper exception handling

5. **Cryptography**:
   - Use established crypto libraries
   - No custom crypto implementations
   - Proper random number generation
   - Appropriate key lengths

6. **Access Control**:
   - Principle of least privilege
   - Verify authorization on every request
   - No direct object references
   - Implement RBAC properly

Provide secure code with identified issues fixed and explanations.
```

### 15.3 OWASP Top 10 Compliance Check

```
Verify [APPLICATION] compliance with OWASP Top 10:

1. **Broken Access Control**:
   - Test for unauthorized access
   - Verify authorization checks
   - Check for IDOR vulnerabilities
   - Test privilege escalation

2. **Cryptographic Failures**:
   - Verify data encryption (at rest & in transit)
   - Check for weak algorithms
   - Verify proper key management
   - Test for sensitive data exposure

3. **Injection**:
   - Test for SQL injection
   - Check for NoSQL injection
   - Verify command injection protection
   - Test for LDAP, XPath injection

4. **Insecure Design**:
   - Review threat model
   - Check for security controls at design level
   - Verify secure development lifecycle
   - Review architecture for security flaws

5. **Security Misconfiguration**:
   - Check default configurations
   - Verify unnecessary features disabled
   - Review security headers
   - Test error handling configuration

6. **Vulnerable Components**:
   - Scan for vulnerable dependencies
   - Check for outdated libraries
   - Verify component inventory
   - Review third-party integrations

7. **Authentication Failures**:
   - Test authentication mechanisms
   - Verify session management
   - Check for credential stuffing protection
   - Test MFA implementation

8. **Software & Data Integrity Failures**:
   - Verify digital signatures
   - Check for deserialization issues
   - Review CI/CD security
   - Test update mechanisms

9. **Logging & Monitoring Failures**:
   - Verify security event logging
   - Check for proper alerting
   - Test incident response
   - Review audit trails

10. **Server-Side Request Forgery (SSRF)**:
    - Test for SSRF vulnerabilities
    - Verify URL validation
    - Check for internal resource access
    - Test input sanitization

Provide comprehensive compliance report with remediation recommendations.
```

### 15.4 Penetration Testing Simulation

```
Simulate penetration testing for [APPLICATION/API]:

1. **Reconnaissance**:
   - Information gathering
   - Identify attack surface
   - Enumerate endpoints and parameters
   - Identify technologies used

2. **Vulnerability Scanning**:
   - Run automated scanners
   - Identify potential vulnerabilities
   - Map attack vectors
   - Prioritize targets

3. **Exploitation Attempts** (Simulated):
   - Test authentication bypass
   - Attempt injection attacks
   - Test for privilege escalation
   - Check for business logic flaws

4. **Post-Exploitation** (Simulated):
   - Assess potential damage
   - Identify data access
   - Check for lateral movement possibilities
   - Evaluate persistence mechanisms

5. **Reporting**:
   - Document all findings
   - Provide exploitation steps
   - Classify severity
   - Recommend fixes

6. **Remediation Verification**:
   - Retest after fixes
   - Verify vulnerability resolution
   - Check for regression
   - Provide final report

Provide penetration test report with findings and remediation guidance.

**Note**: Only perform on systems you own or have explicit permission to test.
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

---

## Version History

- **v2.0 (Enhanced)** - Added 8 new categories with 32 additional prompts (Testing, API, Database, DevOps, Code Review, Debugging, Architecture, Security)
- **v1.0** - Initial consolidation of all prompts from source documents
- Created: February 2026

---

## Notes

- These prompts are designed to work with various AI assistants and AI IDEs
- Adjust the level of detail and specificity based on your AI tool's capabilities
- Some prompts reference specific technologies (e.g., Jetson, WebSocket, ROS) - adapt these to your use case
- Always review AI-generated code for security, correctness, and adherence to your project standards
- The enhanced version includes 47 total prompts across 15 categories for comprehensive development support

---

*This document consolidates prompts from multiple sources and adds essential development prompts to provide a comprehensive reference for AI-assisted development tasks.*
