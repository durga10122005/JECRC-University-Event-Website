# JECRC Events – Campus Event Management & Ticketing Portal 🎓🎟️

A high-performance, responsive Single Page Application (SPA) for **JECRC Events**, designed using **Google Stitch** ([Project #713001619035504919](https://stitch.withgoogle.com/projects/713001619035504919)). 

This centralized university platform empowers students to discover campus fests, hackathons, and workshops with 1-click registration, while granting club coordinators an admin console to manage registrations and scan digital passes at event gates.

---

## 🌟 Key Features

### 1. 🔍 Discovery Home Screen
- **Urgent Live Alert Marquee**: Continuous real-time animated ticker for urgent announcements and closing deadlines.
- **Hero Section**: Campus Connect credentials, live university metrics (18+ Active Clubs, ₹2.5L+ Prize Pools, 4,200+ Registrations).
- **Search & Multi-Tier Filter Engine**:
  - Live full-text search across titles, venues, clubs, and tags.
  - Eligibility filters: `All Access`, `🎓 JECRC Exclusive`, `🌐 Open to All Colleges`.
  - Category Pills: `All`, `Technical & Coding`, `Cultural & Arts`, `Robotics`, `Literary & Debates`, `Workshops`.
- **Dynamic Event Cards**: Real-time seat progress bars, date badges, verified club tags, bookmarking, and direct registration links.
- **Student Clubs Spotlight**: Showcase of societies like *Coding Club & Xananoids*, *Cultural Society*, *Acrobotics*, and *Zarurat NGO*.

### 2. ⚡ Event Details & 1-Click Registration
- **Hero Media & Live Countdown**: Real-time `Days : Hours : Mins : Secs` ticker.
- **Segmented Tabs**:
  - **About Event**: Detailed narrative, rules, and Innovation Tracks.
  - **Interactive Schedule Stepper**: Visual timeline for event phases.
  - **Prizes & Perks**: Cash awards breakdown and incubation opportunities.
  - **Coordinators**: Direct WhatsApp (`wa.me`) and phone inquiry links.
- **Dynamic Registration Engine**:
  - `Solo` vs. `Team` toggle with dynamic teammate addition.
  - Code of conduct validation.
  - **Confetti Explosion & Web Audio Chime** upon submission.
  - Instant generation of official digital entry pass saved to `localStorage`.

### 3. 🎫 Student Dashboard & Digital Boarding Passes
- **Verified Student Profile**: Roll number (`21JECRC042`), B.Tech CSE details, and live activity metrics.
- **Digital Boarding Pass Style Tickets**:
  - Google Stitch perforation styling with circular notch cutouts and dashed lines.
  - Vector QR code containing the unique pass identifier (`JECRC_PASS_{StudentID}_{EventID}`).
  - **1-Click Google Calendar**: Generates ready-to-save calendar event URLs.
  - **Download Pass**: Print and save pass for gate verification.
  - **Cancel Registration**: Frees up the seat quota back into the pool.
- **Past Events & E-Certificates**: Official verified attended events with an interactive modal to view, print, and download the **JECRC Certificate of Merit**.
- **Saved Watchlist**: Bookmarked events for rapid registration.

### 4. 🛡️ Admin & Club Coordinator Console (Gate Scanner)
- **Real-Time Metrics Cards**: Total registrations, live check-ins, capacity utilization gauge, and pending queue count.
- **Camera HUD Viewfinder**:
  - Live camera stream integration via `navigator.mediaDevices.getUserMedia` with fallback to animated laser HUD scan.
  - Flashlight / torch toggle and demonstration status triggers.
- **Instant Status Feedback**:
  - **Green Screen**: `ACCESS GRANTED` + celebratory positive audio chime.
  - **Red Screen**: `ALREADY CHECKED IN` (with prior check-in timestamp) or `INVALID PASS` + error buzz tone.
- **Manual Roll Number Check-in**: Direct Roll Number / Pass ID input for security desks.
- **Realtime Check-in Stream**: Ingress logs with student avatars and timestamps.
- **Searchable Attendee Roster**: Searchable student table.
- **1-Click CSV Export**: Downloads `jecrc_gate_attendees_export.csv` for university records.
- **Create New Event Wizard**: Form to publish new events directly into the discovery feed.

---

## 🎨 Visual Identity & Design System

- **Colors**:
  - Primary Slate & Deep Navy: `#0F172A` / `#0A192F` / `#131B2E`
  - Canvas Background: `#F8F9FF` & `#FFFFFF`
  - Action Driver (CTA): Vibrant Orange `#FF6B00` & Amber Gold `#F59E0B`
  - Neutral Borders & Card Surfaces: `#E2E8F0` and `#EFF4FF`
- **Typography**: Inter (Google Fonts) with Material Symbols Outlined.

---

## 🚀 Getting Started

No build tools or heavy installations required. The app is built with pure web technologies and Tailwind CSS.

### Run Locally:
```bash
# Clone the repository
git clone https://github.com/durga10122005/JECRC-University-Event-Website.git

# Navigate to the folder
cd JECRC-University-Event-Website

# Start a local static server (Python or Node)
python -m http.server 8085
```
Open **`http://localhost:8085`** in your browser.

---

## 📁 Project Structure

```
├── index.html           # Main Single Page Application (SPA)
├── css/
│   └── styles.css       # Custom animations, ticket notches, laser HUD
├── js/
│   └── app.js           # State manager, Audio synthesizer, Confetti, QR code
├── assets/
│   └── logo.svg         # Official JECRC Events Logo (Stitch design)
├── stitch_source/       # Reference designs extracted from Google Stitch
└── README.md            # Documentation
```

---

## 📜 License & Credits

Developed for **JECRC University & Foundation**, Jaipur, Rajasthan.  
Designed using **Google Stitch** design system.
