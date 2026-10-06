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

// Konfigurasi Database PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Ndaadaobay27',
    port: 5432, // Port khusus database PostgreSQL
})

