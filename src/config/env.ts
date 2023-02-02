import dotenv from 'dotenv'
dotenv.config()

const env = {
  port: Number(process.env.PORT) ?? 3000
}

export { env }
