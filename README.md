# DevOps Assignment

## 📌 Architecture Overview

This project is a two-tier application with:
- 🐍 **Backend**: Python (FastAPI)
- ⚛️ **Frontend**: Next.js (Node.js)
- ☁️ **Infrastructure**: AWS ECS Fargate + ALB via Terraform
- 🔁 **CI/CD**: GitHub Actions
- 📊 **Monitoring**: AWS CloudWatch
- 🔐 **Secrets Management**: AWS Secrets Manager

## 🌿 Branching Strategy

We’ll use the following Git branching model:

- `main`: stable, production-ready code
- `develop`: active development branch
- `feature/<feature-name>`: temporary branches for new features or fixes
- Pull Requests: changes are made in `feature/` branches and merged into `develop` via PRs. Merges to `main` trigger deployments.

## 🧪 Setup Instructions

TBD — Will be updated after each module is implemented.

