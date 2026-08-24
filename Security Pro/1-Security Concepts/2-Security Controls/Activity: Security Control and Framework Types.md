# Scenario Analysis: Security Controls & Functional Framework Types

**Domain:** CompTIA Security+ (Security Architecture & Controls) / TestOut Security Pro  
**Topics Covered:** Technical, Operational, and Physical Security Control Categories; Detective, Directive, and Preventive Functional Types  
**Author:** Houssam Eddine Amairia

---

## 🎯 Scenario Overview
As a security consultant for a newly launched IT firm, the objective is to analyze active operational risks, select appropriate security control categories, determine their functional types, and recommend specific remediation steps.

---

## 🎥 Video Demonstration
Click the preview below to watch the complete step-by-step walkthrough and scenario commentary:

[![Watch Scenario Walkthrough](https://img.youtube.com/vi/71OyKZkFBZQ/hqdefault.jpg)](https://www.youtube.com/watch?v=71OyKZkFBZQ)  
*Runtime: ~6 minutes | Audio: Voiceover commentary analyzing security control selection.*
---

## 📊 Security Control Breakdown & Analysis

### 1. Network Intrusion & Malicious Activity Identification
* **Scenario Context:** The IT Administrator reported that a recent attack caused significant damage. The organization requires a solution to immediately detect malicious activity on the network.
* **Security Control Category:** **Technical**  
  * *Rationale:* Technical controls are implemented directly within hardware, software, or firmware (e.g., Firewalls, IDS/IPS, SIEM platforms, and OS access control models).
* **Functional Control Type:** **Detective**  
  * *Rationale:* Detective controls identify, record, and log unauthorized attempts, intrusions, or malicious traffic in real time.
* **Remediation Action:** Deploy Network Firewall / Intrusion Detection System (IDS).

### 2. Employee Web Traffic & Security Policy Enforcement
* **Scenario Context:** The CEO noted that employees frequently visit unauthorized and insecure websites, ignoring general verbal guidance.
* **Security Control Category:** **Operational**  
  * *Rationale:* Operational (Administrative) controls focus on the human element and organizational processes, including policies, procedures, standard operating procedures (SOPs), and user awareness training.
* **Functional Control Type:** **Directive**  
  * *Rationale:* Directive controls mandate compliance with behavioral rules, security standards, and formal guidelines.
* **Remediation Action:** Formulate and update the **Acceptable Use Policy (AUP)** and enforce web filtering controls.

### 3. Server Room Physical Access Control
* **Scenario Context:** Physical assessment revealed unauthorized personnel could walk into the server room unmonitored. Access must be restricted exclusively to authorized staff.
* **Security Control Category:** **Physical**  
  * *Rationale:* Physical controls protect physical assets, server infrastructure, and facility boundaries using tangible barriers (e.g., locks, security guards, lighting, and environmental monitors).
* **Functional Control Type:** **Preventive**  
  * *Rationale:* Preventive controls proactively stop unauthorized physical or logical entry before a security breach occurs.
* **Remediation Action:** Install Key Card / Electronic Access Control (EAC) door lock systems.

---

## 💡 Security Control Matrix Summary

| Scenario | Primary Risk | Control Category | Functional Type | Recommended Remediation |
| :--- | :--- | :--- | :--- | :--- |
| **1. Network Defense** | Malicious network activity | **Technical** | **Detective** | Deploy Firewall / IDS Monitoring |
| **2. Employee Behavior** | Insecure web browsing | **Operational** | **Directive** | Update Acceptable Use Policy (AUP) |
| **3. Facility Access** | Unauthorized server room entry | **Physical** | **Preventive** | Install Key Card Door Lock System |

---

## 🔐 Key Security+ Takeaways
* **Control Categories vs. Functional Types:** Control *categories* define **how** a control is implemented (Technology, Human Processes, Physical Barriers), whereas functional *types* define **what action** the control takes (Prevent, Detect, Direct, Correct, Deter).
* **Defense-in-Depth:** A robust security posture requires layering Technical, Operational, and Physical controls so that the failure of a single control does not compromise the enterprise environment.
