from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import test

app = FastAPI()

# CORS middleware setup (for frontend compatibility)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend origin in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(test.router)

@app.get("/")
def root():
    return {"message": "SIEM API is up and running"}
