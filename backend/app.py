from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
import secrets
import jwt

app=FastAPI()

origins=[
   ' http://localhost:5173/'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers = ['*']
)

secret_key = secrets.token_urlsafe(32)
SECRET_KEY = secret_key
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 900

class Login_class(BaseModel):
    Username:str
    Password:str

dummy_user={
    "Username" : "Gayathri",
    "Password" : "12345"
}

@app.post('/login')
async def login(login_item:Login_class):
    data=jsonable_encoder(login_item)
    if dummy_user["Username"] == data["Username"] and dummy_user["Password"] == data["Password"]:
        encoded_jwt=jwt.encode(data,SECRET_KEY,ALGORITHM)
        return {"Token":encoded_jwt}
    else:
        return {"Login":"Failed"}

