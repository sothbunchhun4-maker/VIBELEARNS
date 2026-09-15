# Vibelearn Design System & UI Guidelines

Version: 1.0 (May 2025)  
Reference Specification: `design/design-system.png`  
Target Stack: React, Tailwind CSS, Lucide Icons  

---

## 1. Core Principles

- **Clarity First:** Every element must communicate its purpose clearly. Information hierarchy is distinct and scannable.
- **Consistency:** Reusable design tokens, component variants, and interaction states ensure a unified experience across all views.
- **Focus & Calm:** Clean layouts with generous whitespace reduce cognitive load, allowing learners to focus on video and course content.
- **Accessible:** Meets WCAG 2.1 AA standards for color contrast, typography readability, interactive touch targets (minimum 44px), and keyboard navigation.

---

## 2. Color Palette

The color system is derived strictly from `design/design-system.png`, consisting of a vibrant, focused primary emerald green and a clean slate neutral scale.

### 2.1 Primary Brand Colors
Used for primary actions, active indicators, focus rings, progress bars, and key branding moments.

| Token | Hex Value | RGB / HSL | Usage |
| :--- | :--- | :--- | :--- |
| **Primary 500** | `#10B981` | `rgb(16, 185, 129)` | Base brand color, primary button background, active progress fill, focus borders |
| **Primary 400** | `#34D399` | `rgb(52, 211, 153)` | Hover state for dark themes, soft gradients, highlights |
| **Primary 300** | `#6EE7B7` | `rgb(110, 231, 183)` | Light borders, subtle accents |
| **Primary 200** | `#A7F3D0` | `rgb(167, 243, 208)` | Soft badge borders, active item backgrounds |
| **Primary 100** | `#D1FAE5` | `rgb(209, 250, 229)` | Badge backgrounds (Video/Lesson tags), light highlight fills |

### 2.2 Neutral Colors
Used for typography, page surfaces, borders, dividers, and card backgrounds.

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Neutral 900** | `#0F172A` | Primary text headings, dark UI accents, high-contrast badges |
| **Neutral 700** | `#334155` | Secondary text, subheadings, table headers |
| **Neutral 500** | `#64748B` | Muted labels, metadata, input placeholders, icon secondary states |
| **Neutral 300** | `#CBD5E1` | Dividers, disabled control borders, subtle outlines |
| **Neutral 200** | `#E2E8F0` | Default card borders, input borders, divider lines |
| **Neutral 100** | `#F1F5F9` | Hover surface backgrounds, track background for progress bars |
| **Neutral 50** | `#FAFAFC` | Page body background, secondary panel background |
| **White** | `#FFFFFF` | Card surfaces, modal surfaces, button white text |

---

## 3. Typography & Type Scale

The platform pairs an elegant serif display face (`Playfair Display`) for hero and section headers with a crisp, modern sans-serif (`Inter`) for UI elements, cards, and reading copy.

### 3.1 Font Families
- **Display Serif:** `'Playfair Display', serif`
- **Interface Sans:** `'Inter', sans-serif`

### 3.2 Type Scale

| Style | Font Family | Size / Line Height | Tailwind Size | Weight | Primary Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | Playfair Display | `48px / 56px` (`3rem / 3.5rem`) | `text-5xl` | Bold (700) | Page hero titles (e.g. Catalog header, Course title) |
| **Display 2** | Playfair Display | `36px / 44px` (`2.25rem / 2.75rem`) | `text-4xl` | Bold (700) | Major section titles |
| **Heading 1** | Inter | `28px / 36px` (`1.75rem / 2.25rem`) | `text-2xl` / `text-[28px]` | Semi Bold (600) | Card titles, modal headers |
| **Heading 2** | Inter | `22px / 30px` (`1.375rem / 1.875rem`) | `text-xl` / `text-[22px]` | Semi Bold (600) | Sub-section titles, module headers |
| **Heading 3** | Inter | `18px / 26px` (`1.125rem / 1.625rem`) | `text-lg` | Medium (500) | Small section titles, lesson list titles |
| **Body Large** | Inter | `16px / 24px` (`1rem / 1.5rem`) | `text-base` | Regular (400) | Lead body paragraphs, primary navigation items |
| **Body** | Inter | `14px / 20px` (`0.875rem / 1.25rem`) | `text-sm` | Regular (400) | Standard supporting copy, input labels, card details |
| **Small** | Inter | `12px / 16px` (`0.75rem / 1rem`) | `text-xs` | Regular (400) | Metadata captions, progress tags, badge labels |

---

## 4. Spacing System

Based on a standard `4px` grid unit.

| Space Unit | Value (px) | Value (rem) | Tailwind Class | Common Application |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `4px` | `0.25rem` | `p-1`, `gap-1`, `m-1` | Micro spacing between icon & inline text |
| **2** | `8px` | `0.5rem` | `p-2`, `gap-2`, `m-2` | Badge internal padding, tight list item gap |
| **3** | `12px` | `0.75rem` | `p-3`, `gap-3`, `m-3` | Compact button padding, card interior margins |
| **4** | `16px` | `1rem` | `p-4`, `gap-4`, `m-4` | Default input padding, component gaps |
| **6** | `24px` | `1.5rem` | `p-6`, `gap-6`, `m-6` | Card padding, standard grid gap |
| **8** | `32px` | `2rem` | `p-8`, `gap-8`, `m-8` | Section vertical gap |
| **10** | `40px` | `2.5rem` | `p-10`, `gap-10` | Section dividers, large feature containers |
| **12** | `48px` | `3rem` | `p-12`, `gap-12` | Major section vertical padding |
| **16** | `64px` | `4rem` | `p-16`, `gap-16` | Hero section vertical spacing |

---

## 5. Border Radius & Shadows

### 5.1 Radius Scale
- **Radius xs (`4px`):** Small inline badges, chips.
- **Radius sm (`8px`):** Secondary controls, tooltips.
- **Radius md (`12px`):** **Default component radius** for all buttons, inputs, dropdowns, and cards.
- **Radius lg (`16px`):** Large cards, hero feature blocks, modal containers.
- **Radius xl (`24px`):** Main lesson container, media wrappers.
- **Radius Full (`9999px`):** Pills, circular avatar containers, round status icons.

### 5.2 Elevation & Shadows
- **Sm (`shadow-sm`):** `0 1px 2px 0 rgba(0, 0, 0, 0.05)` — Subtle separation for inputs and buttons.
- **Md (`shadow-md`):** `0 4px 12px -2px rgba(0, 0, 0, 0.08)` — Standard card elevation on hover.
- **Lg (`shadow-lg`):** `0 12px 24px -4px rgba(0, 0, 0, 0.10)` — Floating popovers, active dropdowns.
- **XL (`shadow-xl`):** `0 20px 40px -8px rgba(0, 0, 0, 0.12)` — Sticky navigation bars, focused modals.

---

## 6. Components & UI Patterns

### 6.1 Buttons
Buttons have a fixed default height of `44px`, an interior radius of `12px` (`rounded-xl`), and use `Inter Medium (14px - 16px)`.

- **Primary Button:**
  - Base: `bg-[#10B981] text-white px-4 py-2.5 rounded-xl font-medium transition-colors`
  - Hover: `hover:bg-[#059669]`
  - Disabled: `bg-[#A7F3D0] text-white cursor-not-allowed`
- **Secondary Button:**
  - Base: `bg-white text-[#10B981] border border-[#10B981] px-4 py-2.5 rounded-xl font-medium transition-colors`
  - Hover: `hover:bg-[#F0FDF4]`
  - Disabled: `border-[#E2E8F0] text-[#94A3B8] cursor-not-allowed`
- **Tertiary Button / Outline:**
  - Base: `bg-white text-[#334155] border border-[#E2E8F0] px-3.5 py-2.5 rounded-xl font-medium transition-colors`
  - Hover: `hover:bg-[#F8FAFC]`
  - Disabled: `border-[#E2E8F0] text-[#CBD5E1] cursor-not-allowed`
- **Text / Ghost Button:**
  - Base: `bg-transparent text-[#10B981] hover:text-[#059669] font-medium transition-colors`

### 6.2 Form Inputs & Selects
- **Height:** `44px`
- **Radius:** `12px` (`rounded-xl`)
- **Border:** `1px solid #E2E8F0`
- **Padding:** `0 16px` (`px-4`)
- **Typography:** `text-sm text-[#0F172A] placeholder-[#64748B]`
- **Focus State:** `focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]`
- **Search Input Variant:** Includes a magnifying glass icon (`w-4 h-4 text-[#64748B]`) left-aligned and an optional shortcut tag (`⌘K` or `Ctrl+K`) right-aligned.

### 6.3 Badges & Tags
Compact indicator tags rendered with rounded pill borders (`rounded-full`) or soft-rounded corners (`rounded-lg`):
- **Video Tag:** `bg-[#D1FAE5] text-[#059669] text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1`
- **Lesson Tag:** `bg-[#E0F2FE] text-[#0284C7] text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1`
- **Popular Tag:** `bg-[#DCFCE7] text-[#16A34A] text-xs font-semibold px-2.5 py-0.5 rounded-full`

### 6.4 Status Indicators
- **In Progress:** Green dot / play icon (`#10B981`)
- **Completed:** Green filled checkmark circle (`#10B981`)
- **Now Playing:** Solid green indicator or badge highlighting the current active lesson
- **Locked / Upcoming:** Neutral lock icon (`#94A3B8`)

### 6.5 Progress Bar
- **Container:** `w-full h-2 bg-[#F1F5F9] rounded-full overflow-hidden`
- **Fill:** `h-full bg-[#10B981] rounded-full transition-all duration-300`
- **Label:** `text-xs font-medium text-[#64748B]` displayed adjacent or beneath the bar (e.g. `35% complete`).

### 6.6 Card Patterns
- **Course Catalog Card:**
  - Container: `bg-white border border-[#E2E8F0] rounded-xl p-5 hover:shadow-md transition-shadow`
  - Elements: Course logo/badge, Title (`text-lg font-semibold text-[#0F172A]`), Summary (`text-sm text-[#64748B]`), metadata row (Skill Level, Duration, Module Count).
- **Video / Lesson Item Card:**
  - Container: `flex items-center justify-between p-3.5 rounded-xl hover:bg-[#F8FAFC] border border-[#F1F5F9]`
  - Elements: Status indicator, Lesson Title, Duration, Resume button.
- **Resource Card:**
  - Container: `flex items-center gap-3 p-4 bg-white border border-[#E2E8F0] rounded-xl`
  - Elements: Document icon, Title, description, File type & size (e.g., `PDF · 1.2 MB`), Download icon.

### 6.7 Navigation & Breadcrumbs
- **Header Navigation:**
  - Height: `64px` (`h-16`)
  - Layout: `flex items-center justify-between px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-50`
  - Logo: Emerald green mark with dark text (`Vibe Learn`)
  - Nav Links: `Courses` and `My Learning` with active tab indicators (green bottom border or bold highlight).
- **Breadcrumbs:**
  - Format: `All Courses > [Course Title] > [Lesson Title]`
  - Style: `text-xs text-[#64748B] flex items-center gap-2`
- **Pagination:**
  - Chevrons left/right (`rounded-lg border border-[#E2E8F0] p-2 hover:bg-[#F8FAFC]`)
  - Active page number in emerald pill (`bg-[#10B981] text-white rounded-lg px-3 py-1.5`)

---

## 7. Responsiveness & Breakpoints

Standard Tailwind breakpoints are applied:
- **Mobile (`< 640px`):** Single column layouts, stacked hero, sticky bottom navigation or collapsed hamburger menu, collapsed lesson sidebar underneath player.
- **Tablet (`640px - 1024px`):** 2-column catalog grid, flexible lesson player with collateral tabs.
- **Desktop (`>= 1024px`):** 3-column catalog grid, 2-column lesson page with video player (left) and curriculum sidebar (right), matching desktop reference screenshots.
