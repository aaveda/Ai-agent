from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

# Placeholder function for a security scan (just simulating vulnerability checks)
def scan_website(url: str):
    # Example: Check for simple XSS vulnerability
    if "<script>" in requests.get(url).text:
        return {"vulnerabilities": ["XSS detected"]}

    return {"vulnerabilities": ["No vulnerabilities detected"]}

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Security Vulnerability Scanner"}

@app.post("/scan/")
def scan_url(url: str):
    result = scan_website(url)
    return result
