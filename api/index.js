const express = require('express')
const {PrismaClient} = require('@prisma/client')
require('dotenv').config()

const app = express()
const prisma = new PrismaClient()