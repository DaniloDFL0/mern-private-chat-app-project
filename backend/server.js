import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectToMongoDB from "./db/connectToMongoDB.js"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// ROUTES
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

const PORT = process.env.PORT || 6001

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    connectToMongoDB()
})