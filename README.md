# AuroraSkyGlowLabs

Collaborative aurora & sky event reporting

A small website and repo for community-submitted aurora and sky-event reports. Users submit sightings which are shown on a map and saved in the AuroraReports repository as JSON entries.

Status: BETA

---

## Features (BETA)

- Submit aurora or other sky event from a dropdown.
- Optional manual latitude/longitude or automatic browser geolocation.
- Reports displayed as markers on a Leaflet map.
- On submission, a JSON snippet and step-by-step instructions are shown for adding the report to the AuroraReports repo.
- Google Maps preview link included with each alert.
- All reports are stored in `AuroraReports/reports.json`.

---

## Quick Start

1. Open the site: [AuroraSkyGlowLabs](https://github.com/AuroraSkyGlowLabs/AuroraSkyGlowLabs) (site entry point: `index.html`).
2. Select an event from the dropdown.
3. Optionally type latitude and longitude, or leave blank to use your browser's current location.
4. Click **Report**.
5. A pop-up will appear with:
   - A JSON snippet for the report
   - Instructions for committing it to `AuroraReports/reports.json`
   - A Google Maps link to preview coordinates

Follow the pop-up instructions to add the report to the AuroraReports repository.

---

## How to Submit a Report (manual commit)

If you prefer to add reports manually to the repository:

1. Open `AuroraReports/reports.json`.
2. Add a new JSON object to the array, for example:

```json
{
  "lat": 43.0731,
  "lng": -89.4012,
  "event": "fullMoon",
  "timestamp": 1700000000000
}
```

3. Commit and push the updated `reports.json` to the repository.

If you want to automate this later, see the Roadmap (Automatic JSON commits).

---

## Repository Structure

```
AuroraSkyGlowLabs/
├── index.html         <- Main website
├── README.md          <- This file
└── AuroraReports/
    └── reports.json   <- Stores all submitted reports
```

---

## Example Report

```json
[
  {
    "lat": 43.0731,
    "lng": -89.4012,
    "event": "fullMoon",
    "timestamp": 1700000000000
  }
]
```

---

## Roadmap / Planned Updates

- [ ] Automatic JSON commits — allow reports to be saved automatically via a backend (remove manual GitHub edits). (delayed)
- &check;  Interactive in-page copy panel — show the JSON snippet on the page for easier copy/paste instead of an alert. 
- [ ] Live filtering — filter markers by event type or intensity.
- [ ] Historical view — timeline of past reports.
- [ ] Mobile optimization — improve layout for phones and tablets.
- [ ] Optional login system — allow contributors to track their submissions.
- [ ] Enhanced visuals — animated aurora markers and event-specific icons.
- &check; Fix map

---

## Contributing

Contributions are welcome!

- Small UI/UX improvements, map marker icons, or event types: open a PR.
- Want to add automation (server/backend)? Open an issue to discuss the approach first.
- Please include tests or manual verification steps for larger changes.

---

## Data & Privacy

- Reports are public and stored in the repository. Do not submit private or sensitive information.
- Timestamps are stored as epoch milliseconds.

---

## License

This project is open source. Please add a LICENSE file to clarify terms (for example, MIT).

---
