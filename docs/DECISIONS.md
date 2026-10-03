# Decisions

## Design skill: Anthropic frontend-design instead of Impeccable
- **What:** Installed Anthropic's `frontend-design` skill (with its LICENSE.txt) into `.claude/skills/frontend-design/`.
- **Why:** `npx impeccable install` failed in this environment. The signed skill bundle download was refused with HTTP 403 by the network policy, and nothing was installed.
- **Alternative rejected:** Retrying or routing around the blocked download. The brief names frontend-design as the fallback.
