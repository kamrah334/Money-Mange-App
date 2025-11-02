# Smart Budget Manager - Design Guidelines

## Design Approach

**Hybrid Reference-Based System** drawing from:
- **Linear** - Clean typography, spacious layouts, and data clarity
- **Stripe** - Trust-building through minimalism and precision with financial data
- **Notion** - Organized information architecture and intuitive data management

This approach prioritizes **clarity, trust, and efficiency** for financial data while maintaining modern aesthetic appeal.

---

## Typography System

### Font Families
- **Primary**: Inter (via Google Fonts) - All UI elements, data, and body text
- **Monospace**: JetBrains Mono - Financial figures, balances, transaction amounts

### Type Scale
- **Hero Numbers** (Balance, Totals): text-5xl md:text-6xl, font-bold, tracking-tight
- **Page Titles**: text-3xl md:text-4xl, font-bold, tracking-tight
- **Section Headers**: text-xl md:text-2xl, font-semibold
- **Card Titles**: text-lg, font-semibold
- **Body Text**: text-base, font-normal
- **Captions/Labels**: text-sm, font-medium
- **Micro Text**: text-xs, font-normal

### Financial Number Treatment
- All monetary values use monospace font for digit alignment
- Large balances: tabular-nums for consistent spacing
- Negative amounts indicated by positioning/layout, not just symbols

---

## Layout System

### Spacing Primitives
**Core Tailwind Units**: 2, 4, 6, 8, 12, 16, 24
- Micro spacing: p-2, gap-2 (tight elements)
- Standard spacing: p-4, gap-4, m-4 (default component padding)
- Section spacing: p-6, py-8 (content areas)
- Large spacing: p-12, py-16 (page sections, major separations)
- Extra large: py-24 (between major page sections)

### Grid System
- Dashboard cards: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Transaction list: Single column with max-w-4xl mx-auto
- Analytics charts: grid grid-cols-1 lg:grid-cols-2 gap-8

### Container Widths
- Full-width pages: max-w-7xl mx-auto px-4 md:px-6
- Content pages: max-w-6xl mx-auto px-4
- Forms and focused content: max-w-2xl mx-auto px-4
- Transaction history: max-w-4xl mx-auto px-4

---

## Core Components

### Navigation
**Desktop Sidebar** (fixed, left-aligned):
- Width: w-64, height: h-screen
- Navigation items: p-4, rounded-lg transitions
- Icon + text layout with gap-3
- Active state: subtle background treatment
- Bottom: Settings and theme toggle

**Mobile Navigation** (bottom bar):
- Fixed bottom with h-16
- 5 primary actions: Dashboard, Add, History, Analytics, Settings
- Icon-only with labels below (flex flex-col items-center gap-1)

### Dashboard Cards
**Balance Overview Card** (prominent, top of dashboard):
- Large padding: p-8
- Balance display: text-5xl md:text-6xl, monospace, bold
- Sub-metrics (Total In/Out): grid grid-cols-2 gap-8 mt-8
- Each metric: flex flex-col gap-2

**Quick Stats Cards**:
- Standard padding: p-6
- Icon + label + value layout
- Rounded: rounded-xl
- Shadow: shadow-sm with hover:shadow-md transition

### Transaction Components

**Add Transaction Form**:
- Container: max-w-2xl, centered
- Field spacing: space-y-6
- Input groups: flex flex-col gap-2
- Labels: text-sm font-medium mb-2
- Inputs: p-4, rounded-lg, text-base
- Amount input: text-2xl, monospace, font-semibold
- Toggle for Cash In/Out: Segmented control (flex, rounded-lg container)
- Submit button: Full width on mobile, w-auto on desktop, px-8 py-4

**Transaction List Items**:
- Padding: p-4
- Border separation: border-b last:border-0
- Layout: flex justify-between items-center
- Left section: flex flex-col gap-1 (description, category, date)
- Right section: flex items-center gap-4 (amount, actions)
- Amount: text-lg, monospace, font-semibold
- Actions: Icon buttons with p-2, hover states

**Transaction Filters**:
- Sticky top bar: sticky top-0, z-10, p-4
- Filter chips: flex flex-wrap gap-2
- Each chip: px-4 py-2, rounded-full, text-sm
- Date range: Dropdown with calendar icon
- Search: Input with search icon, rounded-full

### Analytics Components

**Chart Containers**:
- Padding: p-6 md:p-8
- Height: h-80 for charts
- Title: text-xl font-semibold mb-6
- Chart wrapper: Responsive container maintaining aspect ratio

**Category Breakdown**:
- Pie chart + legend layout: flex flex-col lg:flex-row gap-8
- Legend items: flex items-center gap-3, text-sm
- Category indicators: w-4 h-4 rounded-full

**Monthly Trend**:
- Bar chart with x-axis (months), y-axis (amounts)
- Tooltip: Custom styled with p-3, rounded-lg, shadow-lg
- Grid lines: Subtle, minimal

### Settings Page

**Settings Groups**:
- Section spacing: space-y-8
- Section title: text-lg font-semibold mb-4
- Setting items: flex justify-between items-center p-4

**Backup Controls**:
- Google Drive connection status: Prominent badge/indicator
- Backup buttons: flex gap-3, responsive stacking
- Last backup timestamp: text-sm, subtle
- Export CSV: Secondary button treatment

**Theme Toggle**:
- Segmented control with icons
- Light/Dark/System options
- Width: w-full md:w-auto

---

## Data Visualization

### Chart Styling
- Clean, minimal axes
- Generous padding around charts (p-6)
- Tooltips: Floating cards with shadow-lg, rounded-lg, p-3
- Legend: Horizontal on desktop, vertical on mobile
- Grid: Subtle dotted lines
- Animations: Smooth entry (300ms duration)

### Empty States
- Centered content: flex flex-col items-center justify-center, min-h-[400px]
- Icon: Large, subtle (w-16 h-16)
- Message: text-lg font-medium, mt-4
- Action: Primary button, mt-6

---

## Interaction Patterns

### Forms
- Focus states: Ring outline with offset
- Validation: Inline messages below inputs, text-sm
- Error states: Subtle indicator, descriptive text
- Success feedback: Toast notification (top-right, slides in)

### Buttons
**Primary**: 
- Padding: px-6 py-3
- Text: font-semibold
- Rounded: rounded-lg
- Transition: all 150ms

**Secondary**:
- Same sizing as primary
- Bordered treatment
- Subtle hover state

**Icon Buttons**:
- Size: p-2 for standard, p-3 for prominent
- Rounded: rounded-lg
- Centered icon: flex items-center justify-center

### Modals/Overlays
- Backdrop: Fixed overlay with blur
- Modal: max-w-lg, rounded-xl, p-6
- Header: pb-4, border-b
- Footer: pt-4, border-t, flex justify-end gap-3

---

## Responsive Behavior

### Breakpoints
- Mobile: Default (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (1024px+)

### Layout Shifts
- **Dashboard**: 1 column → 2 columns → 3 columns
- **Sidebar**: Hidden (bottom nav) → Visible fixed sidebar
- **Transaction list**: Full width → Constrained center column
- **Charts**: Stacked → Side-by-side grid

### Touch Targets
- Minimum: 44px × 44px for all interactive elements
- Increased padding on mobile for buttons: p-4 vs p-3

---

## Accessibility

### Focus Management
- Visible focus rings on all interactive elements
- Skip navigation link for keyboard users
- Logical tab order throughout application

### Screen Reader Support
- Descriptive labels for all form inputs
- ARIA labels for icon-only buttons
- Live regions for dynamic balance updates
- Semantic HTML structure (nav, main, aside, section)

---

## PWA-Specific Design

### Install Prompt
- Dismissible banner at top: p-4, flex justify-between
- Appears after user adds first transaction
- Clear "Install App" CTA

### Offline Indicator
- Subtle banner when offline: Fixed top, slide-down animation
- Online/offline status in settings page
- Sync status indicator during Google Drive operations

---

## Images

**No hero images** - This is a utility-focused application where users want immediate access to their financial data. The dashboard serves as the entry point with balance cards front and center.

**Iconography**: Use Heroicons throughout for consistency
- Outline style for navigation and secondary actions
- Solid style for active states and primary buttons
- Size: w-5 h-5 for standard, w-6 h-6 for prominent placements