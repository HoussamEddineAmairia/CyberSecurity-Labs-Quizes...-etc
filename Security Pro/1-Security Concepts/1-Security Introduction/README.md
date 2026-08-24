<div align="center">

  <h1>🛡️ 1-Security Introduction Quiz</h1>

  <p>An interactive  web application designed to evaluate core cybersecurity Introduction</p>

  <br />

  <a href="https://effervescent-licorice-2fdba3.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/%E2%96%B6_LAUNCH_LIVE_ASSESSMENT-00F3FF?style=for-the-badge&logo=shield&logoColor=black&labelColor=0B0F19" alt="Launch Live Assessment" height="50" />
  </a>

  <br /><br />

  <strong><a href="https://effervescent-licorice-2fdba3.netlify.app" target="_blank">👉 Click Here to Open the Live Game in Your Browser 👈</a></strong>

  <br /><br />

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
  ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>



# 🛡️ Cybersecurity Fundamentals & Controls Quiz


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Domain-Cybersecurity](https://img.shields.io/badge/Domain-Information%20Security-blue.svg)](#)
[![Questions-10](https://img.shields.io/badge/Questions-10%20Items-lightgrey.svg)](#)
[![Status-Complete](https://img.shields.io/badge/Status-Review%20Complete-brightgreen.svg)](#)

> A structured practice assessment covering core **Information Security (InfoSec)** concepts, including security controls, threat vectors, organizational structures (SOC/CIRT), DevOps, hashing, and the core CIA Triad.

---

## 📌 Executive Summary

This assessment evaluates real-world scenario responses expected of a **Chief Information Security Officer (CISO)** or **Cybersecurity Lead**. 

### 🎯 Key Learning Objectives
- **Security Controls**: Technical vs. Managerial vs. Operational vs. Physical controls.
- **Threat Dynamics**: Identifying *Attack Scale & Velocity* vs. *Sophisticated Attacks*.
- **Incident Response & Oversight**: Roles of the **SOC** and **CIRT**.
- **DevSecOps**: Breaking organizational silos to integrate continuous security.
- **Data Protection**: Hashing vs. Encryption and the **CIA Triad**.

---

## 📝 Practice Quiz & Breakdown

<details open>
<summary><b>Question 1: Selecting the Right Security Control Type</b></summary>

> **Scenario:** As CISO, you are tasked with implementing a control to **automatically detect and prevent** unauthorized access to sensitive customer data.

* [ ] **A.** Operational control
* [x] ✅ **B. Technical control** *(Correct)*
* [ ] **C.** Managerial control
* [ ] **D.** Physical control

---
#### 💡 Explanation
**Technical controls** use technology (such as firewalls, IPS, or automated access control systems) to execute detection and prevention automatically without direct human intervention.
</details>

---

<details open>
<summary><b>Question 2: Identifying Complex Threat Patterns</b></summary>

> **Scenario:** Network traffic appears legitimate but causes system slowdowns. The traffic patterns vary with every occurrence, masking itself within normal baseline activity.

* [x] ✅ **A. Sophisticated attack** *(Correct)*
* [ ] **B.** Proliferation of attack software
* [ ] **C.** Data breach
* [ ] **D.** Attack scale and velocity

---
#### 💡 Explanation
**Sophisticated attacks** leverage common internet protocols and continually vary their signatures/behaviors, making them extremely difficult to distinguish from legitimate user traffic.
</details>

---

<details open>
<summary><b>Question 3: Organizational Security Oversight</b></summary>

> **Scenario:** Your company is expanding rapidly, making security complex across functions. You need a dedicated internal team to monitor and protect critical assets continuously.

* [ ] **A.** Hiring more IT staff
* [x] ✅ **B. Establishing a Security Operations Center (SOC)** *(Correct)*
* [ ] **C.** Implementing a new security policy
* [ ] **D.** Outsourcing security to a third-party vendor

---
#### 💡 Explanation
A **Security Operations Center (SOC)** provides the required organizational framework, continuously monitoring, detecting, and responding to threats across all business functions.
</details>

---

<details open>
<summary><b>Question 4: Defining Threat Metrics</b></summary>

> **Scenario:** Which security challenge explicitly refers to the rapid and broad spread of an attack across many systems in a short timeframe?

* [ ] **A.** Sophisticated attacks
* [ ] **B.** Data encryption
* [x] ✅ **C. Attack scale and velocity** *(Correct)*
* [ ] **D.** Proliferation of attack software

---
#### 💡 Explanation
**Attack scale and velocity** describes the speed and reach of automated threats (e.g., worms or botnets) capable of infecting thousands or millions of nodes rapidly over the internet.
</details>

---

<details open>
<summary><b>Question 5: Administrative & Governance Methods</b></summary>

> **Scenario:** Which of the following is a recognized method of implementing security controls within an organization?

* [ ] **A.** Financial controls
* [ ] **B.** Marketing controls
* [x] ✅ **C. Managerial controls** *(Correct)*
* [ ] **D.** Sales controls

---
#### 💡 Explanation
**Managerial controls** (administrative controls) establish guidelines, policies, standards, risk assessment procedures, and governance structures to direct organizational security posture.
</details>

---

<details open>
<summary><b>Question 6: Cryptographic Principles (Digital Signatures)</b></summary>

> **Scenario:** You hash a message and encrypt the resulting hash with your private key to create a digital signature before transmission. What explicit protection does the **hashing activity itself** supply?

* [ ] **A.** Confidentiality
* [ ] **B.** Availability
* [ ] **C.** Non-repudiation
* [x] ✅ **D. Integrity** *(Correct)*

---
#### 💡 Explanation
> [!NOTE]
> * **Hashing** $\rightarrow$ Provides **Integrity** (detects unauthorized tampering).
> * **Encrypting hash with Private Key** $\rightarrow$ Provides **Non-repudiation** and **Authenticity**.
> * **Confidentiality** is *not* provided because the payload message is sent in cleartext.
</details>

---

<details open>
<summary><b>Question 7: Integrating Dev & Ops Security</b></summary>

> **Scenario:** Your company faces operational silos between software developers and systems engineering, creating deployment inefficiencies and security flaws.

* [ ] **A.** Implementing a new security policy
* [ ] **B.** Establishing a Security Operations Center (SOC)
* [ ] **C.** Outsourcing security to a third-party vendor
* [x] ✅ **D. Adopting a Development and Operations (DevOps / DevSecOps) approach** *(Correct)*

---
#### 💡 Explanation
A **DevOps / DevSecOps** culture breaks down team barriers, integrating security checks into automated continuous integration and continuous delivery (CI/CD) pipelines.
</details>

---

<details open>
<summary><b>Question 8: Physical Storage Media Vulnerabilities</b></summary>

> **Scenario:** An employee writes sensitive data to an unencrypted USB flash drive and places it in her pocket. What primary risk is introduced?

* [ ] **A.** Non-repudiation
* [x] ✅ **B. Confidentiality** *(Correct)*
* [ ] **C.** Availability
* [ ] **D.** Integrity

---
#### 💡 Explanation
Removable drives are easily lost, misplaced, or stolen. Unencrypted portable storage poses a major risk to **Confidentiality** by allowing unauthorized entities physical access to raw files.
</details>

---

<details open>
<summary><b>Question 9: Advanced Incident Response Capabilities</b></summary>

> **Scenario:** Following an undetected third-party data breach, the executive board demands a continuous, internal mechanism to catch and neutralize active breaches in real time.

* [ ] **A.** Hiring an external firm for periodic penetration tests
* [ ] **B.** Purchasing advanced automated endpoint software
* [x] ✅ **C. Implementing a dedicated Computer Incident Response Team (CIRT)** *(Correct)*
* [ ] **D.** Conducting quarterly employee awareness training

---
#### 💡 Explanation
A **Computer Incident Response Team (CIRT)** consists of specialized personnel dedicated to actively hunting, analyzing, containing, and remediating security incidents before severe operational impact occurs.
</details>

---

<details open>
<summary><b>Question 10: Core Foundations of Information Security</b></summary>

> **Scenario:** Select the **three core goals** that comprise the fundamental framework of information security. *(Select 3)*

* [ ] **A.** Assets
* [x] ✅ **B. Integrity** *(Correct)*
* [ ] **C.** Policies
* [x] ✅ **D. Confidentiality** *(Correct)*
* [ ] **E.** Non-repudiation
* [ ] **F.** Employees
* [x] ✅ **G. Availability** *(Correct)*

---
#### 💡 Explanation
Known universally as the **CIA Triad**:

| Core Goal | Description |
| :--- | :--- |
| 🔒 **Confidentiality** | Restricting data access exclusively to authorized personnel. |
| 🛡️ **Integrity** | Guaranteeing data remains authentic, unaltered, and accurate. |
| ⚡ **Availability** | Ensuring systems and data are reliable and accessible when required. |

---

## 📊 Summary of Concepts Covered

```mermaid
mindmap
  root((InfoSec Foundations))
    CIA Triad
      Confidentiality
      Integrity
      Availability
    Controls
      Technical
      Managerial
      Operational
      Physical
    Incident Handling
      SOC
      CIRT
      DevOps Integration
    Threat Vectors
      Sophisticated Attacks
      Scale and Velocity


   
