from fastapi import FastAPI
from app.routes import example

app = FastAPI(title="Social")

app.include_router(example.router)

@app.get("/")
def health():
    return {"message": "everything is looking good.System testing fine "}
    
