# AI Email Platform — Architecture & Development Rules

This document defines the **architecture, technology stack, development standards, and non-negotiable engineering rules** for the project.

Any **AI agent, developer, or automated code-generation system** producing code for this project must strictly follow these guidelines.

The primary objective is to maintain a **clean, modular, maintainable, secure, and highly testable codebase** across both the frontend and backend.

---

# 1. Product Overview

The system is an advanced platform for **creating, managing, sending, and analyzing mass email campaigns with AI assistance**.

## Core Features

### Authentication & Account Settings

* Secure user authentication and login.
* Account and application settings.
* User preferences.
* Email delivery configuration.
* Credential management.

### AI-Assisted Campaign Design

Users create email campaigns through an AI-powered conversational interface.

The AI must be capable of:

* Understanding natural-language design requirements.
* Helping users construct email templates through conversation.
* Reusing and adapting previously created templates.
* Supporting different design formats and structures.
* Processing images and visual content.
* Converting the resulting design into clean, structured HTML/JSON.
* Sending the generated structure to the backend API for validation and processing.

The frontend **must never communicate directly with the AI provider**.

### Template Management

Users can:

* Save and reuse previous templates.
* Browse historical designs.
* Preview email templates.
* Manage different template formats.
* Modify existing templates through AI assistance.

### Audience Management

The platform must provide CRUD functionality for:

* Customers.
* Contact lists.
* Audiences.
* Categories.
* Segments.
* Campaign recipients.

### Asynchronous Email Delivery

Mass email delivery must never block the main API.

The system must use background workers to:

1. Receive a campaign request.
2. Validate and prepare the campaign.
3. Create a delivery job.
4. Add the job to a process queue.
5. Allow workers to consume queued jobs.
6. Process email delivery in a controlled and sequential manner.
7. Track the result of each delivery.

### Tracking & Analytics

The platform must collect and present understandable campaign metrics, including:

* Email opens.
* Link clicks.
* Bounces.
* Delivery status.
* Campaign performance.
* Other relevant engagement metrics.

---

# 2. Solution Architecture

The system follows a **Modular Monolith architecture** supported by:

* Clean Architecture.
* Domain-Driven Design (DDD).
* Dependency Inversion.
* Strong separation of concerns.

## 2.1 Repository Separation

Frontend and backend must live in **separate repositories**.

```text
Frontend Repository
        |
        | HTTP/API
        v
Backend Repository
        |
        +---- Database
        |
        +---- Queue
        |
        +---- Workers
        |
        +---- External Services
```

Each repository must be independently:

* Developed.
* Tested.
* Built.
* Versioned.
* Deployed.

## 2.2 Containerization

Docker is mandatory.

Development and production environments should remain as consistent as possible through containerized infrastructure.

The project should avoid environment-specific behavior that cannot be reproduced locally.

## 2.3 Asynchronous Processing

Heavy operations must never block the main API.

Email delivery is the primary asynchronous workflow.

```text
Client
  |
  v
Backend API
  |
  v
Create Campaign Job
  |
  v
Process Queue
  |
  v
Worker
  |
  v
Email Provider
  |
  v
Tracking / Persistence
```

The API is responsible for **orchestration and job creation**.

Workers are responsible for **background execution**.

The API must not directly perform large-scale email delivery operations inside the request lifecycle.

---

# 3. Technology Stack

## 3.1 Backend

| Concern               | Technology                       |
| --------------------- | -------------------------------- |
| Runtime               | Node.js                          |
| Language              | TypeScript                       |
| Framework             | NestJS                           |
| Database              | PostgreSQL                       |
| Database Hosting      | Serverless PostgreSQL, e.g. Neon |
| ORM                   | Prisma                           |
| Architecture          | Clean Architecture + DDD         |
| Background Processing | Queue + Workers                  |

### NestJS

NestJS is the selected backend framework because of its support for:

* Modular architecture.
* Dependency injection.
* Controllers and providers.
* Enterprise-oriented application structure.
* Testing.
* Clear separation of responsibilities.

---

## 3.2 Frontend

| Concern           | Technology |
| ----------------- | ---------- |
| Framework         | Angular    |
| Language          | TypeScript |
| Production Server | Nginx      |
| Deployment        | Docker     |
| E2E Testing       | Playwright |

The frontend must follow a strict separation between:

* Presentation.
* Application logic.
* Data access.
* API communication.

---

## 3.3 Infrastructure Integrations

### Email Provider

The email provider must be isolated behind an infrastructure adapter.

Possible providers:

* Resend.
* Postmark.

The domain must never depend directly on either provider.

```text
Domain
  |
  v
EmailSender Interface
  |
  v
Infrastructure Adapter
  |
  v
Resend / Postmark
```

This allows the provider to be replaced without modifying business logic.

### AI Provider

AI models will be consumed through an API.

Possible infrastructure:

* Groq.
* OpenRouter.
* Other compatible AI providers.

The AI integration must remain behind a dedicated abstraction.

The domain must not depend directly on:

* OpenAI SDKs.
* Groq SDKs.
* OpenRouter SDKs.
* HTTP clients.
* Provider-specific implementations.

---

# 4. Development Standards & Clean Code

These rules are **mandatory**.

Code that violates these standards should be considered invalid and must be corrected before being merged.

---

## 4.1 General Rules

These rules apply to both repositories.

### 1. Cyclomatic Complexity

The target maximum cyclomatic complexity for a function is **4**.

If a function exceeds this threshold, its logic must be decomposed into smaller, focused functions.

Prefer:

```text
Large Function
     |
     +-- Validate
     +-- Transform
     +-- Execute
     +-- Persist
```

over a single function containing all responsibilities.

### 2. File Size

Source files should generally remain between **200 and 300 lines or fewer**.

Large files must be treated as a signal that responsibilities should be extracted into smaller modules.

File size is a guideline, not a reason to artificially fragment logically cohesive code.

### 3. Strict Typing

The use of `any` is **strictly prohibited**.

Every:

* Request.
* Response.
* Function parameter.
* Return value.
* Domain object.
* External API response.
* Configuration object.

must have an explicit type or interface.

Prefer:

```typescript
interface CampaignResponse {
  campaignId: string;
  status: CampaignStatus;
}
```

over:

```typescript
const response: any = ...
```

### 4. Descriptive Naming

Names must clearly communicate intent.

Avoid:

```typescript
const cList = ...
const d = ...
const proc = ...
```

Prefer:

```typescript
const campaignList = ...
const deliveryStatus = ...
const campaignProcessor = ...
```

Avoid unnecessary abbreviations.

Code should be understandable without requiring comments to explain basic intent.

---

# 5. Frontend Rules — Angular

## 5.1 Dumb Components

UI components should primarily be responsible for:

* Rendering data.
* Handling user interaction.
* Emitting events.
* Managing presentation-specific state.

Components must **not contain business logic**.

They must not:

* Implement complex transformations.
* Contain campaign business rules.
* Perform direct HTTP requests.
* Inject `HttpClient` directly when the operation belongs in a service.

Prefer:

```text
Component
    |
    v
Application Service
    |
    v
API / State / Business Logic
```

over:

```text
Component
    |
    +-- HTTP request
    +-- Business rules
    +-- Data transformation
    +-- State management
```

## 5.2 Smart Services

Services are responsible for application-level logic such as:

* API communication.
* Data transformation.
* State management.
* Coordination between components.
* Application workflows.

Services should remain focused and should not become monolithic "god services".

When a service accumulates unrelated responsibilities, those responsibilities must be separated.

## 5.3 AI Isolation

The frontend must **never communicate directly with the AI provider**.

Forbidden:

```text
Angular
   |
   v
Groq / OpenRouter / OpenAI
```

Required:

```text
Angular
   |
   v
Backend API
   |
   v
AI Adapter
   |
   v
AI Provider
```

This protects credentials, centralizes validation, and keeps provider-specific logic outside the frontend.

## 5.4 Frontend Testing

Testing priority:

1. Services and application logic.
2. Component behavior.
3. Critical user flows through E2E testing.

Playwright should be used for important end-to-end scenarios such as:

* Login.
* Campaign creation.
* AI-assisted template generation.
* Template selection.
* Audience selection.
* Campaign submission.
* Campaign tracking.

---

# 6. Backend Rules — NestJS

## 6.1 Test-Driven Development

Core business logic must be developed with a **test-first or test-oriented approach**.

Use cases must maintain a minimum target of:

**80% unit test coverage.**

Coverage alone does not guarantee quality. Tests must verify meaningful behavior and business rules.

## 6.2 Unit Test Isolation

Unit tests must not depend on real infrastructure.

The following must always be mocked or stubbed:

* PostgreSQL.
* Prisma.
* Email providers.
* AI providers.
* External HTTP services.
* Queues.
* Other infrastructure services.

Example:

```text
Use Case
   |
   +---- Mock Repository
   |
   +---- Mock Email Provider
   |
   +---- Mock AI Provider
```

Tests must remain:

* Fast.
* Deterministic.
* Isolated.
* Reproducible.

## 6.3 Clean Architecture

The dependency direction must always point inward.

```text
Infrastructure
      |
      v
Application
      |
      v
Domain
```

The domain must not depend on infrastructure.

The domain must **never import**:

* NestJS.
* Prisma.
* HTTP clients.
* Resend.
* Postmark.
* Groq.
* OpenRouter.
* Database-specific implementations.
* Infrastructure-specific libraries.

Instead, external communication must use **Ports and Adapters**.

Example:

```typescript
interface CampaignRepository {
  save(campaign: Campaign): Promise<void>;
}
```

The domain depends on the interface.

Infrastructure provides the implementation:

```text
Domain
  |
  v
CampaignRepository
  ^
  |
PrismaCampaignRepository
```

This allows infrastructure implementations to be replaced without modifying business rules.

---

# 7. Security Rules — Frontend

Security requirements are mandatory.

## 7.1 XSS Protection

Angular's built-in sanitization must be trusted by default.

The following are strictly prohibited unless there is an explicitly reviewed and validated security requirement:

```typescript
DomSanitizer.bypassSecurityTrustHtml(...)
```

and unsafe direct DOM manipulation such as:

```typescript
element.innerHTML = externalContent;
```

This is especially important when rendering **HTML templates generated by AI**.

AI-generated HTML must be treated as **untrusted input**.

Any HTML preview mechanism must use an explicit sanitization and security strategy before rendering it.

## 7.2 Secure Token Management

Authentication tokens must not be exposed unnecessarily to client-side JavaScript.

The preferred approach is:

```text
Backend
   |
   v
HttpOnly Secure Cookie
   |
   v
Browser
```

JWTs should preferably be stored in secure `HttpOnly` cookies.

If the architecture requires client-side token storage, the security implications must be explicitly considered and the token lifecycle must include:

* Secure storage.
* Immediate cleanup on logout.
* Expiration handling.
* Session invalidation.

Avoid storing sensitive authentication tokens in `localStorage` whenever possible.

## 7.3 Zero Secrets in Client Code

The Angular application must never contain:

* Resend API keys.
* Postmark credentials.
* Groq API keys.
* OpenAI API keys.
* OpenRouter API keys.
* Database credentials.
* Private tokens.
* Connection strings.
* Other infrastructure secrets.

Sensitive environment variables must never be placed in:

```text
environment.ts
```

or bundled into client-side JavaScript.

All external provider communication must go through the backend.

## 7.4 CSRF Protection

When authentication relies on cookies, state-changing requests must implement appropriate CSRF protection.

The backend must define the required CSRF mechanism, while Angular may use an `HttpInterceptor` to attach the required CSRF token or header.

Protected methods include:

```text
POST
PUT
PATCH
DELETE
```

The exact mechanism must remain consistent between frontend and backend.

## 7.5 Dependency Security

The CI pipeline must automatically audit third-party dependencies.

For example:

```bash
npm audit
```

The pipeline must block a Pull Request or deployment when vulnerabilities meet the project's configured security threshold, particularly:

* High.
* Critical.

Security exceptions must be explicitly reviewed and documented rather than silently ignored.

---

# 8. The Iron Wall — CI/CD

The development rules above must be enforced automatically.

The CI/CD pipeline is responsible for preventing non-compliant code from reaching the main branch or production.

## 8.1 Pre-Commit Validation

Use:

* Husky.
* lint-staged.
* ESLint.
* Unit tests.

The pre-commit workflow should prevent commits containing:

* Linting errors.
* Formatting violations.
* Type errors.
* Failed tests.

## 8.2 Static Analysis

Every Pull Request must undergo static analysis using a tool such as:

* SonarQube.
* SonarCloud.

The analysis should detect:

* Code smells.
* Bugs.
* Security vulnerabilities.
* Duplicated code.
* Excessive complexity.
* Technical debt.

Pull Requests that violate the configured quality gate must be blocked.

## 8.3 Recommended CI Pipeline

```text
Pull Request
      |
      v
Install Dependencies
      |
      v
Type Checking
      |
      v
Lint
      |
      v
Unit Tests
      |
      v
Integration Tests
      |
      v
E2E Tests
      |
      v
Security Audit
      |
      v
Static Analysis
      |
      v
Quality Gate
      |
      +---- FAIL --> Reject
      |
      v
Build
      |
      v
Deploy
```

---

# 9. Architectural Principles

The following principles should guide every architectural decision.

## Single Responsibility

Each module, class, function, and service should have one clearly defined responsibility.

## Dependency Inversion

High-level business logic must not depend directly on infrastructure implementations.

## Separation of Concerns

Presentation, application logic, domain logic, and infrastructure must remain clearly separated.

## Composition Over Complexity

When functionality grows, compose smaller modules instead of creating increasingly complex classes or functions.

## Testability by Design

Code should be structured so that business logic can be tested without requiring:

* A database.
* An external API.
* A real email provider.
* An AI provider.
* The network.

## Security by Default

External input, especially AI-generated content, must always be considered untrusted.

Secrets must remain server-side.

Authentication and authorization must be explicitly designed rather than added as an afterthought.

## Infrastructure Independence

The business domain must remain independent from specific technology choices.

Replacing:

```text
Resend → Postmark
Prisma → Another ORM
Groq → Another AI Provider
Neon → Another PostgreSQL Provider
```

should not require rewriting the core business logic.

---

# 10. Golden Rule

> **Business logic must remain independent, infrastructure must remain replaceable, and every important behavior must be testable in isolation.**

Any implementation that makes the system harder to test, tightly couples the domain to infrastructure, exposes secrets, bypasses security controls, or introduces unnecessary complexity should be considered architecturally invalid and redesigned before being merged.
