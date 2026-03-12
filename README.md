# Rev Coffee — Custom Ordering Platform

**Built by [HAI Solutions](https://haiconsulting.github.io) | Live Demo: [haiconsulting.github.io/rev_coffee](https://haiconsulting.github.io/rev_coffee/)**

---

## What Is This?

A fully custom online ordering platform built specifically for **Rev Coffee Roasters** — designed to replace generic third-party ordering tools with a branded, cost-effective, locally supported solution.

This is a working demo that showcases what a production ordering system looks like when it's built around Rev's brand, menu, and workflow — not squeezed into someone else's template.

---

## The Problem

Rev Coffee currently relies on **two separate third-party platforms** for online ordering:

| Platform | What It Does | Fee Structure |
|----------|-------------|---------------|
| **Square Online** ([revcoffee.square.site](https://revcoffee.square.site)) | Web ordering, POS, gift cards, payments | **3.3% + $0.30 per transaction** |
| **Odeko** ([order.odeko.com](https://order.odeko.com/merchant/1387)) | Mobile/web ordering app | **5% per order** (2.1% to Odeko + 2.9% to Stripe) |

That means on a **$10 order**, Rev is paying **$0.63 to Square** or **$0.50 to Odeko** — every single time. Multiply that across hundreds of daily orders, and platform fees add up to thousands per month.

On top of that:
- The ordering experience looks like every other coffee shop on these platforms
- No control over the customer journey, layout, or branding
- Support is a ticket queue, not a conversation with a neighbor

---

## The Solution

A **custom-built ordering platform** that:

- Matches Rev's actual brand identity (yellow palette, Prompt font, playful energy from [revcoffee.com](https://revcoffee.com))
- Includes the full menu with all 57 items, categories, sizes, flavors, and modifiers
- Has a real-time **backend dashboard** for order management (Pending > Preparing > Ready > Completed)
- Integrates with **Square's payment processing API** for seamless checkout — keeping Rev on the POS system they already know and trust
- Costs a **flat rate** — no per-order commissions eating into margins

---

## Square Integration Plan

Rev already runs their entire operation on Square (POS, inventory, gift cards, payments). We don't replace that — we build on top of it.

**Phase 1 — Payment Processing**
- Integrate [Square Web Payments SDK](https://developer.squareup.com/docs/web-payments/overview) for secure card entry
- Support all current payment methods: Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay, Cash App Pay
- Online processing fees drop from **3.3% + $0.30** (Square Online) to **2.9% + $0.30** (Square API direct) — saving Rev money on every transaction with zero platform commission on top
- In-person rates stay at **2.6% + $0.10** through existing Square POS — no disruption to in-store workflow

**Phase 2 — Order Management**
- Push orders directly to Square's [Orders API](https://developer.squareup.com/docs/orders-api/what-it-does) so they appear in the existing Square Dashboard and Kitchen Display
- Sync with Square's inventory and catalog for real-time menu availability
- Webhook notifications for order status updates

**Phase 3 — Loyalty & Gift Cards**
- Connect to Square's [Loyalty API](https://developer.squareup.com/docs/loyalty-api/overview) so customers earn points on web orders
- Enable gift card purchases and redemption via [Square Gift Cards API](https://developer.squareup.com/docs/gift-cards-api/what-it-does)

---

## Features in This Demo

### Customer Ordering (Order Tab)
- Animated hero with Rev Coffee branding
- Full categorized menu: Espresso, Coffee, Specialty, Tea, Smoothies, Breakfast, Lunch, Bakery, Bottled
- 57 menu items with descriptions and pricing
- Item detail modal with size, flavor, milk, bread, and temperature options
- Pricing modifiers (e.g., +$0.75 for oat milk, +$0.50 for large)
- Cart drawer with quantity controls, customer details, and special instructions
- Order confirmation with order ID

### Backend Dashboard (Backend Tab)
- Real-time order cards with full item details
- Status workflow: Pending > Preparing > Ready > Completed
- Stats: total orders, revenue, pending count
- Filter by order status
- Customer name, phone, and special notes on each order

### HAI Solutions Value Prop
- **Save .4% Per Transaction** — Square API integration drops online processing from 3.3% to 2.9%, with zero platform commission
- Your Brand, Your Way — fully custom design, not a shared template
- Local Support — we're less than a mile from Rev Coffee
- Built in Days, Not Months — AI-accelerated development

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Fonts | Prompt (headings), Inter (body) — matching revcoffee.com |
| State | In-memory cart + localStorage for orders |
| Hosting | GitHub Pages (static, zero cost) |
| Payment (planned) | Square Web Payments SDK |
| Backend (planned) | Square Orders API + webhooks |

---

## Cost Comparison

| | Square Online | Odeko | HAI + Square API |
|---|---|---|---|
| Online processing | 3.3% + $0.30 | 5.0% | **2.9% + $0.30** (Square API) |
| Platform commission | Included above | Included above | **$0** |
| Monthly platform fee | $0 | $0 | **Flat monthly rate** |
| Custom branding | Limited | No | **Full control** |
| Menu flexibility | Template-based | Template-based | **Unlimited** |
| POS compatibility | Square only | Separate system | **Same Square POS** |
| Support | Ticket queue | Ticket queue | **Local, in-person** |

### Why Square API? Save .4% Per Transaction.

Rev already runs on Square for POS, inventory, gift cards, and in-store payments. Rather than introduce a new processor, we integrate directly with Square's API — dropping online processing from 3.3% to 2.9% (**.4% saved on every transaction**), zero platform commission, and orders sync straight to the Square Dashboard staff already uses.

**Example savings on $15,000/month in online orders:**
- Square Online fees: ~$825/month (3.3% + $0.30)
- Odeko fees: ~$750/month (5%)
- HAI + Square API: ~$735/month (2.9% + $0.30) — **plus no platform commission**

---

## Local File Structure

```
Rev_Coffee/
  index.html      # Main app — ordering + backend tabs
  styles.css      # Full stylesheet with Rev Coffee brand
  app.js          # Menu data, cart logic, order management
  package.json    # Project metadata
  README.md       # This file
```

---

## Running Locally

```bash
npx serve .
```

Then open [http://localhost:3000](http://localhost:3000).

---

## About HAI Solutions

We build custom software for local businesses — fast, affordable, and with real support from real people. We live less than a mile from Rev Coffee and we're here to help.

**Contact:** [haiconsulting.github.io](https://haiconsulting.github.io)
