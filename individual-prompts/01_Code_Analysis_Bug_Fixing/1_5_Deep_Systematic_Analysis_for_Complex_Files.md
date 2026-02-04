# 1.5 Deep Systematic Analysis for Complex Files

**Category:** 1. Code Analysis & Bug Fixing

---

```
Analyze **`[FILE_NAME]`**, as this file likely contains logical flaws, hidden bugs, architectural issues, and unclear or redundant implementations. Some parts of the code may not be fully understood or may have been implemented incorrectly over time.

Your task is to **deeply analyze the entire file in a structured and systematic manner**, processing the code **sequentially** to build a clear and complete understanding of how everything works together, including:

* Overall application flow
* Interactions between services, classes, and modules
* GUI structure, layout management, and event handling (if applicable)
* How data flows between UI components and external modules
* Dependencies between functions, classes, and callbacks
* State management and side effects
* Error handling and edge cases

After completing the analysis, perform the following steps:

### **1. Explain the Current Behavior**

* Describe how the application works end-to-end.
* Explain the responsibility of each major class, function, and section.
* Identify any implicit assumptions and hidden dependencies in the code.

### **2. Identify Problems**

* Detect logical flaws, bugs, and potential race conditions.
* Highlight layout, responsiveness, or UI-related issues (if applicable).
* Point out code smells, dead code, duplicated logic, and anti-patterns.
* Identify violations of best practices for the language or framework.

### **3. Propose Improvements**

* Suggest architectural and structural improvements.
* Recommend simplifications and better modularization.
* Improve clarity in state handling and data flow.
* Suggest better naming conventions, separation of concerns, and documentation.

### **4. Rewrite the Code**

* Rewrite the complete file cleanly and correctly.
* Preserve existing functionality unless it is clearly broken.
* Fix all identified issues.
* Follow **best-in-class implementation practices** for the language and framework.
* Make the code readable, maintainable, and scalable.
* Add clear comments where necessary.

### **5. Validation**

* Ensure the rewritten code works correctly on smaller screen sizes (if applicable).
* Ensure no regressions are introduced.
* Ensure the application logic is deterministic and easy to reason about.

### **Output Format**

Provide the results in the following order:

1. A **high-level explanation** of the current code.
2. A structured list of **identified issues**.
3. The **fully rewritten and corrected code**.
4. A clear explanation of **what was changed and why**.

Assume no prior context other than the provided file, and do not skip any analysis steps.
```

---