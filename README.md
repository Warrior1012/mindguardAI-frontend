# MindGuard AI Frontend

A lightweight HTML, CSS, and vanilla JavaScript interface for the MindGuard AI student-wellness prototype. It collects seven self-reported inputs and displays the response returned by the MindGuard Flask API.

> This is a prototype for informational use, not a diagnostic tool or a substitute for professional care.

## Features

- Mood, sleep, stress, study, screen-time, appetite, and social-interaction inputs
- Sends JSON to the backend `POST /analyze` endpoint
- Displays the returned risk label, high-risk class probability, and generated support message
- Simple confidence indicator

## Tech

HTML, CSS, and browser JavaScript. No frontend package manager is required.

## Run locally

1. Start the API from [mindguardAI-backend](https://github.com/Warrior1012/mindguardAI-backend) on port 5000, or configure the API URL in `script.js`.
2. Serve this directory with a local static server, for example VS Code Live Server, or use Python:

   ```bash
   python -m http.server 5500
   ```

3. Open `http://localhost:5500`.

The current `script.js` points to a hosted API URL. For local development, change that URL to `http://localhost:5000/analyze`; avoid hard-coding environment-specific endpoints in a production app.

## Request contract

The frontend sends `mood`, `sleep`, `stress`, `study`, `screen`, `appetite`, and `social` as numeric JSON fields. The backend requires all seven fields.

## Known limitations

- Client-side validation is incomplete and network/API errors are not handled robustly.
- The API URL is currently hard-coded in JavaScript.
- The interface renders the backend message as HTML; treat API output as untrusted and prefer safe text rendering.
- No automated frontend tests are configured.

## Related repository

- [MindGuard AI Backend](https://github.com/Warrior1012/mindguardAI-backend)

## License

No license is specified in this repository.