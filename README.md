# autter-demo-ai-agent

A TypeScript support-agent app with a mock LLM, tool registry, docs search, account lookup, support tickets, and conversation memory.

This is an **Autter Sandbox** repository. It intentionally contains realistic bugs and risky implementation patterns so design partners can test AI-editor workflows and Autter review quality.

## How to use this with Autter

1. Pick a challenge
2. Paste the suggested prompt into your AI code editor
3. Make the fix
4. Open a PR
5. Let Autter review it
6. Fix what Autter catches

## Challenges

| Challenge | Difficulty | Category | Expected Autter review angle |
| --- | --- | --- | --- |
| [Tool permission bypass](./challenges/tool-permission-bypass.md) | High | Authorization | authorization issue in tool execution |
| [Prompt injection through retrieved docs](./challenges/prompt-injection-through-retrieved-docs.md) | High | AI safety | prompt injection and unsafe context handling |
| [Memory leaks private user data](./challenges/memory-leaks-private-user-data.md) | High | Privacy | tenant and user isolation bug |
| [Tool arguments are not validated](./challenges/tool-arguments-are-not-validated.md) | Medium | Validation | missing schema validation |
| [Agent logs sensitive data](./challenges/agent-logs-sensitive-data.md) | Medium | Security | sensitive data exposure |
| [Ticket creation can be triggered repeatedly](./challenges/ticket-creation-can-be-triggered-repeatedly.md) | Medium | Reliability | idempotency issue |
| [Unsafe fallback tool execution](./challenges/unsafe-fallback-tool-execution.md) | High | Security | dangerous fallback behavior |
| [Conversation summarizer drops safety constraints](./challenges/conversation-summarizer-drops-safety-constraints.md) | Medium | AI safety | behavior regression risk |

## Local development

Install dependencies, run the test suite, then pick a challenge. Some tests intentionally document broken behavior with expected-failure markers; they are part of the sandbox design.
