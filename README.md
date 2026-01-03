AuroraSkyGlowLabs
Collaborative Aurora & Sky Event Reporting
This website allows users to report aurora sightings and other sky events. Reports are plotted on a map and stored in a GitHub repository (AuroraReports). Users can submit their reports using their current location or by entering coordinates manually.
Features (Current BETA)
Submit aurora or sky events using a dropdown menu.
Optionally enter latitude and longitude, or use automatic geolocation.
Reports show as markers on a Leaflet map.
Dynamic alert provides a JSON snippet and step-by-step instructions to save the report to the AuroraReports repo.
Google Maps link included in alert to view coordinates.
Repository structure: all reports stored in reports.json on GitHub.
How to Contribute / Submit a Report
Open the site: AuroraSkyGlowLabs
Select an event from the dropdown menu.
Optionally enter latitude and longitude (or leave blank to use your current location).
Click Report.
A pop-up alert will appear with:
A JSON snippet for your report
Instructions for committing it to reports.json
A Google Maps link to preview your coordinates
Follow the alert instructions to update the AuroraReports repo.
Repository Structure
Copy code

AuroraSkyGlowLabs/
├── index.html         <- Main website
├── README.md          <- This file
└── AuroraReports/
    └── reports.json   <- Stores all submitted reports
Example Report
Copy code
Json
[
  {
    "lat": 43.0731,
    "lng": -89.4012,
    "event": "fullMoon",
    "timestamp": 1700000000000
  }
]
Planned Updates / Roadmap
[ ] Automatic JSON commits – allow reports to be saved automatically via a backend (eliminating manual GitHub edits).
[ ] Interactive in-page copy panel – show JSON snippet on the page for easy copy-paste instead of using an alert.
[ ] Live filtering – filter markers by event type or intensity.
[ ] Historical view – allow users to see past reports on a timeline.
[ ] Mobile optimization – improve layout for phones and tablets.
[ ] Optional login system – allow contributors to track their submissions.
[ ] Enhanced visuals – animated aurora markers and event-specific icons.
License
This project is open source. Feel free to contribute!
