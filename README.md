# Feedback API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-20%2B-green)](https://nodejs.org/)

An open-source REST API for collecting, organizing, and analyzing user feedback. Built with **NestJS**, **TypeScript**, and **SQLite3**/**PostgreSQL**.

---

## Features
### Planned Features

**Phase 1: Core MVP** (current development)
- Feedback CRUD operations (create, read, update, delete)
- Survey management with questions
- Response collection and retrieval
- Input validation and error handling
- Swagger/OpenAPI documentation

**Phase 2: Analytics**
- Response statistics and aggregation
- Survey analytics endpoints
- Question-level analytics
- Query optimization and indexing

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 20.x | Runtime environment |
| **NestJS** | 11.0 | Progressive Node.js framework with excellent structure |
| **TypeScript** | 5.7 | Type-safe JavaScript targeting ES2023 |
| **Jest** | 30.0 | Unit and E2E testing framework |
| **ESLint & Prettier** | Latest | Code quality and automated formatting |
| **GitHub Actions** | - | CI/CD automation and testing |
| **Semantic Release** | - | Automated versioning and changelog generation |

---

## Quick Start

### Prerequisites
- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/shichenitu/Feedback-API-Project.git
cd Feedback-API-Project

# Install dependencies
npm install

# Start the development server
npm run start:dev
```

The API will be available at `http://localhost:3000`

### Verify Installation
```bash
# You should receive a response
curl http://localhost:3000
# Response: "Hello World!"
```

---

## API Documentation

Swagger/OpenAPI documentation is coming soon and will be available at `/api/docs` once implemented.

The API will follow RESTful conventions with standard HTTP methods and status codes:
- `GET` for retrieval
- `POST` for creation
- `PUT` for updates
- `DELETE` for deletion
- `200/201` for success, `400` for bad requests, `404` for not found, `500` for server errors

---

## Project Structure

```
src/
├── main.ts                    # Application entry point
├── app.module.ts              # Root module
├── app.controller.ts          # Root controller
├── app.service.ts             # Root service
├── user/
│   ├── user.entity.ts         # User entity definition
│   ├── user.service.ts        # User business logic (coming soon)
│   └── user.controller.ts     # User endpoints (coming soon)
├── feedback/
│   ├── feedback.entity.ts     # Feedback entity definition
│   ├── feedback.service.ts    # Feedback business logic (coming soon)
│   └── feedback.controller.ts # Feedback endpoints (coming soon)
└── common/
    ├── filters/               # Exception handlers
    ├── pipes/                 # Validation pipes
    └── decorators/            # Custom decorators

test/
├── app.e2e-spec.ts            # E2E test suite
└── jest-e2e.json              # E2E test configuration

.github/workflows/
├── ci.yml                     # Continuous integration pipeline
└── release.yml                # Automated release workflow
```

**Design Principles:**
- **Services** - Contain business logic and database queries
- **Controllers** - Handle HTTP requests and input validation
- **Entities** - Define database models and relationships
- **Error Handling** - Consistent, descriptive error responses
- **Testing** - Both unit and integration test coverage

---

## Development

### Setting Up Your Environment

```bash
# Install dependencies
npm install

# Verify setup by running tests
npm test
```

### Available npm Scripts

```bash
# Development
npm run start              # Start production server
npm run start:dev          # Start with hot-reload
npm run start:debug        # Start with debugger
npm run start:prod         # Run built application

# Building
npm run build              # Compile TypeScript to JavaScript

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format with Prettier

# Testing
npm test                   # Run unit tests
npm run test:watch         # Watch mode for tests
npm run test:cov           # Generate coverage report
npm run test:debug         # Debug tests
npm run test:e2e           # Run end-to-end tests

# Releases
npm run semantic-release   # Create a new release (CI/CD only)
```

### Code Style

The project uses **ESLint** and **Prettier** for consistent code formatting:

```bash
# Lint your code
npm run lint

# Auto-format your code
npm run format
```

### Semantic Commits

This project follows [Conventional Commits](https://www.conventionalcommits.org) specification for clear, semantic commit messages:

```
feat: add user authentication          # New feature (minor version bump)
fix: resolve login timeout issue       # Bug fix (patch version bump)
docs: update API documentation         # Documentation (no version bump)
refactor: simplify survey logic        # Refactoring (no version bump)
test: add tests for feedback service   # Tests (no version bump)
```

Using semantic commits enables automated version management and changelog generation.

---

## Testing

The project includes comprehensive test coverage with both unit and integration tests.

### Running Tests Locally

```bash
# Unit tests
npm test

# Unit tests with coverage report
npm run test:cov

# End-to-end tests
npm run test:e2e

# Watch mode (re-run on file changes)
npm run test:watch
```

### CI/CD Automation

All tests are automatically run on:
- **Push to main branch** - Triggers full CI pipeline
- **Pull requests to main** - Blocks merge if tests fail

The GitHub Actions pipeline includes:
1. **Linting** - ESLint validation (~30s)
2. **Unit Tests** - Jest with coverage (~45s)
3. **Build** - TypeScript compilation (~30s)
4. **E2E Tests** - Integration tests (~60s)

View pipeline status in the **Actions** tab of the GitHub repository.

---

## Roadmap

### Phase 1: Core MVP (Current)
Establishing the foundation for feedback collection:
- [ ] Survey CRUD endpoints (create, read, update, delete)
- [ ] Question management (add, remove, reorder questions)
- [ ] Response collection and retrieval
- [ ] Comprehensive input validation
- [ ] Error handling with descriptive messages
- [ ] Swagger/OpenAPI documentation
- [ ] Database schema and migrations

### Phase 2: Analytics (Q2 2026)
Adding insight capabilities:
- [ ] Response statistics (count, trends)
- [ ] Survey analytics endpoints
- [ ] Question-level analytics
- [ ] Query optimization with proper indexing
- [ ] Performance monitoring

### Phase 3+: Ideas for Future Enhancements
Advanced features ideas (no commitment yet):
- [ ] Advanced question types (matrix questions, ranking, conditional logic)
- [ ] Survey templates and presets
- [ ] Multi-team/organization support with permission models
- [ ] Data export functionality (CSV, PDF)
- [ ] Real-time results dashboard
- [ ] Webhook notifications for new responses
- [ ] Public/shareable survey links
- [ ] Response filtering and search

Share your thoughts by adding a new [https://github.com/shichenitu/Feedback-API-Project/issues/new?q=state%3Aopen+label%3Aenhancement](Feature request)

---

## Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
3. **Create** a feature branch: `git checkout -b feat/your-feature-name`
4. **Make** your changes
5. **Test** your changes: `npm test && npm run test:e2e`
6. **Lint** your code: `npm run lint`
7. **Commit** with semantic messages: `git commit -m "feat: describe your feature"`
8. **Push** to your fork: `git push origin feat/your-feature-name`
9. **Open** a pull request to `main` with a clear description

### Requirements

Before submitting a pull request, ensure:
- ✅ All tests pass: `npm test && npm run test:e2e`
- ✅ Code is properly formatted: `npm run lint`
- ✅ New features include tests
- ✅ Commits use [semantic commit](https://www.conventionalcommits.org) format
- ✅ Documentation is updated if needed

### Code Review Process

Pull requests are reviewed for:
- **Strategy** - Does it align with our roadmap and product vision?
- **Functionality** - Does it work as intended?
- **Testing** - Are new features properly tested?
- **Code Quality** - Does it follow project patterns?
- **Documentation** - Is it clearly documented?
- **Performance** - Are there any performance implications?

GitHub Actions must show all checks passing before merge is possible.

### Questions or Issues?

- **Report bugs** via GitHub Issues
- **Discuss features** in GitHub Discussions
- **Review code** in pull requests

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

The MIT License is a permissive open-source license that allows you to:
- ✅ Use this software for commercial purposes
- ✅ Modify the source code
- ✅ Distribute the software
- ✅ Use privately

With the requirement to:
- ⚠️ Include the license and copyright notice

---

## Authors

- [**Shi Chen**](https://github.com/shichenitu) - Co-author
- [**Gianmarco Murru**](https://github.com/gianmarcomurru) - Co-author

---

## Connect & Support

- **GitHub Issues** - Report bugs or request features
- **GitHub Discussions** - Ask questions and discuss ideas
- **License Questions** - See [LICENSE](./LICENSE) file

Thank you for your interest in the Feedback API! 🚀
