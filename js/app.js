/**
 * JECRC Events – Single Page Application (SPA) Engine
 * Designed adhering to Google Stitch Design Tokens and Components
 */

// Global App State with LocalStorage Persistence
const STORAGE_KEY = 'jecrc_events_data_v1';

const DEFAULT_EVENTS = [
  {
    id: 'hack-o-holics',
    title: 'Hack-O-Holics 4.0: 24-Hour Hackathon',
    club: 'Xananoids & Coding Club',
    category: 'Technical & Coding',
    eligibility: 'All Access',
    dateBadge: { month: 'OCT', day: '24', year: '2026' },
    fullDate: 'October 24-25, 2026 • 10:00 AM IST',
    venue: 'Central Auditorium & Lab 3',
    entryFee: 'Free (Student ID Req.)',
    capacity: 200,
    registeredCount: 145,
    tag: 'Flagship Hackathon',
    badge: '24H Non-Stop',
    urgent: true,
    bannerUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD8DRwpk_E2evTRHuZvE8YlUqWbyl0pimjLsEAAdvWr70Oj7a5Tlf_MSuhIlMNfwRGKn-fRGPvN5CLgi2RYEIiqkwdT20TgCsdyPZPiV-L0GDDXpNn8VsP1OWOoYhXTq1RxD3evD-D-0EJgXtD0I7nEty0eZh3Jl_LEC4zQq9L310AqoHVJVclPmQBhk3OQu5hzpoJjO2j5uPVKGXGHg6r1GtuHGvUNmoZjP5UAbHvhYWtgSwAGNs',
    description: 'Hack-O-Holics 4.0 is JECRC’s premier annual 24-hour hackathon bringing together over 500+ developers, designers, and innovators to hack real-world collegiate, industrial, and social bottlenecks under the mentorship of top industry leaders.',
    tracks: [
      { name: 'AI & Generative Intelligence', desc: 'Agentic workflows, campus LLM assistants & multimodal vision prototypes.' },
      { name: 'FinTech & Web3 Security', desc: 'Decentralized credentials, micro-savings & zero-knowledge security.' },
      { name: 'Smart Campus IoT & Hardware', desc: 'Automation of energy grids, automated hostel entries & lab monitoring.' }
    ],
    timeline: [
      { time: '10:00 AM (Day 1)', title: 'Opening Keynote & Problem Statements Release' },
      { time: '11:30 AM (Day 1)', title: 'Hacking Commences & Mentor Round 1' },
      { time: '04:00 PM (Day 1)', title: 'First Checkpoint & Progress Evaluation' },
      { time: '12:00 AM (Midnight)', title: 'Midnight Coding Fuel & Fun Mini-Games' },
      { time: '10:00 AM (Day 2)', title: 'Final Pitching to Jury Panel' },
      { time: '02:00 PM (Day 2)', title: 'Award Ceremony & Certificate Distribution' }
    ],
    prizes: [
      { rank: '1st Winner', amount: '₹25,000 Cash', perk: 'Direct Incubation at JECRC E-Cell + Cloud Credits' },
      { rank: '1st Runner Up', amount: '₹15,000 Cash', perk: 'Hardware Dev Kits + Paid Internship Opportunities' },
      { rank: 'Best All-Women Team', amount: '₹10,000 Cash', perk: 'Exclusive Mentorship + Goodies Pack' }
    ],
    coordinators: [
      { name: 'Kabir Mehta', role: 'Lead Student Coordinator', phone: '+91 98291 00214', email: 'kabir.m@jecrc.ac.in' },
      { name: 'Priya Sharma', role: 'Technical Head', phone: '+91 94142 88910', email: 'priya.tech@jecrc.ac.in' }
    ]
  },
  {
    id: 'renaissance-2026',
    title: 'Renaissance 2026: Cultural Extravaganza',
    club: 'JECRC Cultural Society',
    category: 'Cultural & Arts',
    eligibility: 'All Access',
    dateBadge: { month: 'NOV', day: '12', year: '2026' },
    fullDate: 'November 12-14, 2026 • 04:00 PM IST',
    venue: 'Open Air Theatre & Sports Complex',
    entryFee: '₹150 (Pass Included)',
    capacity: 1000,
    registeredCount: 820,
    tag: 'Annual Fest',
    badge: 'Celebrity Night',
    urgent: true,
    bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    description: 'Renaissance is the hallmark annual cultural festival of JECRC, spanning 3 electrifying nights of musical performances, celebrity headliners, fashion showcases, and street theatre.',
    tracks: [
      { name: 'Battle of the Bands', desc: 'Inter-college rock & fusion bands competing for the northern crown.' },
      { name: 'Verve: Fashion Parade', desc: 'Thematic haute couture collections choreographed by university teams.' },
      { name: 'Starlight Concert', desc: 'Electrifying live musical performance by a renowned Bollywood star.' }
    ],
    timeline: [
      { time: '04:00 PM (Day 1)', title: 'Inaugural Lamp Lighting & Classical Showcase' },
      { time: '07:00 PM (Day 1)', title: 'Inter-College Dance Battle: Footloose' },
      { time: '05:00 PM (Day 2)', title: 'Verve Fashion Show & Street Play Finals' },
      { time: '07:30 PM (Day 3)', title: 'Grand Celebrity Concert & Fireworks' }
    ],
    prizes: [
      { rank: 'Battle of the Bands Champion', amount: '₹40,000 Cash', perk: 'Studio Recording Contract' },
      { rank: 'Best Fashion Delegation', amount: '₹20,000 Cash', perk: 'Cover Feature in Jaipur Youth Mag' }
    ],
    coordinators: [
      { name: 'Ananya Saxena', role: 'Cultural Secretary', phone: '+91 97851 22334', email: 'ananya.cul@jecrc.ac.in' },
      { name: 'Rishabh Mathur', role: 'Stage Manager', phone: '+91 98280 44556', email: 'rishabh.m@jecrc.ac.in' }
    ]
  },
  {
    id: 'roborumble-2026',
    title: 'RoboRumble: Autonomous Line Follower',
    club: 'Acrobotics Club',
    category: 'Robotics',
    eligibility: 'JECRC Exclusive',
    dateBadge: { month: 'NOV', day: '18', year: '2026' },
    fullDate: 'November 18, 2026 • 10:00 AM IST',
    venue: 'Robotics Lab 2, Academic Block B',
    entryFee: 'Free',
    capacity: 60,
    registeredCount: 48,
    tag: 'Robotics Challenge',
    badge: 'Hardware Combat',
    urgent: false,
    bannerUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    description: 'Design and deploy high-speed micro-controller autonomous rovers capable of navigating complex line tracks, loop inversions, and randomized obstacle terrains with PID tuning.',
    tracks: [
      { name: 'High-Speed Line Follower', desc: 'Fastest navigation through sharp 90-degree turns and switchbacks.' },
      { name: 'Maze Solver Autonomous Bot', desc: 'Obstacle avoidance with ultrasonic and optical sensors.' }
    ],
    timeline: [
      { time: '10:00 AM', title: 'Bot Inspection & Dimensions Verification' },
      { time: '11:00 AM', title: 'Round 1: Qualifying Time Trials' },
      { time: '02:00 PM', title: 'Round 2: Extreme Obstacle Loop' },
      { time: '04:30 PM', title: 'Final Head-to-Head Duel & Valedictory' }
    ],
    prizes: [
      { rank: 'Track Record Champion', amount: '₹15,000 Cash', perk: 'Acrobotics Lab Fellowship' },
      { rank: 'Most Innovative Hardware Design', amount: '₹8,000 Cash', perk: 'Microcontroller Toolkits' }
    ],
    coordinators: [
      { name: 'Aryan Agarwal', role: 'Acrobotics Convener', phone: '+91 91161 77889', email: 'aryan.bot@jecrc.ac.in' }
    ]
  },
  {
    id: 'wordsmith-debate',
    title: 'Wordsmith: National Parliamentary Debate',
    club: 'Literary & MUN Society',
    category: 'Literary & Debates',
    eligibility: 'Open to All Colleges',
    dateBadge: { month: 'NOV', day: '22', year: '2026' },
    fullDate: 'November 22-23, 2026 • 09:30 AM IST',
    venue: 'Seminar Hall 1 & Moot Court',
    entryFee: 'Free',
    capacity: 50,
    registeredCount: 32,
    tag: 'National Debate',
    badge: 'Cash Awards',
    urgent: false,
    bannerUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    description: 'A 2-day Asian Parliamentary Debate Championship deliberating on artificial intelligence governance, collegiate autonomy, and economic reforms.',
    tracks: [
      { name: 'Asian Parliamentary Debate (3v3)', desc: 'Government vs. Opposition on contemporary socio-tech motions.' },
      { name: 'Turncoat Debating (Solo)', desc: 'Speaking for 2 mins for the motion and 2 mins against the motion.' }
    ],
    timeline: [
      { time: '09:30 AM (Day 1)', title: 'Roll Call & Motion Reveal Round 1' },
      { time: '02:00 PM (Day 1)', title: 'Preliminary Rounds 2 & 3' },
      { time: '10:00 AM (Day 2)', title: 'Quarter & Semi-Final Adjudications' },
      { time: '03:00 PM (Day 2)', title: 'Grand Finale Debate & Trophies' }
    ],
    prizes: [
      { rank: 'Best Delegation', amount: '₹12,000 Cash', perk: 'JECRC Trophy of Eloquence' },
      { rank: 'Best Adjudicator & Speaker', amount: '₹5,000 Cash', perk: 'Certificate of Distinction' }
    ],
    coordinators: [
      { name: 'Devanshi Kothari', role: 'Literary Head', phone: '+91 94600 11223', email: 'devanshi.lit@jecrc.ac.in' }
    ]
  }
];

const DEFAULT_STUDENT = {
  name: 'Aanya Verma',
  roll: '21JECRC042',
  branch: 'B.Tech CSE • 3rd Year',
  email: 'aanya.verma21@jecrc.ac.in',
  phone: '+91 98290 12345',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO9QkL6NdR77ClXQxLL_i4pdGdDRAvOtgyZJiDy0BXqUUdwh94sSeOttrMajvAVCILVyQzOCcvxnUOBwFnYiM2xtU0I6pMqvQVx4vC2acKhxUdcK4Fjl6M7N5g3vIdXbfQKQ4TN-MX-auJgpQVjCLkRxpgy8FNg1t33ivIRRYtPo2uqdSd9Z96sYRwzj8FhTf1hmFVqwV1TCApZONkes3_iV77z-mfHMhAOP2rMaVsFnvZ9Bh148A'
};

const DEFAULT_PASSES = [
  {
    passId: 'JECRC_PASS_21JECRC042_HACK4',
    eventId: 'hack-o-holics',
    eventTitle: 'Hack-O-Holics 4.0',
    venue: 'JECRC Innovation Lab & Central Auditorium',
    dateStr: 'OCT 24, 2026 • 10:00 AM IST',
    teamId: 'TECH-982 (Team Alpha)',
    seat: 'Desk B-14 • Tier A',
    mode: 'Team (4 Members)',
    gate: 'GATE #02',
    status: 'CONFIRMED',
    checkedIn: false,
    checkedInTime: null,
    registeredAt: '2026-10-01 09:20 AM'
  },
  {
    passId: 'JECRC_PASS_21JECRC042_REN26',
    eventId: 'renaissance-2026',
    eventTitle: 'Renaissance 2026',
    venue: 'Open Air Theatre & Sports Complex',
    dateStr: 'NOV 12, 2026 • 04:00 PM IST',
    teamId: 'PASS-V-1049',
    seat: 'VIP Enclosure Row C',
    mode: 'Solo Pass',
    gate: 'MAIN GATE #01',
    status: 'CONFIRMED',
    checkedIn: true,
    checkedInTime: '04:15 PM IST',
    registeredAt: '2026-09-28 11:45 AM'
  }
];

const DEFAULT_ATTENDEES = [
  { roll: '21JECRC042', name: 'Aanya Verma', eventId: 'hack-o-holics', team: 'Team Alpha', gate: 'Gate 2 West', status: 'Checked In', time: '09:42 AM' },
  { roll: '22JECRC118', name: 'Rohan Sharma', eventId: 'hack-o-holics', team: 'ByteCrafters', gate: 'Gate 2 West', status: 'Checked In', time: '09:14 AM' },
  { roll: '21JECRC089', name: 'Divyansh Khandelwal', eventId: 'hack-o-holics', team: 'CyberDynasty', gate: 'Gate 1 North', status: 'Checked In', time: '09:30 AM' },
  { roll: '23JECRC015', name: 'Sanya Gupta', eventId: 'hack-o-holics', team: 'QuantumSolvers', gate: 'Gate 2 West', status: 'Confirmed', time: 'Pending' },
  { roll: '22JECRC204', name: 'Manish Choudhary', eventId: 'hack-o-holics', team: 'KernelPanic', gate: 'Gate 1 North', status: 'Confirmed', time: 'Pending' },
  { roll: '21JECRC042', name: 'Aanya Verma', eventId: 'renaissance-2026', team: 'Individual', gate: 'Main Gate 1', status: 'Checked In', time: '04:15 PM' }
];

const DEFAULT_PAST_EVENTS = [
  {
    id: 'hack-a-verse-2025',
    title: 'Hack-A-Verse 2025 (AI Edition)',
    date: 'March 15, 2025',
    organizer: 'Coding Club JECRC',
    certId: 'JECRC-CERT-2025-8831',
    rank: '2nd Runner Up - Track AI'
  },
  {
    id: 'cloud-summit-2025',
    title: 'National Cloud & DevOps Summit',
    date: 'January 20, 2025',
    organizer: 'GDSC JECRC Foundation',
    certId: 'JECRC-CERT-2025-4412',
    rank: 'Certified Participant'
  }
];

// App State Management
class AppState {
  constructor() {
    this.loadState();
  }

  loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        this.events = parsed.events || DEFAULT_EVENTS;
        this.student = parsed.student || DEFAULT_STUDENT;
        this.passes = parsed.passes || DEFAULT_PASSES;
        this.attendees = parsed.attendees || DEFAULT_ATTENDEES;
        this.pastEvents = parsed.pastEvents || DEFAULT_PAST_EVENTS;
        this.savedEvents = parsed.savedEvents || ['roborumble-2026', 'wordsmith-debate'];
        return;
      } catch (e) {
        console.error('Failed to parse localStorage data', e);
      }
    }
    this.events = DEFAULT_EVENTS;
    this.student = DEFAULT_STUDENT;
    this.passes = DEFAULT_PASSES;
    this.attendees = DEFAULT_ATTENDEES;
    this.pastEvents = DEFAULT_PAST_EVENTS;
    this.savedEvents = ['roborumble-2026', 'wordsmith-debate'];
    this.saveState();
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      events: this.events,
      student: this.student,
      passes: this.passes,
      attendees: this.attendees,
      pastEvents: this.pastEvents,
      savedEvents: this.savedEvents
    }));
  }

  registerForEvent(eventId, mode, teamName, teammates) {
    const ev = this.events.find(e => e.id === eventId);
    if (!ev) return null;

    const passId = `JECRC_PASS_${this.student.roll}_${eventId.toUpperCase().replace(/[^A-Z0-9]/g, '')}`;
    
    // Check if already registered
    const existing = this.passes.find(p => p.eventId === eventId);
    if (existing) {
      return { status: 'already_registered', pass: existing };
    }

    const newPass = {
      passId: passId,
      eventId: ev.id,
      eventTitle: ev.title,
      venue: ev.venue,
      dateStr: ev.fullDate,
      teamId: mode === 'team' ? (teamName || 'Team JECRC') : 'Individual',
      seat: mode === 'team' ? `Desk ${String.fromCharCode(65 + Math.floor(Math.random()*6))}-${Math.floor(Math.random()*40)+1}` : `Seat #${Math.floor(Math.random()*300)+1}`,
      mode: mode === 'team' ? `Team (${teammates.length + 1} Members)` : 'Solo Pass',
      gate: 'GATE #02',
      status: 'CONFIRMED',
      checkedIn: false,
      checkedInTime: null,
      registeredAt: new Date().toLocaleString()
    };

    this.passes.unshift(newPass);
    ev.registeredCount = Math.min(ev.capacity, ev.registeredCount + 1);

    // Also add to attendees
    this.attendees.unshift({
      roll: this.student.roll,
      name: this.student.name,
      eventId: ev.id,
      team: newPass.teamId,
      gate: 'Gate 2 West',
      status: 'Confirmed',
      time: 'Pending'
    });

    this.saveState();
    return { status: 'success', pass: newPass };
  }

  cancelPass(passId) {
    const pass = this.passes.find(p => p.passId === passId);
    if (!pass) return false;
    
    const ev = this.events.find(e => e.id === pass.eventId);
    if (ev) {
      ev.registeredCount = Math.max(0, ev.registeredCount - 1);
    }

    this.passes = this.passes.filter(p => p.passId !== passId);
    this.attendees = this.attendees.filter(a => !(a.roll === this.student.roll && a.eventId === pass.eventId));
    this.saveState();
    return true;
  }

  toggleBookmark(eventId) {
    if (this.savedEvents.includes(eventId)) {
      this.savedEvents = this.savedEvents.filter(id => id !== eventId);
    } else {
      this.savedEvents.push(eventId);
    }
    this.saveState();
    return this.savedEvents.includes(eventId);
  }

  createEvent(newEventData) {
    const id = newEventData.title.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Math.floor(Math.random()*1000);
    const event = {
      id: id,
      title: newEventData.title,
      club: newEventData.club,
      category: newEventData.category,
      eligibility: newEventData.eligibility || 'All Access',
      dateBadge: newEventData.dateBadge || { month: 'DEC', day: '15', year: '2026' },
      fullDate: newEventData.fullDate,
      venue: newEventData.venue,
      entryFee: newEventData.entryFee || 'Free',
      capacity: parseInt(newEventData.capacity) || 100,
      registeredCount: 0,
      tag: newEventData.category,
      badge: 'New Event',
      urgent: false,
      bannerUrl: newEventData.bannerUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      description: newEventData.description,
      tracks: [
        { name: 'Core Competition', desc: 'Main student challenges and hack sprints.' }
      ],
      timeline: [
        { time: '10:00 AM', title: 'Inauguration & Briefing' },
        { time: '04:00 PM', title: 'Grand Finale & Trophies' }
      ],
      prizes: [
        { rank: 'Winner', amount: '₹10,000 Cash', perk: 'Official Trophy & Certificate' }
      ],
      coordinators: [
        { name: this.student.name, role: 'Lead Organizer', phone: '+91 98290 12345', email: this.student.email }
      ]
    };

    this.events.unshift(event);
    this.saveState();
    return event;
  }

  verifyCheckIn(rollOrPassId, eventId = 'hack-o-holics') {
    const cleanQuery = rollOrPassId.trim().toUpperCase();
    
    // Search attendee
    const attendee = this.attendees.find(a => 
      a.roll.toUpperCase() === cleanQuery || cleanQuery.includes(a.roll.toUpperCase())
    );

    if (!attendee) {
      return { status: 'invalid', message: 'No registered attendee record matching this Roll Number or Pass ID.' };
    }

    if (attendee.status === 'Checked In') {
      return { 
        status: 'duplicate', 
        name: attendee.name, 
        roll: attendee.roll, 
        team: attendee.team,
        time: attendee.time,
        gate: attendee.gate,
        message: `Already checked in at ${attendee.time} via ${attendee.gate}` 
      };
    }

    // Mark as checked in
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    attendee.status = 'Checked In';
    attendee.time = nowTime;

    // If this matches our student pass, mark that pass too
    const studentPass = this.passes.find(p => p.eventId === eventId);
    if (studentPass && (cleanQuery.includes(this.student.roll) || cleanQuery.includes(studentPass.passId))) {
      studentPass.checkedIn = true;
      studentPass.checkedInTime = nowTime;
    }

    this.saveState();

    return {
      status: 'success',
      name: attendee.name,
      roll: attendee.roll,
      team: attendee.team,
      gate: attendee.gate,
      time: nowTime,
      message: 'Access Granted! Entrance Verified.'
    };
  }
}

// Audio Sound FX Synthesizer (Zero-dependency Web Audio API)
const AudioFX = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playSuccess() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  },
  playError() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.setValueAtTime(164.81, now + 0.12); // E3
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }
};

// Canvas Confetti Generator
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#FE6B00', '#F59E0B', '#0F172A', '#10B981', '#3B82F6', '#EC4899'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() * 200 - 100),
      y: canvas.height / 2 + (Math.random() * 100 - 50),
      r: Math.random() * 6 + 3,
      dx: (Math.random() - 0.5) * 12,
      dy: (Math.random() - 1.2) * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05,
      tiltAngle: 0,
      alpha: 1
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remaining = 0;

    particles.forEach(p => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.tiltAngle) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle) * 2 + p.dx * 0.8;
      p.dx *= 0.98;
      p.dy += 0.35; // gravity
      p.alpha -= 0.007;

      if (p.alpha > 0) {
        remaining++;
        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();
      }
    });

    if (remaining > 0) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
      cancelAnimationFrame(animationFrame);
    }
  }

  render();
}

// Toast Notifications Helper
function showToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-red-600' : 'bg-primary-container');
  const icon = type === 'success' ? 'check_circle' : (type === 'error' ? 'error' : 'info');

  toast.className = `toast ${bg} text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium z-50 max-w-sm`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] shrink-0">${icon}</span>
    <div class="flex flex-col">
      <span class="font-bold text-xs uppercase tracking-wider opacity-90">${title}</span>
      <span class="text-xs opacity-95">${message}</span>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Instantiate App
window.state = new AppState();

// Core Navigation Router
window.currentView = 'home';
window.selectedEventId = 'hack-o-holics';

function navigateTo(viewName, eventId = null) {
  window.currentView = viewName;
  if (eventId) {
    window.selectedEventId = eventId;
  }

  // Update URL hash without reload
  window.location.hash = eventId ? `${viewName}/${eventId}` : viewName;

  // Toggle View Panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`view-${viewName}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  // Update Top Desktop Navigation Links
  document.querySelectorAll('.nav-link-top').forEach(link => {
    const target = link.getAttribute('data-target');
    if (target === viewName) {
      link.classList.add('text-secondary-container', 'font-bold', 'border-b-2', 'border-secondary-container');
      link.classList.remove('text-surface-variant');
    } else {
      link.classList.remove('text-secondary-container', 'font-bold', 'border-b-2', 'border-secondary-container');
      link.classList.add('text-surface-variant');
    }
  });

  // Update Bottom Mobile Navigation Bar
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const target = item.getAttribute('data-path');
    if (target === viewName) {
      item.classList.add('text-secondary-container', 'font-semibold');
      item.classList.remove('text-on-primary-container');
    } else {
      item.classList.remove('text-secondary-container', 'font-semibold');
      item.classList.add('text-on-primary-container');
    }
  });

  // View specific rendering
  if (viewName === 'home') {
    renderHomeEvents();
  } else if (viewName === 'event-details') {
    renderEventDetails(window.selectedEventId);
  } else if (viewName === 'my-passes') {
    renderStudentDashboard();
  } else if (viewName === 'admin-gate') {
    renderAdminPortal();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Discovery Home Screen Events Grid
function renderHomeEvents() {
  const container = document.getElementById('events-grid');
  if (!container) return;

  const searchInput = document.getElementById('campusEventSearch');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const activeCategory = window.activeCategory || 'All';
  const activeEligibility = window.activeEligibility || 'All Access';

  let filtered = window.state.events.filter(ev => {
    const matchesQuery = !query || 
      ev.title.toLowerCase().includes(query) || 
      ev.club.toLowerCase().includes(query) || 
      ev.category.toLowerCase().includes(query) ||
      ev.venue.toLowerCase().includes(query);

    const matchesCategory = activeCategory === 'All' || ev.category.includes(activeCategory.replace(/[^a-zA-Z]/g, '')) || activeCategory.includes(ev.category);
    const matchesEligibility = activeEligibility === 'All Access' || ev.eligibility === activeEligibility;

    return matchesQuery && matchesCategory && matchesEligibility;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
        <span class="material-symbols-outlined text-[48px] text-outline mb-2">event_busy</span>
        <h3 class="font-title-md font-bold text-on-surface">No Campus Events Found</h3>
        <p class="font-body-md text-on-surface-variant max-w-sm mt-1">Try resetting your category or search keywords to explore other campus fests and workshops.</p>
        <button class="mt-4 px-4 py-2 bg-secondary-container text-on-secondary font-label-md rounded-lg font-bold" onclick="resetFilters()">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ev => {
    const isSaved = window.state.savedEvents.includes(ev.id);
    const isRegistered = window.state.passes.some(p => p.eventId === ev.id);
    const percentFilled = Math.min(100, Math.round((ev.registeredCount / ev.capacity) * 100));

    return `
      <article class="bg-surface-container-lowest rounded-2xl p-space-md shadow-md flex flex-col justify-between gap-space-sm relative overflow-hidden transition-all hover:shadow-lg border border-slate-100">
        ${ev.urgent ? `
          <div class="absolute top-0 right-0 bg-secondary-container text-on-secondary font-label-sm text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <span class="material-symbols-outlined text-[13px]">bolt</span> ${ev.badge}
          </div>
        ` : ''}

        <div class="flex items-start gap-space-sm">
          <!-- Date Badge -->
          <div class="flex flex-col items-center justify-center bg-primary-container text-on-primary rounded-xl px-3 py-2 shrink-0 min-w-[56px] shadow-sm">
            <span class="font-label-sm text-[10px] text-surface-variant font-bold tracking-wider uppercase">${ev.dateBadge.month}</span>
            <span class="font-headline-sm text-headline-sm font-extrabold text-secondary-container leading-none my-0.5">${ev.dateBadge.day}</span>
            <span class="font-label-sm text-[10px] text-surface-variant">${ev.dateBadge.year}</span>
          </div>

          <div class="flex flex-col min-w-0 pr-8">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-label-sm text-[11px] text-secondary font-semibold truncate flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">groups</span>
                ${ev.club}
              </span>
              <span class="px-2 py-0.2 rounded-full bg-surface-container-low text-[10px] font-label-sm text-on-surface-variant font-medium">
                ${ev.category}
              </span>
            </div>
            <h3 class="font-title-md text-title-md text-on-surface font-bold leading-snug mt-0.5 hover:text-secondary cursor-pointer transition-colors" onclick="navigateTo('event-details', '${ev.id}')">
              ${ev.title}
            </h3>
            <div class="flex items-center gap-1 text-on-surface-variant font-body-md text-[13px] mt-0.5">
              <span class="material-symbols-outlined text-[15px] text-outline">location_on</span>
              <span class="truncate">${ev.venue}</span>
            </div>
          </div>
        </div>

        <!-- Capacity Micro-Meter -->
        <div class="flex flex-col gap-1 mt-1 bg-surface-container-low p-2 rounded-xl">
          <div class="flex justify-between items-center font-label-sm text-label-sm">
            <span class="text-on-surface-variant flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px] text-secondary">group</span> Seats Remaining
            </span>
            <span class="font-bold ${percentFilled > 80 ? 'text-error' : 'text-secondary'}">
              ${ev.registeredCount} / ${ev.capacity} (${percentFilled}%)
            </span>
          </div>
          <div class="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
            <div class="bg-secondary-container h-full rounded-full transition-all duration-500" style="width: ${percentFilled}%;"></div>
          </div>
        </div>

        <!-- Card Action Footer -->
        <div class="flex items-center justify-between pt-1 gap-2 border-t border-slate-100">
          <div class="flex items-center gap-2">
            <button class="p-1.5 rounded-lg text-outline hover:text-secondary hover:bg-surface-container transition-colors" title="${isSaved ? 'Remove bookmark' : 'Bookmark event'}" onclick="toggleEventBookmark('${ev.id}')">
              <span class="material-symbols-outlined text-[20px] ${isSaved ? 'text-secondary font-fill' : ''}">
                ${isSaved ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
            <span class="font-label-sm text-[12px] font-semibold text-on-surface-variant">
              ${ev.entryFee}
            </span>
          </div>

          <div class="flex items-center gap-2">
            ${isRegistered ? `
              <button class="bg-emerald-600 text-white font-label-sm text-label-sm px-3.5 py-1.5 rounded-lg font-bold shadow-sm hover:bg-emerald-700 transition-all flex items-center gap-1" onclick="navigateTo('my-passes')">
                <span class="material-symbols-outlined text-[16px]">verified</span>
                View Pass
              </button>
            ` : `
              <button class="bg-secondary-container text-on-secondary font-label-sm text-label-sm px-3.5 py-1.5 rounded-lg font-bold shadow-sm hover:bg-secondary active:scale-95 transition-all flex items-center gap-1" onclick="navigateTo('event-details', '${ev.id}')">
                Register Now
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            `}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetFilters() {
  const searchInput = document.getElementById('campusEventSearch');
  if (searchInput) searchInput.value = '';
  window.activeCategory = 'All';
  window.activeEligibility = 'All Access';

  document.querySelectorAll('.category-pill').forEach((pill, idx) => {
    if (idx === 0) {
      pill.classList.add('bg-secondary-container', 'text-on-secondary');
      pill.classList.remove('bg-surface-container-lowest', 'text-on-surface');
    } else {
      pill.classList.remove('bg-secondary-container', 'text-on-secondary');
      pill.classList.add('bg-surface-container-lowest', 'text-on-surface');
    }
  });

  document.querySelectorAll('.filter-eligibility-btn').forEach((btn, idx) => {
    if (idx === 0) {
      btn.classList.add('bg-inverse-surface', 'text-on-primary');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
    } else {
      btn.classList.remove('bg-inverse-surface', 'text-on-primary');
      btn.classList.add('bg-surface-container-low', 'text-on-surface-variant');
    }
  });

  renderHomeEvents();
}

function toggleEventBookmark(eventId) {
  const isBookmarked = window.state.toggleBookmark(eventId);
  showToast(
    isBookmarked ? 'Bookmarked' : 'Removed',
    isBookmarked ? 'Event added to your Saved Watchlist' : 'Event removed from watchlist',
    'info'
  );
  renderHomeEvents();
  if (window.currentView === 'my-passes') renderStudentDashboard();
}

// Render Event Details Screen
function renderEventDetails(eventId) {
  const ev = window.state.events.find(e => e.id === eventId) || window.state.events[0];
  if (!ev) return;

  window.selectedEventId = ev.id;
  const isRegistered = window.state.passes.some(p => p.eventId === ev.id);

  // Set Titles & Breadcrumb
  document.getElementById('detail-breadcrumb-title').textContent = ev.title;
  document.getElementById('detail-event-title').textContent = ev.title;
  document.getElementById('detail-club-name').textContent = `Organized by ${ev.club}`;
  document.getElementById('detail-hero-media').style.backgroundImage = `url('${ev.bannerUrl}')`;
  document.getElementById('detail-full-date').textContent = ev.fullDate;
  document.getElementById('detail-venue').textContent = ev.venue;
  document.getElementById('detail-fee').textContent = `Entry: ${ev.entryFee}`;

  // Description
  document.getElementById('detail-description').textContent = ev.description;

  // Tracks
  const tracksContainer = document.getElementById('detail-tracks-container');
  if (tracksContainer) {
    tracksContainer.innerHTML = ev.tracks.map(t => `
      <div class="p-3 rounded-xl bg-surface-container-low flex items-start gap-3">
        <div class="w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center shrink-0">
          <span class="material-symbols-outlined text-secondary-container">stars</span>
        </div>
        <div class="flex flex-col">
          <h3 class="font-title-md text-title-md text-on-surface font-semibold">${t.name}</h3>
          <p class="font-body-md text-[13px] text-on-surface-variant">${t.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Timeline
  const timelineContainer = document.getElementById('detail-timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = ev.timeline.map((step, idx) => `
      <div class="flex items-start gap-3 relative pb-4">
        ${idx < ev.timeline.length - 1 ? '<div class="absolute left-4 top-8 bottom-0 w-0.5 bg-surface-container-highest"></div>' : ''}
        <div class="w-8 h-8 rounded-full bg-secondary-container text-on-secondary flex items-center justify-center font-bold text-xs shrink-0 z-10">
          ${idx + 1}
        </div>
        <div class="flex flex-col">
          <span class="font-label-sm text-secondary font-bold text-xs">${step.time}</span>
          <span class="font-title-md text-on-surface font-semibold text-sm">${step.title}</span>
        </div>
      </div>
    `).join('');
  }

  // Prizes
  const prizesContainer = document.getElementById('detail-prizes-container');
  if (prizesContainer) {
    prizesContainer.innerHTML = ev.prizes.map((p, idx) => `
      <div class="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between gap-3 border border-slate-200">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full ${idx === 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-700'} flex items-center justify-center font-bold shrink-0">
            <span class="material-symbols-outlined text-[20px]">${idx === 0 ? 'emoji_events' : 'military_tech'}</span>
          </div>
          <div class="flex flex-col">
            <h4 class="font-title-md font-bold text-on-surface text-sm">${p.rank}</h4>
            <p class="font-body-md text-xs text-on-surface-variant">${p.perk}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="font-headline-sm text-secondary font-bold text-base block">${p.amount}</span>
        </div>
      </div>
    `).join('');
  }

  // Coordinators
  const coordsContainer = document.getElementById('detail-coordinators-container');
  if (coordsContainer) {
    coordsContainer.innerHTML = ev.coordinators.map(c => `
      <div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between gap-2">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm">
            ${c.name.split(' ').map(n=>n[0]).join('')}
          </div>
          <div class="flex flex-col">
            <span class="font-title-md font-bold text-on-surface text-sm">${c.name}</span>
            <span class="font-label-sm text-xs text-on-surface-variant">${c.role}</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://wa.me/${c.phone.replace(/[^0-9]/g, '')}" target="_blank" class="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors" title="Chat on WhatsApp">
            <span class="material-symbols-outlined text-[18px]">chat</span>
          </a>
          <a href="tel:${c.phone}" class="p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant transition-colors" title="Call">
            <span class="material-symbols-outlined text-[18px]">call</span>
          </a>
        </div>
      </div>
    `).join('');
  }

  // Sticky Action Box
  const stickyState = document.getElementById('detail-sticky-action');
  if (stickyState) {
    if (isRegistered) {
      stickyState.innerHTML = `
        <div class="flex flex-col">
          <span class="font-label-sm text-xs text-emerald-600 font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">verified</span> You are registered
          </span>
          <span class="font-title-md text-sm text-on-surface font-bold">Pass Active in Dashboard</span>
        </div>
        <button class="h-10 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-sm font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all" onclick="navigateTo('my-passes')">
          <span class="material-symbols-outlined text-[18px]">confirmation_number</span>
          View Entry Pass
        </button>
      `;
    } else {
      const left = ev.capacity - ev.registeredCount;
      stickyState.innerHTML = `
        <div class="flex flex-col">
          <span class="font-label-sm text-xs text-secondary font-bold flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            ${left > 0 ? `${left} spots remaining` : 'Waitlist Active'}
          </span>
          <span class="font-title-md text-sm text-on-surface font-bold">${ev.entryFee}</span>
        </div>
        <button class="h-10 px-5 rounded-xl bg-secondary-container hover:bg-secondary text-on-secondary font-label-md text-sm font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all" onclick="scrollToRegister()">
          <span class="material-symbols-outlined text-[18px]">bolt</span>
          Register Now
        </button>
      `;
    }
  }

  // Pre-fill Student Registration Form
  document.getElementById('reg-student-name').value = window.state.student.name;
  document.getElementById('reg-student-roll').value = window.state.student.roll;
  document.getElementById('reg-student-email').value = window.state.student.email;
  document.getElementById('reg-student-branch').value = window.state.student.branch;
}

// Student Dashboard Renderer
function renderStudentDashboard() {
  // Update Profile details
  document.getElementById('dash-profile-name').textContent = window.state.student.name;
  document.getElementById('dash-profile-roll').textContent = window.state.student.roll;
  document.getElementById('dash-profile-branch').textContent = window.state.student.branch;
  document.getElementById('dash-registered-count').textContent = window.state.passes.length;
  document.getElementById('dash-attended-count').textContent = window.state.pastEvents.length;
  document.getElementById('dash-certs-count').textContent = window.state.pastEvents.length;

  // Render Passes Tab
  const passesContainer = document.getElementById('dash-passes-container');
  if (passesContainer) {
    if (window.state.passes.length === 0) {
      passesContainer.innerHTML = `
        <div class="py-12 text-center flex flex-col items-center justify-center p-6 bg-surface-container-lowest rounded-2xl shadow-sm">
          <span class="material-symbols-outlined text-[48px] text-outline mb-2">confirmation_number</span>
          <h3 class="font-title-md font-bold text-on-surface">No Active Passes</h3>
          <p class="font-body-md text-on-surface-variant max-w-sm mt-1">You haven't registered for any upcoming fests or hackathons yet.</p>
          <button class="mt-4 px-4 py-2 bg-secondary-container text-on-secondary font-label-md rounded-lg font-bold" onclick="navigateTo('home')">
            Explore Events Feed
          </button>
        </div>
      `;
    } else {
      passesContainer.innerHTML = window.state.passes.map(p => `
        <article class="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden relative border border-slate-200">
          <!-- Top Accent Header -->
          <div class="bg-primary-container p-space-md text-on-primary relative">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-secondary-container"></div>
            <div class="flex items-center justify-between pb-space-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary font-label-sm text-[10px] uppercase font-bold tracking-wider">
                Official Entry Pass
              </span>
              <span class="font-code-sm text-code-sm text-primary-fixed tracking-widest">${p.gate}</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">${p.eventTitle}</h3>
            <p class="font-label-sm text-label-sm text-on-primary-container flex items-center gap-1 mt-0.5">
              <span class="material-symbols-outlined text-[16px] text-secondary-container">domain</span>
              ${p.venue}
            </p>
          </div>

          <!-- Main Voucher Meta Grid -->
          <div class="p-space-md grid grid-cols-2 gap-y-space-sm gap-x-space-md text-xs sm:text-sm">
            <div>
              <span class="font-label-sm text-outline block text-[11px]">DATE & TIME</span>
              <span class="font-title-md text-on-surface font-semibold block">${p.dateStr}</span>
            </div>
            <div>
              <span class="font-label-sm text-outline block text-[11px]">ALLOCATION</span>
              <span class="font-title-md text-secondary font-semibold block">${p.teamId}</span>
              <span class="font-body-md text-on-surface-variant block text-xs">${p.seat}</span>
            </div>
            <div>
              <span class="font-label-sm text-outline block text-[11px]">STUDENT ATTENDEE</span>
              <span class="font-body-md text-on-surface font-semibold block">${window.state.student.name}</span>
              <span class="font-mono text-outline block text-xs">${window.state.student.roll}</span>
            </div>
            <div>
              <span class="font-label-sm text-outline block text-[11px]">GATE STATUS</span>
              <span class="inline-flex items-center gap-1 font-label-sm ${p.checkedIn ? 'text-emerald-600' : 'text-secondary'} font-bold">
                <span class="w-2 h-2 rounded-full ${p.checkedIn ? 'bg-emerald-600' : 'bg-secondary animate-pulse'}"></span>
                ${p.checkedIn ? 'CHECKED IN' : 'CONFIRMED'}
              </span>
              <span class="font-code-sm text-outline block text-xs">${p.checkedIn ? p.checkedInTime : 'NOT SCANNED'}</span>
            </div>
          </div>

          <!-- Boarding Pass Perforation Divider -->
          <div class="ticket-perforation my-1 flex items-center">
            <div class="ticket-notch-left"></div>
            <div class="w-full mx-5 border-t-2 border-dashed border-slate-300"></div>
            <div class="ticket-notch-right"></div>
          </div>

          <!-- Detachable QR Stub Area -->
          <div class="p-space-md bg-surface-container-low flex flex-col items-center text-center gap-space-sm">
            <div class="bg-surface-container-lowest p-3 rounded-xl shadow-sm flex flex-col items-center border border-slate-200">
              <!-- High-Contrast Vector QR Display -->
              <svg class="w-36 h-36" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
                <rect fill="#FFFFFF" height="160" width="160"></rect>
                <rect fill="#0B1C30" height="40" rx="4" width="40" x="16" y="16"></rect>
                <rect fill="#FFFFFF" height="28" width="28" x="22" y="22"></rect>
                <rect fill="#FE6B00" height="16" width="16" x="28" y="28"></rect>
                <rect fill="#0B1C30" height="40" rx="4" width="40" x="104" y="16"></rect>
                <rect fill="#FFFFFF" height="28" width="28" x="110" y="22"></rect>
                <rect fill="#0B1C30" height="16" width="16" x="116" y="28"></rect>
                <rect fill="#0B1C30" height="40" rx="4" width="40" x="16" y="104"></rect>
                <rect fill="#FFFFFF" height="28" width="28" x="22" y="110"></rect>
                <rect fill="#FE6B00" height="16" width="16" x="28" y="116"></rect>
                <!-- Central Matrix hash representation -->
                <rect fill="#0B1C30" height="10" width="10" x="65" y="20"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="80" y="35"></rect>
                <rect fill="#FE6B00" height="10" width="10" x="65" y="50"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="20" y="70"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="50" y="75"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="80" y="80"></rect>
                <rect fill="#FE6B00" height="10" width="10" x="115" y="75"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="135" y="90"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="70" y="105"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="90" y="120"></rect>
                <rect fill="#0B1C30" height="10" width="10" x="120" y="130"></rect>
                <rect fill="#FE6B00" height="10" width="10" x="65" y="135"></rect>
              </svg>
              <span class="font-code-sm font-mono text-[11px] text-on-surface font-bold tracking-wider mt-2">
                ${p.passId}
              </span>
            </div>

            <!-- Pass Action Buttons Bar -->
            <div class="flex items-center justify-center gap-2 flex-wrap w-full pt-2">
              <button class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-colors" onclick="openCalendarLink('${p.eventTitle}', '${p.venue}')">
                <span class="material-symbols-outlined text-[16px] text-secondary">calendar_add_on</span>
                Add to Calendar
              </button>
              <button class="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-xs font-semibold flex items-center gap-1 transition-colors" onclick="downloadPassMock('${p.passId}')">
                <span class="material-symbols-outlined text-[16px] text-secondary">download</span>
                Download Pass
              </button>
              <button class="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 font-label-sm text-xs font-semibold flex items-center gap-1 transition-colors" onclick="confirmCancelPass('${p.passId}')">
                <span class="material-symbols-outlined text-[16px]">cancel</span>
                Cancel
              </button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  // Render Past & E-Certificates
  const certsContainer = document.getElementById('dash-certs-container');
  if (certsContainer) {
    certsContainer.innerHTML = window.state.pastEvents.map(evt => `
      <div class="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-3 border border-slate-200">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
            <span class="material-symbols-outlined text-[24px]">workspace_premium</span>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <h4 class="font-title-md font-bold text-on-surface text-sm">${evt.title}</h4>
              <span class="px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 font-label-sm text-[10px] font-bold">Attended</span>
            </div>
            <span class="font-body-md text-xs text-on-surface-variant">${evt.date} • ${evt.organizer}</span>
            <span class="font-mono text-outline text-[11px] mt-0.5">${evt.certId}</span>
          </div>
        </div>
        <button class="px-3 py-1.5 rounded-lg bg-secondary-container hover:bg-secondary text-on-secondary font-label-sm text-xs font-bold flex items-center gap-1 shrink-0 shadow-sm" onclick="openCertificateModal('${evt.id}')">
          <span class="material-symbols-outlined text-[16px]">download</span>
          Certificate
        </button>
      </div>
    `).join('');
  }

  // Render Saved Events
  const savedContainer = document.getElementById('dash-saved-container');
  if (savedContainer) {
    const saved = window.state.events.filter(e => window.state.savedEvents.includes(e.id));
    if (saved.length === 0) {
      savedContainer.innerHTML = `
        <div class="py-8 text-center text-on-surface-variant">No saved events. Bookmark events from Home screen to see them here.</div>
      `;
    } else {
      savedContainer.innerHTML = saved.map(e => `
        <div class="p-3 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between gap-3 border border-slate-200">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs shrink-0">
              ${e.dateBadge.month} ${e.dateBadge.day}
            </div>
            <div class="flex flex-col min-w-0">
              <span class="font-title-md font-bold text-on-surface text-sm truncate">${e.title}</span>
              <span class="font-body-md text-xs text-on-surface-variant truncate">${e.venue}</span>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button class="px-3 py-1.5 rounded-lg bg-secondary-container text-on-secondary font-label-sm text-xs font-bold" onclick="navigateTo('event-details', '${e.id}')">
              Register
            </button>
            <button class="p-1.5 text-outline hover:text-red-500" onclick="toggleEventBookmark('${e.id}')">
              <span class="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
      `).join('');
    }
  }
}

// Student Tab Switcher
function switchStudentTab(tabId) {
  ['passes', 'certs', 'saved'].forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`tab-content-${t}`);
    if (t === tabId) {
      btn?.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btn?.classList.remove('text-on-surface-variant');
      content?.classList.remove('hidden');
    } else {
      btn?.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
      btn?.classList.add('text-on-surface-variant');
      content?.classList.add('hidden');
    }
  });
}

function openCalendarLink(title, venue) {
  const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title + ' @ JECRC')}&details=${encodeURIComponent('Registered via JECRC Events Portal. Official Entry Pass Required.')}&location=${encodeURIComponent(venue + ', JECRC University, Jaipur')}`;
  window.open(gCalUrl, '_blank');
}

function downloadPassMock(passId) {
  showToast('Pass Downloaded', `Digital pass ${passId} ready for offline use.`, 'success');
  window.print();
}

function confirmCancelPass(passId) {
  if (confirm('Are you sure you want to cancel this registration? Your seat quota will be released back to other students.')) {
    window.state.cancelPass(passId);
    showToast('Registration Cancelled', 'Your entry pass has been revoked.', 'info');
    renderStudentDashboard();
  }
}

// Certificate Preview Modal
function openCertificateModal(pastEventId) {
  const evt = window.state.pastEvents.find(p => p.id === pastEventId) || window.state.pastEvents[0];
  const modal = document.getElementById('certificate-modal');
  if (!modal) return;

  document.getElementById('cert-student-name').textContent = window.state.student.name;
  document.getElementById('cert-event-title').textContent = evt.title;
  document.getElementById('cert-date').textContent = evt.date;
  document.getElementById('cert-id').textContent = evt.certId;
  document.getElementById('cert-rank').textContent = evt.rank;

  modal.classList.remove('hidden');
}

function closeCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) modal.classList.add('hidden');
}

// Admin Gate Scanner & Console
let activeCameraStream = null;

function renderAdminPortal() {
  // Update Real-Time Metrics
  const totalRegs = window.state.attendees.length;
  const checkedInCount = window.state.attendees.filter(a => a.status === 'Checked In').length;
  const capacityPct = Math.round((checkedInCount / Math.max(1, totalRegs)) * 100);

  document.getElementById('metric-total-reg').textContent = totalRegs;
  document.getElementById('metric-live-checkin').textContent = `${checkedInCount} / ${totalRegs}`;
  document.getElementById('metric-capacity-pct').textContent = `${capacityPct}%`;
  document.getElementById('metric-capacity-bar').style.width = `${capacityPct}%`;
  document.getElementById('metric-queue-count').textContent = Math.max(0, totalRegs - checkedInCount);

  // Render Live Stream Feed
  const streamContainer = document.getElementById('live-stream-container');
  if (streamContainer) {
    streamContainer.innerHTML = window.state.attendees.slice(0, 6).map(att => {
      const isChecked = att.status === 'Checked In';
      const initials = att.name.split(' ').map(n=>n[0]).join('').substring(0,2);
      return `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-colors">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-full ${isChecked ? 'bg-emerald-100 text-emerald-700' : 'bg-surface-container-high text-on-surface'} flex items-center justify-center font-title-md text-[13px] font-bold shrink-0">
              ${initials}
            </div>
            <div class="flex flex-col min-w-0">
              <span class="font-label-md text-label-md font-bold text-on-surface truncate">${att.name}</span>
              <span class="font-code-sm text-[11px] text-on-surface-variant font-mono">${att.roll} • ${att.team}</span>
            </div>
          </div>
          <div class="flex flex-col items-end shrink-0 ml-2">
            <span class="inline-flex items-center px-2 py-0.5 rounded-full ${isChecked ? 'bg-emerald-50 text-emerald-700' : 'bg-surface-container text-on-surface'} font-label-sm text-[10px] font-semibold">
              ${isChecked ? att.time : 'Pending'}
            </span>
            <span class="${isChecked ? 'text-emerald-600' : 'text-secondary'} font-label-sm text-[10px] font-bold mt-0.5">
              ${att.status}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Full Attendee Roster Table
  renderAttendeeTable();
}

function renderAttendeeTable() {
  const tbody = document.getElementById('admin-attendee-tbody');
  if (!tbody) return;

  const searchInput = document.getElementById('admin-attendee-search');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const filtered = window.state.attendees.filter(a => 
    !query || 
    a.name.toLowerCase().includes(query) || 
    a.roll.toLowerCase().includes(query) ||
    a.team.toLowerCase().includes(query)
  );

  tbody.innerHTML = filtered.map(a => `
    <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td class="px-4 py-3 font-semibold text-on-surface">${a.name}</td>
      <td class="px-4 py-3 font-mono text-xs text-on-surface-variant">${a.roll}</td>
      <td class="px-4 py-3 text-xs text-on-surface-variant">${a.team}</td>
      <td class="px-4 py-3 text-xs text-outline">${a.gate}</td>
      <td class="px-4 py-3">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${a.status === 'Checked In' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
          ${a.status}
        </span>
      </td>
      <td class="px-4 py-3 text-xs font-mono">${a.time}</td>
    </tr>
  `).join('');
}

// Camera Scanner Viewfinder Controls
async function toggleWebcamFeed() {
  const videoEl = document.getElementById('camera-feed-video');
  const placeholder = document.getElementById('camera-feed-placeholder');
  const camBtn = document.getElementById('toggle-camera-btn');

  if (activeCameraStream) {
    activeCameraStream.getTracks().forEach(track => track.stop());
    activeCameraStream = null;
    if (videoEl) videoEl.classList.add('hidden');
    if (placeholder) placeholder.classList.remove('hidden');
    if (camBtn) camBtn.classList.remove('text-secondary-container');
    showToast('Camera Stopped', 'Switched back to animated HUD simulation.', 'info');
    return;
  }

  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      activeCameraStream = stream;
      if (videoEl) {
        videoEl.srcObject = stream;
        videoEl.classList.remove('hidden');
      }
      if (placeholder) placeholder.classList.add('hidden');
      if (camBtn) camBtn.classList.add('text-secondary-container');
      showToast('Live Camera Active', 'Pointing viewfinder at attendee pass.', 'success');
    } else {
      showToast('Camera Unavailable', 'Using simulated HUD scanner feed.', 'info');
    }
  } catch (err) {
    showToast('Permission Notice', 'Camera access was not granted. Using simulation feed.', 'info');
  }
}

function toggleTorch() {
  const icon = document.getElementById('torch-icon');
  if (!icon) return;
  const isFlash = icon.textContent === 'flash_on';
  icon.textContent = isFlash ? 'flash_off' : 'flash_on';
  showToast(isFlash ? 'Torch Enabled' : 'Torch Disabled', '', 'info');
}

// Status Demonstration Triggers
function setScanStatus(statusType) {
  const successEl = document.getElementById('status-success');
  const duplicateEl = document.getElementById('status-duplicate');
  const invalidEl = document.getElementById('status-invalid');

  successEl?.classList.add('hidden');
  duplicateEl?.classList.add('hidden');
  invalidEl?.classList.add('hidden');

  if (statusType === 'success') {
    successEl?.classList.remove('hidden');
    AudioFX.playSuccess();
    triggerConfetti();
  } else if (statusType === 'duplicate') {
    duplicateEl?.classList.remove('hidden');
    AudioFX.playError();
  } else if (statusType === 'invalid') {
    invalidEl?.classList.remove('hidden');
    AudioFX.playError();
  }
}

function handleManualVerify() {
  const input = document.getElementById('manual-roll-input');
  if (!input || !input.value.trim()) {
    showToast('Input Required', 'Please enter a Student Roll Number or Pass ID.', 'error');
    return;
  }

  const query = input.value.trim();
  const res = window.state.verifyCheckIn(query);

  const successEl = document.getElementById('status-success');
  const duplicateEl = document.getElementById('status-duplicate');
  const invalidEl = document.getElementById('status-invalid');

  successEl?.classList.add('hidden');
  duplicateEl?.classList.add('hidden');
  invalidEl?.classList.add('hidden');

  if (res.status === 'success') {
    AudioFX.playSuccess();
    triggerConfetti();
    document.getElementById('granted-student-name').textContent = res.name;
    document.getElementById('granted-student-meta').textContent = `${res.roll} • ${res.team}`;
    document.getElementById('granted-time').textContent = res.time;
    successEl?.classList.remove('hidden');
    showToast('Access Granted', `${res.name} verified at Gate.`, 'success');
  } else if (res.status === 'duplicate') {
    AudioFX.playError();
    document.getElementById('dup-student-name').textContent = res.name;
    document.getElementById('dup-student-meta').textContent = `${res.roll} • ${res.gate}`;
    document.getElementById('dup-time').textContent = `Checked: ${res.time}`;
    duplicateEl?.classList.remove('hidden');
    showToast('Already Checked In', `${res.name} was already verified at ${res.time}`, 'error');
  } else {
    AudioFX.playError();
    invalidEl?.classList.remove('hidden');
    showToast('Invalid Pass', res.message, 'error');
  }

  input.value = '';
  renderAdminPortal();
}

// 1-Click Export CSV
function exportAttendeesCSV() {
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Roll Number,Student Name,Event,Team / Slot,Gate,Status,Checkin Time\n';

  window.state.attendees.forEach(a => {
    csvContent += `"${a.roll}","${a.name}","${a.eventId}","${a.team}","${a.gate}","${a.status}","${a.time}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `jecrc_gate_attendees_export_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast('Export Complete', 'Downloaded jecrc_gate_attendees_export.csv', 'success');
}

// Create New Event Wizard Modal
function openCreateEventModal() {
  const modal = document.getElementById('create-event-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeCreateEventModal() {
  const modal = document.getElementById('create-event-modal');
  if (modal) modal.classList.add('hidden');
}

function handleCreateEventSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('new-event-title').value.trim();
  const club = document.getElementById('new-event-club').value.trim();
  const category = document.getElementById('new-event-category').value;
  const venue = document.getElementById('new-event-venue').value.trim();
  const fullDate = document.getElementById('new-event-date').value.trim();
  const capacity = document.getElementById('new-event-capacity').value.trim();
  const fee = document.getElementById('new-event-fee').value.trim();
  const description = document.getElementById('new-event-desc').value.trim();

  if (!title || !club || !venue || !fullDate) {
    showToast('Validation Error', 'Please complete all required fields.', 'error');
    return;
  }

  const created = window.state.createEvent({
    title,
    club,
    category,
    venue,
    fullDate,
    capacity,
    entryFee: fee || 'Free',
    description: description || 'Campus technical & cultural event.'
  });

  closeCreateEventModal();
  showToast('Event Published!', `${title} is now live on discovery feed.`, 'success');
  navigateTo('home');
}

// Registration Form Logic
let currentRegMode = 'solo';
let currentTeammates = [];

function setRegistrationMode(mode) {
  currentRegMode = mode;
  const soloBtn = document.getElementById('mode-solo');
  const teamBtn = document.getElementById('mode-team');
  const teamFields = document.getElementById('team-fields');

  if (mode === 'solo') {
    soloBtn?.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    soloBtn?.classList.remove('text-on-surface-variant');
    teamBtn?.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    teamBtn?.classList.add('text-on-surface-variant');
    teamFields?.classList.add('hidden');
  } else {
    teamBtn?.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    teamBtn?.classList.remove('text-on-surface-variant');
    soloBtn?.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    soloBtn?.classList.add('text-on-surface-variant');
    teamFields?.classList.remove('hidden');
  }
}

function addTeammateRow() {
  const roster = document.getElementById('member-roster');
  if (!roster) return;
  if (currentTeammates.length >= 3) {
    showToast('Team Limit', 'Maximum 4 members allowed per team (Lead + 3).', 'info');
    return;
  }

  const memberIndex = currentTeammates.length + 2;
  const id = 'member_' + Date.now();
  currentTeammates.push(id);

  const row = document.createElement('div');
  row.id = id;
  row.className = 'p-2.5 rounded-xl bg-surface-container-low flex items-center justify-between gap-2 border border-slate-200';
  row.innerHTML = `
    <div class="flex items-center gap-2 flex-1">
      <span class="material-symbols-outlined text-[18px] text-on-surface-variant">person</span>
      <input type="text" placeholder="Member ${memberIndex} Roll No (e.g. 21JECRC...)" class="w-full bg-transparent font-mono text-xs outline-none text-on-surface" />
    </div>
    <button type="button" class="p-1 text-outline hover:text-red-500" onclick="removeTeammateRow('${id}')">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;
  roster.appendChild(row);
}

function removeTeammateRow(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
  currentTeammates = currentTeammates.filter(item => item !== id);
}

function submitRegistration() {
  const conductCheck = document.getElementById('conduct-agree');
  if (conductCheck && !conductCheck.checked) {
    showToast('Accept Guidelines', 'Please check the Student Code of Conduct box to proceed.', 'error');
    return;
  }

  const teamNameInput = document.getElementById('reg-team-name');
  const teamName = teamNameInput ? teamNameInput.value.trim() : 'Team JECRC';

  const res = window.state.registerForEvent(
    window.selectedEventId,
    currentRegMode,
    teamName,
    currentTeammates
  );

  if (!res) return;

  if (res.status === 'already_registered') {
    showToast('Already Registered', 'You already have an active entry pass for this event.', 'info');
    navigateTo('my-passes');
    return;
  }

  // Success Celebration!
  AudioFX.playSuccess();
  triggerConfetti();

  const successModal = document.getElementById('success-modal');
  if (successModal) {
    document.getElementById('success-modal-event').textContent = res.pass.eventTitle;
    document.getElementById('success-modal-pass-id').textContent = res.pass.passId;
    successModal.classList.remove('hidden');
  }
}

function closeSuccessModalAndGoToPasses() {
  const successModal = document.getElementById('success-modal');
  if (successModal) successModal.classList.add('hidden');
  navigateTo('my-passes');
}

function scrollToRegister() {
  const form = document.getElementById('registration-section');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const firstInput = form.querySelector('input');
    if (firstInput) firstInput.focus();
  }
}

// Emergency Gate Notice Toast Broadcast
function broadcastGateNotice() {
  const notice = prompt('Enter gate announcement text to broadcast to attendees:', 'Attention: Gate #02 is now open for Tech Track check-ins. Please keep QR ready.');
  if (notice) {
    showToast('Broadcast Sent', notice, 'success');
  }
}

// Tab Switching in Event Details
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    b.classList.add('text-on-surface-variant', 'font-medium');
  });

  const activePane = document.getElementById(`tab-${tabId}`);
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'font-semibold', 'shadow-sm');
    activeBtn.classList.remove('text-on-surface-variant', 'font-medium');
  }
}

// App Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Category Pills Filter Listeners
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', function() {
      document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.remove('bg-secondary-container', 'text-on-secondary');
        p.classList.add('bg-surface-container-lowest', 'text-on-surface');
      });
      this.classList.remove('bg-surface-container-lowest', 'text-on-surface');
      this.classList.add('bg-secondary-container', 'text-on-secondary');

      window.activeCategory = this.textContent.trim().replace(/^[^a-zA-Z0-9]+/, '');
      renderHomeEvents();
    });
  });

  // Eligibility Badges Filter Listeners
  document.querySelectorAll('.filter-eligibility-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-eligibility-btn').forEach(b => {
        b.classList.remove('bg-inverse-surface', 'text-on-primary');
        b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
      });
      this.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
      this.classList.add('bg-inverse-surface', 'text-on-primary');

      const raw = this.textContent.trim();
      if (raw.includes('JECRC Exclusive')) window.activeEligibility = 'JECRC Exclusive';
      else if (raw.includes('Open to All')) window.activeEligibility = 'Open to All Colleges';
      else window.activeEligibility = 'All Access';

      renderHomeEvents();
    });
  });

  // Live Search listener
  const searchInput = document.getElementById('campusEventSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderHomeEvents();
    });
  }

  // Admin Attendee live search
  const adminSearch = document.getElementById('admin-attendee-search');
  if (adminSearch) {
    adminSearch.addEventListener('input', () => {
      renderAttendeeTable();
    });
  }

  // Seconds live ticker in details hero
  let secs = 45;
  setInterval(() => {
    const secEl = document.getElementById('seconds');
    if (secEl) {
      secs = secs > 0 ? secs - 1 : 59;
      secEl.textContent = secs < 10 ? '0' + secs : secs;
    }
  }, 1000);

  // Initial Route Check from Hash
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const parts = hash.split('/');
    navigateTo(parts[0], parts[1] || null);
  } else {
    navigateTo('home');
  }
});
