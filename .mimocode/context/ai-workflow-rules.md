# AI Workflow Rules

## Core Principles

### 1. Think Before Acting
- Read the code before modifying it
- Understand the existing patterns before introducing new ones
- Ask clarifying questions rather than making assumptions

### 2. Minimal Changes
- Fix only what's broken
- Don't refactor unless asked
- Don't add features beyond scope
- Three focused lines > thirty generic lines

### 3. Verify Everything
- Run tests after changes
- Check type errors
- Verify in browser for UI changes
- "Should work" is not verification

### 4. Preserve Context
- Read files before editing
- Check memory before asking questions
- Use grep before reading entire files
- Delegate heavy exploration to subagents

## Workflow Sequence

```
Receive Task
    ↓
Understand (read, search, explore)
    ↓
Plan (if multi-step or ambiguous)
    ↓
Implement (smallest viable change)
    ↓
Verify (tests, typecheck, browser)
    ↓
Report (what changed, what's next)
```

## Decision Framework

| Situation | Action |
|-----------|--------|
| Simple fix (< 5 lines) | Implement directly |
| Multi-file change | Create task tree, track progress |
| Ambiguous requirements | Ask ONE question, then proceed |
| Architecture decision | Enter plan mode |
| Bug with unknown cause | Explore first, hypothesize, verify |
| Performance issue | Measure before optimizing |

## What NOT To Do

- Don't explain what code does (well-named code is self-documenting)
- Don't add comments unless the WHY is non-obvious
- Don't create abstractions for single-use code
- Don't add error handling for impossible scenarios
- Don't write documentation unless asked
- Don't use emojis in code or commits

## Commit Discipline

- One logical change per commit
- Message format: `type: description`
- Types: feat, fix, refactor, test, docs, chore
- Never commit secrets, .env files, or credentials

## Escalation Rules

1. **Stuck for 2 attempts**: Stop, explain the situation, ask for guidance
2. **Breaking existing tests**: Fix the test or revert - don't ignore
3. **Scope creep detected**: Flag it, don't implement
4. **Security concern**: Stop immediately, explain the risk
