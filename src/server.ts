import app from "./index"
import dotenv from "dotenv"
dotenv.config()


const PORT : number = Number(process.env.PORT) || 5009
app.listen(PORT, () => 
    console.log(`The server is running on port ${PORT}`
    ))