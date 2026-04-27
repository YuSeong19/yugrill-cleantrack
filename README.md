# CleanTrack 🍽️

ระบบจัดการทำความสะอาดร้านอาหาร — Next.js + Firebase Realtime Database

## Deploy บน Vercel

1. Push โค้ดขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com) → Import repository
3. Framework: **Next.js** (ตรวจจับอัตโนมัติ)
4. กด **Deploy**

## Run local

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## Firebase

- Database: `cleantrack-restaurant-default-rtdb.asia-southeast1`
- PIN เริ่มต้น: `1234` (แก้ที่ `const APP_PIN` ใน `pages/index.jsx`)

## Rules ที่ควรตั้งใน Firebase

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```
