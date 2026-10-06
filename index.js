import express from 'express'
import pg from 'pg'

const app = express()
const { Pool } = pg

// 1. TAMBAHKAN DEKLARASI PORT EXPRESS DI SINI
const port = 3000

app.use(express.json())
app.use(
    express.urlencoded({ 
        extended: true,
    })
)

