# CyberSecurity-Labs-Quizes...-etc
Hands-on cybersecurity portfolio featuring Security+ &amp; TestOut Security Pro lab

# [Lab Title: e.g., SSH Hardening & Firewall Configuration]

**Domain:** [e.g., Network Security / Access Control]  
**Tools & Tech:** [e.g., Linux (Ubuntu), SSH, iptables, Wireshark]  
**Source:** [e.g., TestOut Security Pro / Personal Lab]  

---

## 🎯 Objective & Scenario
[Briefly describe the security challenge or requirement in your own words. Do not copy exact vendor text.]

* **Problem Statement:** Default SSH configurations allow root access over standard port 22, posing a brute-force risk.
* **Goal:** Hardened remote access by changing default ports, restricting root access, and updating local firewall rules.

---

## 🎥 Video Walkthrough
Click the preview image below to watch a short video demonstration of the implementation and verification:

[![Watch Lab Walkthrough](https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)  
*Runtime: ~2 minutes | Audio: Voiceover commentary explaining execution steps.*

---

## ⚙️ Technical Implementation

### Step 1: Modify System Configuration
Opened the main configuration file and adjusted default settings:

```bash
# Backup configuration file before editing
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak

# Edit the configuration
sudo nano /etc/ssh/sshd_config
