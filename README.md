# CRPF Tender Intelligence Console

An AI-powered procurement evaluation platform that automates bidder eligibility assessment against government tender criteria with complete auditability and transparency.

---

## 🎯 Problem Statement

Government tender evaluation today is slow, inconsistent, and difficult to audit. Officers manually review hundreds of bidder documents across technical, financial, and compliance requirements, leading to delays, omission risks, and lack of transparency.

Public procurement systems also struggle with:

- Manual verification of large document sets
- Inconsistent interpretation across officers
- Weak audit trails and RTI response difficulty
- Difficulty handling scanned/OCR-based submissions

---

## ✨ Our Solution

The **CRPF Tender Intelligence Console** is an AI-powered procurement evaluation platform that automates tender analysis while keeping humans in the loop for governance and compliance.

The platform:

- Extracts eligibility criteria directly from NIT/tender PDFs
- Processes bidder submissions (PDFs, scanned documents, OCR files)
- Uses RAG-based semantic retrieval to evaluate criteria
- Generates evidence-linked Pass / Fail / Review verdicts
- Maintains complete audit trails for RTI and compliance

Every AI decision is linked back to:

- Source document
- Page reference
- Supporting evidence snippet
- Officer override logs

---

## 🚀 Key Features

### AI Criteria Extraction
Automatically parses technical, financial, and compliance requirements from tender documents.

### Multi-Format Bid Processing
Supports PDFs, scanned documents, OCR content, and government-style forms.

### RAG-Based Evaluation Engine
Uses semantic retrieval to fetch exact evidence supporting each evaluation decision.

### Audit Matrix
Provides a bidder-wise evaluation dashboard with:

- Pass/Fail status
- Risk flags
- Review queue
- Compliance tracking

### Human-in-the-Loop Governance
Ambiguous cases are escalated to officers instead of allowing blind AI decisions.

### RTI & Audit Ready
Complete evidence trail and exportable reports in CSV/JSON formats.

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS

### Backend
- FastAPI
- Python 3.11

### AI Stack
- Gemini Pro
- LangChain
- LangGraph

### Database & Retrieval
- ChromaDB
- SQLite
- OCR Pipeline

---

## 🔄 How It Works

1. Upload Tender/NIT PDF  
2. AI extracts eligibility criteria automatically  
3. Bidder documents are processed using OCR + semantic indexing  
4. RAG-based evaluation engine checks every criterion  
5. Evidence-linked verdicts are generated  
6. Ambiguous cases are routed for human review  
7. Complete audit logs and reports are exported  

---

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Python 3.10+
- Node.js 18+
- Google Gemini API Key (required for AI features)

---

## Backend Setup (FastAPI)

### 1. Open a terminal in the project root directory.

### 2. Create and activate a virtual environment

```bash
python -m venv .venv

# Windows
.\.venv\Scripts\activate

# Mac/Linux
source .venv/bin/activate
```

### 3. Install backend dependencies

```bash
pip install -r requirements.txt
```

### 4. Create a `.env` file in the root directory and add your Gemini API key

```env
GOOGLE_API_KEY=your_actual_gemini_api_key
```

### 5. Start the backend server

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

---

## Frontend Setup (React/Vite)

### 1. Open a new terminal and navigate to the Frontend folder

```bash
cd Frontend
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend development server

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## 📂 Project Structure

```text
├── Frontend/         # React Vite Frontend
├── app/              # Core FastAPI application logic
├── data/             # Tender and bidder data
├── main.py           # FastAPI entry point
├── requirements.txt  # Python dependencies
└── README.md
```

---

## 🌟 Core Features Implemented

- Tender workspace management
- AI-based criteria extraction
- Bidder document ingestion
- Evaluation matrix dashboard
- Human review queue
- Audit trail logging
- CSV/JSON export
- Printable compliance reports

---

## 🔮 Future Roadmap

- Real-time officer collaboration
- Advanced analytics dashboards
- Financial health verification integrations
- Multi-language tender parsing
- Blockchain-backed audit logs

---

## 🤝 Team

Built for the **AI for Bharat Hackathon**.

Team Members:
- Chetan Ahuja
- Darshit Khandelwal
- Jay Hirapara
- Vishwajeet Sarak Patil
- Soham Patil

---

Built with ❤️ for transparent and efficient public procurement in Bharat.
