const quizData = [
  {
    question: "Question 1\n\nA company finds that employees are accessing streaming websites that are not being monitored for malware or viruses.\nWhich type of control can the network administrator implement to protect the system and keep the employees from viewing unapproved sites?",
    options: ["A. Technical", "B. Corrective", "C. Detective", "D. Operational"],
    correct: [0],
    explanation: "A technical security control includes hardware or software mechanisms used to protect assets. Additionally, antivirus software, firewalls, and intrusion detection systems are examples of technical controls.\n\nOperational security control characterizes a tangible item, preventing or detecting unauthorized access to physical spaces, systems, and assets.\n\nA detective control identifies when incidents or vulnerabilities have occurred. For example, auditing and monitoring would be detective controls.\n\nCorrective control actively responds to an incident, fixes it, and prevents it from happening again. Antivirus software exemplifies a corrective control."
  },
  {
    question: "Question 2\n\nWhich of the following is an example of a preventative control type?",
    options: ["A. An advanced network appliance", "B. Network monitoring applications", "C. Intrusion detection systems", "D. Real-time monitoring alerts"],
    correct: [0],
    explanation: "The easiest prevention control is an advanced network appliance, which is sometimes called an adaptive security appliance (ASA).\n\nExamples of detective controls are intrusion detection systems (IDSs), network monitoring applications, collectors logs, and real-time monitoring alerts."
  },
  {
    question: "Question 3\n\nAfter a recent server outage, the company discovered that an employee accidentally unplugged the power cable from the server while grabbing some office supplies from the nearby shelf.\nWhat security control did the company lack that led to the server outage?",
    options: ["A. Physical", "B. Operational", "C. Technical", "D. Managerial"],
    correct: [0],
    explanation: "Physical controls such as alarms, gateways, locks, lighting, and security cameras deter and detect access to premises. For the server's security, segregating that equipment from normal employee access is important.\n\nManagerial controls provide oversight of the information system. Examples could include risk identification or a tool allowing the evaluation and selection of other security controls.\n\nTechnical controls are the implementation of a system, such as hardware, software, or firmware. For example, firewalls, antivirus software, and OS access control models are technical controls.\n\nOperational controls are implemented primarily by people. For example, security guards and training programs are operational controls."
  },
  {
    question: "Question 4\n\nAn acceptable use policy requires the system to encrypt confidential information while in transit. All employees must use secure email when exchanging proprietary information with external vendors.\nWhich of the following describes this type of acceptable use policy?",
    options: ["A. Managerial", "B. Operational", "C. Preventive", "D. Technical"],
    correct: [1],
    explanation: "Operational controls like this acceptable use policy focus on procedures and responsibilities that are well defined and executed by people. They help to ensure the security of an organization's day-to-day operations.\n\nManagerial controls establish strategies, goals, and objectives for an organization's overall security program. They often include risk assessment and the review of security controls.\n\nTechnical controls involve the use of technology to control user access and protect information systems. They include network and system monitoring, firewalls, and intrusion detection systems.\n\nPreventive controls are proactive measures designed to stop potential security incidents from happening. Examples include firewall configurations, user access controls, and security awareness training."
  },
  {
    question: "Question 5\n\nWhich type of control makes use of policies, DRPs, and BCPs?",
    options: ["A. Managerial", "B. Preventative", "C. Technical", "D. Operational"],
    correct: [0],
    explanation: "Managerial controls consist of management techniques and administrative procedures. These can include security policies, hiring policies, disaster recovery plans (DRPs), and business continuity plans (BCPs).\n\nOperational controls are ones that the security team performs daily.\n\nTechnical controls are based around software, applications, and security appliances.\n\nPreventative controls, such as an IPS, are used to prevent security breaches."
  },
  {
    question: "Question 6\n\nThe security operations manager of a multinational corporation focuses on enhancing directive operational controls.\nWhich of the following should the manager implement?",
    options: [
      "A. Firewall to block unauthorized network traffic.",
      "B. Regular vulnerability assessments using automated tools.",
      "C. User awareness and training programs.",
      "D. Surveillance cameras installed around the premises."
    ],
    correct: [2],
    explanation: "User awareness and training programs are examples of directive operational controls. These controls are about guiding behavior towards specific outcomes, such as improving security awareness and adherence to protocols.\n\nA firewall is a preventive control that serves to block unauthorized network traffic. Despite its importance, it doesn't guide behavior and therefore is not a directive control.\n\nSurveillance cameras serve to monitor and detect potential security incidents. While they contribute to overall security, they do not guide behavior and are not directive controls.\n\nRegular vulnerability assessments help in identifying potential security weaknesses. Although critical, they do not guide behavior, thus they are not considered directive controls."
  },
  {
    question: "Question 7\n\nWhich type of control is used to discourage malicious actors from attempting to breach a network?",
    options: ["A. Physical", "B. Deterrent", "C. Preventative", "D. Detective"],
    correct: [1],
    explanation: "The deterrent control type discourages malicious actors from trying to breach a network. The more deterrents are implemented, the less likely it is that anyone tries. These could include internal security policies, access-protected doors for a server room, entry-point access restriction, biometric sensors, man traps, security cameras, security training, and security guards.\n\nDetective controls monitor network activity and inform the security team of a potential security event. Detective controls also log activities and provide artifacts to help investigate the event. Intrusion detection systems are an example of detective controls.\n\nPhysical deterrents keep unauthorized people from physically accessing a company's assets. Locked doors, proximity cards, fences, cameras, and guards are all ways to physically protect a network.\n\nPreventative controls, such as an IPS, are used to prevent security breaches."
  },
  {
    question: "Question 8\n\nThe chief security officer (CSO) at a financial organization wants to implement additional detective security controls.\nWhich of the following would BEST represent this type of control?",
    options: [
      "A. Installation of surveillance camera.",
      "B. Performing regular system backups.",
      "C. Implementation of biometric authentication systems.",
      "D. Enforcement of access control mechanisms."
    ],
    correct: [0],
    explanation: "Surveillance cameras are physical controls that act as detective mechanisms, helping to identify unauthorized access or activities within the monitored area.\n\nWhile it is an important security measure, enforcing access control mechanisms primarily serves as a preventive control. For example, it prevents unauthorized physical access but does not detect issues or breaches actively.\n\nAlthough a biometric authentication system is an important control, it primarily serves as a preventive control. Biometric authentication prevents unauthorized access by ensuring verified individuals can access certain areas or data, but it does not actively detect breaches or security incidents.\n\nRegular system backups are generally a corrective control that does not detect issues. Instead, they provide a means to recover after a security incident."
  },
  {
    question: "Question 9\n\nA company moved its office supplies to another room and instituted a new security system for entry. The company implemented this after a recent server outage.\nWhat category of security control BEST describes the function of this recent implementation?",
    options: ["A. Operational", "B. Detective", "C. Corrective", "D. Preventive"],
    correct: [2],
    explanation: "Corrective controls eliminate or reduce the impact of a security policy violation. A corrective control occurs after an attack. For this scenario, segregating server space access from common access would be corrective.\n\nPreventive controls eliminate or reduce the likelihood that an attack can succeed. The company implements this control to avert a potential incident from occurring.\n\nDetective controls may not prevent or deter access, but they will identify and record an attempted or successful intrusion. A security camera would be a type of detective control.\n\nOperational controls involve people, such as hiring security guards and performing training programs."
  },
  {
    question: "Question 10\n\nWhich of the following BEST describes compensating controls?",
    options: [
      "A. Monitors network activity and informs the security team of a potential security event.",
      "B. Partial control solution that is implemented when a control cannot fully meet a requirement.",
      "C. Attempts to fix any controls that aren't working properly.",
      "D. Discourages malicious actors from attempting to breach a network."
    ],
    correct: [1],
    explanation: "Compensating controls are a partial control solution that is implemented when a control cannot fully meet a requirement.\n\nDetective controls monitor network activity and inform the security team of a potential security event.\n\nCorrective controls attempt to fix any controls that aren't working properly.\n\nDeterrent controls discourage malicious actors from attempting to breach a network."
  }
];

let currentIdx = 0;
let userScore = 0;
let selectedIndices = [];
let isChecked = false;

function loadQuestion() {
  const q = quizData[currentIdx];
  isChecked = false;
  selectedIndices = [];
  
  document.getElementById("question-text").innerText = q.question;
  document.getElementById("explanation-box").style.display = "none";
  
  const btn = document.getElementById("action-btn");
  btn.innerText = "Check Answer";
  btn.disabled = true;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  q.options.forEach((optText, i) => {
    const card = document.createElement("div");
    card.className = "option-card";
    card.onclick = () => selectOption(i);
    card.innerHTML = `
      <div class="checkbox-indicator" id="check-${i}"></div>
      <div>${optText}</div>
    `;
    container.appendChild(card);
  });
}

function selectOption(index) {
  if (isChecked) return;

  const q = quizData[currentIdx];
  const isMulti = q.correct.length > 1;

  if (isMulti) {
    if (selectedIndices.includes(index)) {
      selectedIndices = selectedIndices.filter(i => i !== index);
    } else {
      selectedIndices.push(index);
    }
  } else {
    selectedIndices = [index];
  }

  const cards = document.querySelectorAll(".option-card");
  cards.forEach((card, i) => {
    const check = document.getElementById(`check-${i}`);
    if (selectedIndices.includes(i)) {
      card.classList.add("selected");
      check.innerText = "✓";
    } else {
      card.classList.remove("selected");
      check.innerText = "";
    }
  });

  document.getElementById("action-btn").disabled = selectedIndices.length === 0;
}

function handleAction() {
  if (!isChecked) {
    checkAnswer();
  } else {
    currentIdx++;
    if (currentIdx < quizData.length) {
      loadQuestion();
    } else {
      showFinalResults();
    }
  }
}

function checkAnswer() {
  isChecked = true;
  const q = quizData[currentIdx];
  const cards = document.querySelectorAll(".option-card");
  
  const isCorrect = 
    selectedIndices.length === q.correct.length &&
    selectedIndices.every(val => q.correct.includes(val));

  if (isCorrect) {
    userScore++;
    document.getElementById("score-display").innerText = `Score: ${userScore}`;
    document.getElementById("status-title").innerText = "CORRECT";
    document.getElementById("status-title").style.color = "var(--accent-green)";
  } else {
    document.getElementById("status-title").innerText = "INCORRECT";
    document.getElementById("status-title").style.color = "var(--accent-red)";
  }

  cards.forEach((card, i) => {
    card.classList.add("disabled");
    if (q.correct.includes(i)) {
      card.classList.add("correct");
    } else if (selectedIndices.includes(i)) {
      card.classList.add("incorrect");
    }
  });

  document.getElementById("explanation-text").innerText = q.explanation;
  document.getElementById("explanation-box").style.display = "block";

  const btn = document.getElementById("action-btn");
  btn.innerText = currentIdx === quizData.length - 1 ? "Finish Quiz" : "Next Question";
}

function showFinalResults() {
  document.getElementById("quiz-ui").style.display = "none";
  document.getElementById("results-ui").style.display = "block";
  document.getElementById("final-score-text").innerText = `${userScore} / ${quizData.length}`;
}

function restartQuiz() {
  currentIdx = 0;
  userScore = 0;
  document.getElementById("score-display").innerText = "Score: 0";
  document.getElementById("results-ui").style.display = "none";
  document.getElementById("quiz-ui").style.display = "block";
  loadQuestion();
}

loadQuestion();
