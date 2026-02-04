# AI/AI IDE Prompts - Consolidated Reference Guide

## Table of Contents

1. [Code Analysis & Bug Fixing](#1-code-analysis--bug-fixing)
2. [Code Refactoring & Optimization](#2-code-refactoring--optimization)
3. [GUI Development & Integration](#3-gui-development--integration)
4. [File Conversion & Format Support](#4-file-conversion--format-support)
5. [Documentation & User Manuals](#5-documentation--user-manuals)
6. [Comparative Analysis & Code Ranking](#6-comparative-analysis--code-ranking)
7. [Project Structure & Path Verification](#7-project-structure--path-verification)

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

---

## Version History

- **v1.0** - Initial consolidation of all prompts from source documents
- Created: February 2026

---

## Notes

- These prompts are designed to work with various AI assistants and AI IDEs
- Adjust the level of detail and specificity based on your AI tool's capabilities
- Some prompts reference specific technologies (e.g., Jetson, WebSocket, ROS) - adapt these to your use case
- Always review AI-generated code for security, correctness, and adherence to your project standards

---

*This document consolidates prompts from multiple sources to provide a comprehensive reference for AI-assisted development tasks.*
