# NexaTech Solutions – Company Website
**Student Number:** 220401096  
**Assignment 1** | Angular Company Website

## Project Overview
A fully-featured Angular 17 company website for **NexaTech Solutions**, a fictional enterprise software company.

## Tech Stack
- **Angular 17** (Standalone Components)
- **Bootstrap 5.3** + **Bootstrap Icons**
- **Angular Router** with parameterised routes
- **Angular Signals** (CartService)
- **SCSS** for styling

## Pages / Components
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeComponent | Welcome, mission/vision, stats, highlights |
| `/about` | AboutComponent | History timeline, values, team, goals |
| `/services` | ServicesComponent | 6 services with features + process steps |
| `/products` | ProductListComponent | Product grid with *ngFor, currency pipe, add-to-cart |
| `/products/:id` | ProductDetailsComponent | Routing params, full desc, quantity, add-to-cart |
| `/blog` | BlogComponent | Featured post + 3 blog cards (news + case studies) |
| `/contact` | ContactComponent | Validated form, contact info, social links |

## Key Angular Features Demonstrated
- **Routing & Navigation** – `RouterLink`, `RouterLinkActive`, `ActivatedRoute`
- **Data Binding** – Interpolation `{{ }}`, property binding `[src]`, `[class]`
- **Event Binding** – `(click)`, `(ngSubmit)` handlers
- **Structural Directives** – `*ngFor`, `*ngIf`, `ng-template`
- **Two-way Binding** – `[(ngModel)]` on contact form
- **Currency Pipe** – `{{ price | currency:'USD':'symbol':'1.2-2' }}`
- **Angular Signals** – Reactive cart state with `signal()` and `computed()`
- **Standalone Components** – No NgModule required

## Getting Started
```bash
npm install
ng serve
```
Open http://localhost:4200

## Build for Production
```bash
ng build
```
