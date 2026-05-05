# Care Plus — No-Show Reduction Web App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## About the Project

This project was developed as part of the **FIAP Challenge** — a real-world academic challenge in partnership with **Care Plus (Part of Bupa)**, one of Brazil's leading health insurance providers with over 600,000 beneficiaries and 8 medical clinics.

**The problem:** Care Plus clinics face a significant no-show rate caused by factors such as bad weather, heavy traffic, long distances, unexpected schedule changes, and lack of patient engagement.

**Our solution:** A responsive web application that reduces no-show rates through smart reminders, gamification, real-time data integration, and an intuitive user experience inspired by apps like Duolingo, Google Calendar, and Waze.

---

## Live Features

### Smart Notifications
- Intelligent no-show risk detection based on weather forecast, traffic conditions, and distance
- Personalized reminders at 7 days, 3 days, 1 day, and 2 hours before appointments
- One-click switch to Telemedicine when attendance risk is high
- WhatsApp integration for reminder alerts
- Seasonal health campaigns (Breast Cancer Awareness, Prostate Cancer Awareness)
- Vaccination calendar by age group

### Gamification System
- Responsibility Score with Bronze, Silver, Gold, and Diamond levels
- Coin-based reward system — patients earn coins for attending, confirming, and cancelling in advance
- Coins converted into Wellness Credits redeemable for pharmacy discounts, meditation apps, and premium telemedicine
- Achievement badges for perfect attendance, punctuality, and advance planning
- Streak tracking for consecutive attended appointments

### Appointment Management
- Full booking flow: specialty → doctor → clinic → date → time → confirmation
- Simulated availability calendar with 6 specialties and multiple doctors
- Easy rescheduling with intuitive UX
- Cancel with advance notice and earn +100 coins
- Google Maps and Waze integration for directions
- Google Calendar and .ics file export for reminders

### User Profile & Reports
- Interactive reports for consultations, attendance rate, and streak history
- Coin wallet with transaction history
- Progress tracking with visual charts and progress bars

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home dashboard with score card, risk alerts, next appointment, and recent achievements |
| `consultas.html` | Appointment list with tabs for upcoming and completed consultations |
| `agendar.html` | Full multi-step booking flow with simulated doctor availability |
| `notificacoes.html` | Smart notification center with health tips and campaign alerts |
| `perfil.html` | User profile with gamification, coin wallet, and interactive reports |

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styles, animations, and responsive layout |
| Bootstrap 5.3.3 | Grid system, components, and utility classes |
| Bootstrap Icons | Icon library throughout the UI |
| JavaScript (Vanilla) | Interactivity, DOM manipulation, and dynamic content |
| Google Fonts | Plus Jakarta Sans typography |
| Oracle SQL Developer Data Modeler | Entity Relationship Diagram (ERD) |

---

## Data Model (ERD)

The application was designed with a relational data model including the following entities:

- **USUARIO** — patient profile with geolocation (latitude/longitude)
- **CONSULTA** — appointment with no-show risk score field
- **CLINICA** — clinic with geolocation for distance calculation
- **LEMBRETE** — smart reminders with type, channel, and response tracking
- **RECOMPENSA** — reward system with coin value and earning conditions
- **PREVISAO** — weather and traffic forecast linked to each appointment

Key relationships:
- User schedules Appointments (1:N)
- Appointment occurs at Clinic (N:1)
- Appointment receives Reminders (1:N)
- User accumulates Rewards (1:N)
- Appointment has one Forecast (1:1)

---

## How to Run Locally

No installation required — this is a pure frontend project.

```bash
# Clone the repository
git clone https://github.com/your-username/careplus-challenge.git

# Navigate to the project folder
cd careplus-challenge

# Open index.html in your browser
# Or use Live Server extension in VS Code for auto-reload
```

**Recommended:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for the best experience.

---

## Project Structure

```
careplus/
├── index.html          # Home dashboard
├── consultas.html      # Appointments page
├── agendar.html        # Booking flow
├── notificacoes.html   # Notifications center
├── perfil.html         # User profile
├── css/
│   └── style.css       # Custom styles
└── js/
    └── script.js       # JavaScript logic
```

---

## Academic Context

- **Institution:** FIAP — Faculty of Informatics and Administration Paulista, São Paulo, Brazil
- **Course:** Systems Analysis and Development — 1st Year
- **Challenge partner:** Care Plus (Part of Bupa)
- **Sprint:** Sprint 2 — Frontend Development (1st Semester 2026)
- **Evaluation criteria:** Functional frontend using HTML, CSS, Bootstrap and JavaScript with focus on user experience and responsive design

---

## Key Insights

1. **Patient Behaviour** — Patients don't miss appointments out of bad intention. Empathetic, personalised reminders that consider real-time factors like weather and traffic transform passive patients into engaged ones.

2. **Gamification as Motivation** — Turning health responsibility into a rewarding experience changes behaviour. The coin system motivates patients not only to attend but also to cancel in advance, freeing up slots for other patients and reducing clinic losses.

3. **Data & Technology** — Integrating weather forecasts, traffic data, and appointment history allows the system to predict no-show risk and act proactively — suggesting alternative clinics, offering remote care, and sending personalised reminders at the right time.

---

## Author

**Mirian Priscila da Penha** — RM: 567095  
Systems Analysis and Development — FIAP  
[LinkedIn](https://linkedin.com/in/your-profile) | [GitHub](https://github.com/your-username)

---

*Developed as part of the FIAP Challenge program — applying theoretical knowledge to real-world business problems.*
