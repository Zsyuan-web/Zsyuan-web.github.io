---
type: meta
title: "Content Inventory — Index"
updated: 2026-05-17T20:10:00+08:00
description: "Tracks which knowledge concepts have corresponding web content (articles). Shows gaps and coverage status."
---

# Content Inventory — Index

## Purpose
This inventory tracks which concepts from the knowledge base have corresponding web content. When generating new articles, consult this index to know:
- What has coverage (articles exist)
- What needs coverage (concepts with no articles yet)
- What has weak coverage (articles that need expansion)

## How It Works
Each concept in `knowledge/` can link to articles in `content-inventory/`. Articles track:
- Which concepts they cover
- Which nihilism form they address
- Which framework step they follow
- Publication status (published/draft/planned)
- Language (en/zh)

## Status Summary

### Coverage by Category

| Category | Concepts | Covered | Gaps |
|----------|----------|---------|------|
| Thinkers | 4 | — | — |
| Nihilism Forms | 3 | — | — |
| Framework | 3 | — | — |
| Concepts | 13 | — | — |
| Mappings | 5 | — | — |
| Canonical Texts | 8 | — | — |

### Current Inventory
- [[content-inventory/articles/en/]] — English articles
- [[content-inventory/articles/zh/]] — Chinese articles
- [[content-inventory/gaps/needed-articles.md]] — Concepts without articles
- [[content-inventory/gaps/weak-coverage.md]] — Articles needing expansion

## Operations

### Before generating new content
1. Read this index
2. Check [[content-inventory/gaps/needed-articles.md]] for gaps
3. Check existing articles in [[content-inventory/articles/en/]] and [[content-inventory/articles/zh/]]
4. Choose a gap to fill

### After publishing new content
1. Create a record in `content-inventory/articles/[locale]/[slug].md`
2. Update [[content-inventory/gaps/needed-articles.md]] — remove filled gaps
3. Update this index
4. Append to [[content-inventory/log.md]]