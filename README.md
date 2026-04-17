# chatrooms

A simple chat room app using [ChatEngine.io](https://chatengine.io).

## Setup

### Backend

```bash
cd backend
cp .env.example .env
# Edit .env and fill in your ChatEngine.io private key
npm install
npm start
```

Server runs on port 3001 by default.

### Frontend

```bash
cd frontend
npm install
npm start
```

## Environment variables

See `backend/.env.example`.

| Variable | Description |
|----------|-------------|
| `CHATENGINE_PRIVATE_KEY` | Your ChatEngine.io project private key (required) |
| `PORT` | Server port (default: 3001) |

## ⚠️ Security note

A ChatEngine private key was accidentally committed to this repo's history in 2023. The key has since been rotated. If you're reviewing old commits, the leaked key is no longer valid.

Best practices applied:
- Private key moved to environment variable
- `.env` added to `.gitignore`
- `.env.example` shows expected variables without real values
