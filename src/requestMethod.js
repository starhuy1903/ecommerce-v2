import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmM3NGEwMWQxNzNmM2Y4OTI1Y2M1YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwMDgwNiwiZXhwIjoxNjY0MTYwMDA2fQ.bUCiPX3_NHNtUi-z_0IEXZux612L8tYbPMiJ2l-XV8k"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})