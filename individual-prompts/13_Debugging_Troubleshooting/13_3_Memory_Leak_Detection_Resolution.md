# 13.3 Memory Leak Detection & Resolution

**Category:** 13. Debugging & Troubleshooting

---

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