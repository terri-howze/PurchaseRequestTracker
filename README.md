# 🛒 Purchase Request Tracker

A cross-platform desktop application for managing purchase requests in an organization. Built using React, Node.js, and Electron, it provides a streamlined interface for submitting and tracking requests, securely storing documents via AWS S3, and persisting data using AWS RDS with Microsoft SQL Server.

---

## 📦 Features

- Create, submit, and manage purchase requests
- Upload and store attachments to AWS S3
- Secure database integration with AWS RDS (MSSQL)
- Real-time status tracking and updates
- Cross-platform desktop packaging via Electron Forge
- Clean, responsive React interface

---

## 🧰 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** AWS RDS (Microsoft SQL Server)
- **File Storage:** AWS S3 (with signed URL support)
- **Desktop:** Electron + Electron Forge
- **Package Manager:** npm

---

## ☁️ Cloud Integration

### 📁 AWS S3
- Files uploaded via the frontend are stored securely in an AWS S3 bucket.
- Backend generates **signed URLs** to handle secure direct uploads and downloads.

### 🗄️ AWS RDS (MSSQL)
- Persistent storage of purchase requests and related metadata.
- Managed SQL Server database instance for scalability and reliability.
- Uses Sequelize for connection and querying.

---
