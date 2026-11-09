# From Continual Learning to Self-Evolving Agents

**ACML 2026 Tutorial · 150 minutes · In person**

**Tongtong Wu** (Monash University) · **Dong Gong** (UNSW Sydney) · **Reza Haffari** (Monash University)

[Tutorial page](https://wutong8023.github.io/acml2026-self-evolving-agents/) · [Tutorial proposal (PDF)](assets/acml2026-tutorial-proposal.pdf)

## Overview

How can AI systems continue to learn as their knowledge, tools, environments, and users’ needs evolve?

Continual learning has traditionally focused on acquiring new knowledge without catastrophically forgetting prior capabilities. Modern AI agents face a broader challenge: they must decide what to learn from experience, when adaptation is needed, where new knowledge should live, and how to verify that an update improves their behaviour.

This tutorial presents continual learning as the foundation for building self-evolving agents. We revisit continual learning in the foundation-model era, develop an adaptation hierarchy spanning context and retrieval, external memory, prompts and adapters, modular experts, and backbone updates, and examine memory as an active decision mechanism.

We then connect these ideas to agents that learn from their own operation through a loop of capability diagnosis, selective adaptation, verification, and consolidation. The central message is that effective self-evolution requires **selective, localised, and verifiable adaptation**.

## Four Organising Questions

- **What to learn?** Distinguish transient context shifts from persistent capability changes.
- **When to adapt?** Determine when experience calls for a lasting update.
- **Where to store new knowledge?** Choose an adaptation mechanism based on the persistence, scope, and timescale of the change.
- **How to verify an update?** Evaluate improvements and retained capabilities before consolidation.

## Learning Outcomes

By the end of the tutorial, participants will be able to:

- Analyse adaptation methods through the four organising questions.
- Select where an update should live, from context and retrieval to memory, adapters, modular experts, or backbone parameters.
- Design memory policies governing experience selection, abstraction, retrieval, and deliberate forgetting.
- Diagnose whether a failure calls for changing memory or parameters.
- Design a self-evolution loop and evaluate it beyond final-task accuracy.

## Audience and Prerequisites

The tutorial is intended for machine learning researchers, students, and practitioners interested in continual learning, foundation models, and adaptive AI agents. Familiarity with deep learning and foundation models is recommended. **No prior background in continual learning or agents is assumed.**

## Programme

The tutorial consists of six self-contained modules and a closing discussion, totalling **150 minutes**. Each module can be followed independently, while the sequence develops a shared adaptation hierarchy and self-evolution loop.

### M1 · Overview: From Continual Learning to Self-Evolving Agents

**Tongtong Wu, Dong Gong, and Reza Haffari · 15 minutes**

We map the vocabulary of continual learning, self-evolution, and LLM agents; distinguish transient context shifts from persistent capability changes; discuss why repeated fine-tuning is inefficient; and introduce the four organising questions.

### M2 · Continual Learning Foundations and the Foundation-Model Era

**Dong Gong · 25 minutes**

We revisit replay, regularisation, parameter isolation, and expansion through their assumptions and stability–plasticity trade-offs. We examine how foundation models reshape forgetting and transfer, then introduce the adaptation hierarchy and how to choose where an update should live.

### M3 · Memory in Continual Learning and Self-Evolution

**Dong Gong · 30 minutes**

We treat memory as an active decision mechanism for experience selection, abstraction, retrieval, and deliberate forgetting. We compare episodic and semantic, parametric and external, and passive and diagnosis-driven memory, and discuss why larger memory alone does not imply stronger long-term capability.

### M4 · Agents That Learn: Anatomy and Where Change Enters

**Tongtong Wu · 20 minutes**

We unpack the components of a learning agent: policy, context, memory, tools, skills, environment, and multi-agent topology. Drawing on evidence of deployment drift, we map adaptation mechanisms onto these components and distinguish component-level from policy-level change.

### M5 · Self-Evolving Agents

**Tongtong Wu · 30 minutes**

We develop a closed loop connecting experience, capability diagnosis, targeted assistance, selective adaptation, verification, and consolidation. Topics include the evolution of memory, skills, and tools; policy improvement from trajectories and active interaction; test-time adaptation; and structural evolution of agent topologies.

### M6 · Evaluation, Open Challenges, and Conclusion

**Reza Haffari · 20 minutes**

We examine introspection and self-evaluation as gates for accepting updates. Evaluation extends beyond final-task accuracy to retention, adaptation speed, transfer, efficiency, robustness, and error accumulation. We conclude with challenges in model–memory coordination, resource growth, and reliable self-generated learning.

### Closing Discussion

**All presenters · 10 minutes**

An open discussion of practical design choices, open challenges, and future research directions.

## Presenters

### Tongtong Wu · Monash University

Tongtong Wu is a Research Fellow in the Department of Data Science & AI at Monash University. His research focuses on continual learning, adaptive language models and memory, and self-evolving agents.

Contact: [Tongtong.Wu@monash.edu](mailto:Tongtong.Wu@monash.edu)

### Dong Gong · UNSW Sydney

Dong Gong is a Senior Lecturer in the School of Computer Science and Engineering at UNSW Sydney, where he leads the Artificer AI Lab. His work targets reliable, self-improving AI for open-ended, continuously changing environments, including continual learning, memory mechanisms, dynamically expandable architectures, and post-training and test-time adaptation of foundation models.

Contact: [dong.gong@unsw.edu.au](mailto:dong.gong@unsw.edu.au)

### Reza Haffari · Monash University

Reza Haffari is a Professor and previous ARC Future Fellow in the Department of Data Science & AI at Monash University. His research spans continual and lifelong learning, active experience selection and interaction, uncertainty-aware self-evaluation, and reliable adaptation.

Contact: [Gholamreza.Haffari@monash.edu](mailto:Gholamreza.Haffari@monash.edu)

## Suggested Reading

- T. Wu et al. **Continual Learning for LLMs: A Survey.** 2024. [arXiv:2402.01364](https://arxiv.org/abs/2402.01364)
- H. Gao et al. **A Survey of Self-Evolving Agents.** 2025. [arXiv:2507.21046](https://arxiv.org/abs/2507.21046)
- J. Bell et al. **The Future of Continual Learning in the Era of Foundation Models.** 2025. [arXiv:2506.03320](https://arxiv.org/abs/2506.03320)
- J. Fang et al. **A Comprehensive Survey of Self-Evolving AI Agents.** 2025. [arXiv:2508.07407](https://arxiv.org/abs/2508.07407)

The [tutorial proposal](assets/acml2026-tutorial-proposal.pdf) contains the complete reference list.
