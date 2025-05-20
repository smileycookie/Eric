# Eric
This is a project is based on the creation of dasboard for different SIEM solution.

✅ Step 3: Run the Backend

Still inside the backend directory, run the API:
uvicorn app.main:app --reload
You should see:
INFO:     Uvicorn running on http://127.0.0.1:8000
Then visit http://127.0.0.1:8000 in your browser — you should see:
{"message": "SIEM Dashboard API is running"}
