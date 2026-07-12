# Agents Configuration

## Agent Roles

### Primary Agent (Build Mode)
- **Role**: Direct implementation
- **Authority**: Full read/write access to project files
- **Constraints**: Must follow code-standards.md, must verify before claiming done

### Plan Agent
- **Role**: Read-only analysis and design
- **Authority**: Can read files, create plans in `.mimocode/plans/`
- **Constraints**: Cannot modify source code

### Explore Agent
- **Role**: Codebase research and discovery
- **Authority**: Read-only access
- **Constraints**: Cannot modify files, cannot execute commands that change state

### Subagent (General)
- **Role**: Delegated tasks from primary agent
- **Authority**: Inherits from parent, scoped to task
- **Constraints**: Cannot change working directory

## Agent Selection Rules

| Task Type | Agent | Why |
|-----------|-------|-----|
| Bug investigation | Explore | Read-only, fast search |
| Feature implementation | Build | Full access needed |
| Architecture decisions | Plan | Need analysis without side effects |
| Parallel research | Explore (multiple) | Concurrent read-only |
| Code review | General subagent | Independent verification |

## Communication Protocol

1. **Spawn with context**: Always include what you've learned
2. **Structured output**: Request specific format for results
3. **Task binding**: Link subagents to task IDs for tracking
4. **Timeout awareness**: Set appropriate timeouts for long tasks

## Anti-Patterns

- Don't spawn subagents for single-file lookups
- Don't use explore for write operations
- Don't chain subagents more than 2 levels deep
- Don't assume subagent output is correct - verify
