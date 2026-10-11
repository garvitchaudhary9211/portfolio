import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const page = pdfDoc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();
  const margin = 50;
  let y = height - 50;

  // Header
  page.drawText('GARVIT CHAUDHARY', {
    x: margin,
    y,
    size: 20,
    font: fontBold,
    color: rgb(0.08, 0.12, 0.22),
  });
  y -= 20;

  page.drawText('+91 7740016161  |  garvitchaudhary9211@gmail.com  |  LinkedIn  |  GitHub', {
    x: margin,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.25, 0.35, 0.5),
  });
  y -= 22;

  // Divider
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1,
    color: rgb(0.8, 0.85, 0.9),
  });
  y -= 16;

  // Section helper
  const drawSectionHeader = (title: string) => {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 11,
      font: fontBold,
      color: rgb(0.12, 0.18, 0.3),
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.5,
      color: rgb(0.85, 0.88, 0.92),
    });
    y -= 14;
  };

  // CAREER OBJECTIVE
  drawSectionHeader('Career Objective');
  const objective =
    'Second-year Artificial Intelligence student with hands-on project experience in machine learning, automation, and web-based platforms. Seeking an internship/entry-level opportunity to apply skills in AI/ML, Python, and cloud technologies to solve real-world problems.';
  
  const words = objective.split(' ');
  let line = '';
  for (const w of words) {
    const testLine = line ? `${line} ${w}` : w;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9.5);
    if (testWidth > width - 2 * margin) {
      page.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
      y -= 14;
      line = w;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y, size: 9.5, font: fontRegular, color: rgb(0.2, 0.25, 0.3) });
    y -= 20;
  }

  // EDUCATION
  drawSectionHeader('Education');
  page.drawText('Bachelor of Technology – Artificial Intelligence', {
    x: margin,
    y,
    size: 10.5,
    font: fontBold,
    color: rgb(0.1, 0.15, 0.25),
  });
  page.drawText('2025–2029', {
    x: width - margin - 55,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.4, 0.45, 0.5),
  });
  y -= 13;
  page.drawText('Chandigarh University, Gharuan, Punjab', {
    x: margin,
    y,
    size: 9.5,
    font: fontOblique,
    color: rgb(0.35, 0.4, 0.45),
  });
  y -= 18;

  page.drawText('Senior Secondary (Class XII)', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0.1, 0.15, 0.25),
  });
  page.drawText('2024–2025', {
    x: width - margin - 55,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.4, 0.45, 0.5),
  });
  y -= 13;
  page.drawText('Satluj Public School', {
    x: margin,
    y,
    size: 9.5,
    font: fontOblique,
    color: rgb(0.35, 0.4, 0.45),
  });
  y -= 18;

  page.drawText('Secondary (Class X)', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0.1, 0.15, 0.25),
  });
  page.drawText('2022–2023', {
    x: width - margin - 55,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.4, 0.45, 0.5),
  });
  y -= 13;
  page.drawText('Satluj Public School', {
    x: margin,
    y,
    size: 9.5,
    font: fontOblique,
    color: rgb(0.35, 0.4, 0.45),
  });
  y -= 22;

  // PROJECTS
  drawSectionHeader('Projects');
  page.drawText('AdGenix — AI Advertisement Generator', {
    x: margin,
    y,
    size: 10.5,
    font: fontBold,
    color: rgb(0.1, 0.15, 0.25),
  });
  page.drawText('| AI/ML, Python, Pre-trained AI Models', {
    x: margin + fontBold.widthOfTextAtSize('AdGenix — AI Advertisement Generator  ', 10.5),
    y,
    size: 9,
    font: fontOblique,
    color: rgb(0.35, 0.4, 0.5),
  });
  y -= 14;
  page.drawText('• Developed a tool that uses pre-trained AI models to generate advertisements from user input.', {
    x: margin + 10,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.25, 0.3),
  });
  y -= 14;
  page.drawText('• Designed for brands, businesses, influencers, and events to quickly create tailored ad content.', {
    x: margin + 10,
    y,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.2, 0.25, 0.3),
  });
  y -= 16;
  page.drawText('Additional projects in progress — details to be added.', {
    x: margin + 10,
    y,
    size: 8.5,
    font: fontOblique,
    color: rgb(0.5, 0.55, 0.6),
  });
  y -= 22;

  // SKILLS
  drawSectionHeader('Skills');
  const skillsList = [
    { label: 'Programming:', val: 'C++, Python, Java' },
    { label: 'AI/ML:', val: 'Artificial Intelligence, Machine Learning, NLP' },
    { label: 'Data / Databases:', val: 'SQL, Data Analytics' },
    { label: 'Cloud:', val: 'Microsoft Azure' },
    { label: 'Tools:', val: 'Git, GitHub, VS Code, Jupyter' },
    { label: 'Interpersonal Skills:', val: 'Problem Solving, Communication, Teamwork, Adaptability, Continuous Learning' },
  ];

  for (const s of skillsList) {
    page.drawText(s.label, {
      x: margin,
      y,
      size: 9.5,
      font: fontBold,
      color: rgb(0.15, 0.2, 0.3),
    });
    page.drawText(s.val, {
      x: margin + 120,
      y,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.2, 0.25, 0.3),
    });
    y -= 14;
  }
  y -= 8;

  // CERTIFICATIONS
  drawSectionHeader('Certifications');
  const certs = [
    '• Microsoft Azure Fundamentals (AZ-900)',
    '• Critical Enquiry and Research Methodology — Coursera',
    '• Entrepreneurial Mindset: Build, Grow, & Lead Your Own Venture — Coursera',
    '• Design Thinking and Creativity for Innovation — LinkedIn Learning',
  ];

  for (const c of certs) {
    page.drawText(c, {
      x: margin + 10,
      y,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.2, 0.25, 0.3),
    });
    y -= 15;
  }

  const pdfBytes = await pdfDoc.save();
  const dir = path.resolve('public/documents');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'garvit_chaudhary_resume.pdf'), pdfBytes);
  console.log('Successfully generated garvit_chaudhary_resume.pdf');
}

async function generateCoaAssignmentPdf() {
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 50;

  const questions = [
    {
      title: '1. Raspberry Pi',
      text: "The Raspberry Pi is a small computer that's about the size of a credit card. The Raspberry Pi Foundation has created it to teach programming and computer science in schools. It's small, but has a lot of capabilities such as the normal computer.",
      bulletsTitle: 'Features',
      bullets: [
        'ARM-based processor',
        'HDMI display output',
        'Wireless (for most models) and Bluetooth (for Wireless-enabled models)',
        'General Purpose Input/Output Pins to connect electronic devices. GPIO pin to connect electronic components.',
        'Supports Linux based operating systems. Works on Linux operating systems.',
      ],
    },
    {
      title: '2. AI SUMMIT – 10 Key Takeaways',
      bullets: [
        'AI has started playing a significant role in nearly every industry.',
        'Generative AI is leveraged for enhanced productivity and creativity.',
        'It is a must to use AI in an ethical and responsible manner.',
        'Quality data is essential to develop AI models.',
        'AI is to assist human beings; it is not to take their place.',
        'AI is more easily accessible thanks to cloud computing.',
        'The trend of Open Source AI is gaining momentum.',
        'Security and privacy is gaining in significance for AI.',
        'There is need for constant learning in the field of Artificial Intelligence.',
        'There is a need for AI skills.',
      ],
    },
    {
      title: '3. Yotta',
      text: "Yotta Infrastructure is an Indian cloud computer and data centre services provider company. It offers cloud storage, cloud for AI (GPU), disaster recovery and secure data hosting. It plays an important role in India's AI and Digital transformation.",
    },
    {
      title: '4. How to decide a programming language to design an application and what are parameters?',
      text: 'The program language used is the one being developed to the application. These are some important points to be kept in mind:',
      bullets: [
        'Performance and speed',
        'Memory usage',
        'Security',
        'The platform (Web, Mobile or Desktop) that the targeted audience uses to access the Internet.',
        'Libraries and frameworks',
        'Community support',
        'Ease of development',
        'Scalability and maintenance',
      ],
      examples: [
        'Python – AI and Machine Learning',
        'Java – Enterprise applications',
        'C++ – Game development',
        'JavaScript – Web development',
        'Swift – iOS applications',
        'Kotlin – Android applications',
      ],
    },
    {
      title: '5. RAM Size, Word Size, 64-bit System, Speed and Operating System',
      text: "RAM is temporary memory to store data which is used while a program is running. The more uses that are running, the more RAM that's available will help the computer to perform better.\n\nThe size of a word is the quantity of data that a processor can use simultaneously, e.g., 32-bit vs. 64-bit.\n\nMore data can be handled by a 64-bit system than a 32-bit system, and it can handle more memory.\n\nThe speed of the processor is measured by gigahertz (GHz).\n\nThe Operating System (OS) is a software that helps to control the hardware and software of the computer. They will usually be Windows, Ubuntu Linux and macOS.",
    },
    {
      title: '6. What is the reason behind the speed of a GPU over that of a CPU?',
      text: 'A GPU will be faster than a CPU at doing things where lots of calculations need to be done simultaneously. A CPU will have a few powerful cores, a GPU will have hundreds or thousands of small cores which operate concurrently. That is for video editing, graphics rendering, scientific computing, gaming, etc. that is why GPUs are ideal for such uses.',
    },
    {
      title: '7. CPU vs GPU vs TPU',
      text: 'CPU (Central Processing Unit): An ordinary processor with some powerful cores.\nGPU (Graphics Processing Unit): A chip with lots of cores that is used for graphics processing and parallel computing.\nTPU (Tensor Processing Unit): A processor that exists for Artificial Intelligence and deep learning.\n\nTo put it simply: The CPU is the computer\'s brain, the GPU performs several tasks simultaneously and the TPU was designed for artificial intelligence.',
    },
    {
      title: "8. The last year's Turing Award",
      text: 'Andrew G. Barto and Richard S. Sutton won the 2025 ACM A.M. Turing Award for their groundbreaking work in Reinforcement Learning, the core of many contemporary AI systems.',
    },
    {
      title: '9. Stampeding Herd Problem',
      text: 'A scenario that has lots of users or processes accessing the same resource simultaneously is called the Stampeding Herd Problem. This may result in delays or overloading of the system.',
      bulletsTitle: 'Common solutions',
      bullets: [
        'Caching',
        'Load balancing',
        'Request queuing',
        'Distributed locking',
        'Retries with backoff. Techniques of backing up and retries.',
      ],
    },
    {
      title: '10. Who are the founders of intel and AMD?',
      text: 'Robert Noyce and Gordon Moore are founders of Intel\nAMD has seven co-founders, of which Jerry Sanders was one.',
    },
    {
      title: '11. What type of CPU is on your laptop?',
      text: 'My laptop has Intel i7 240H processor. It is 64 bit architecture Von Neumann architecture and x86 architecture.',
    },
    {
      title: '12. Imitation Game.',
      text: "Interesting story about this extremely smart mathematician in ww2 who with the help of other people by his side decodes the Enigma Machine. He is resilient, patient and all the good qualities of a main character. I'd say it isn't exactly my type of movie or genre but a good first time watch.",
    },
  ];

  let currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - 50;

  const checkPageBreak = (neededHeight: number) => {
    if (y - neededHeight < 50) {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      y = pageHeight - 50;
    }
  };

  // Document Title
  currentPage.drawText('COA Assignment', {
    x: margin,
    y,
    size: 16,
    font: fontBold,
    color: rgb(0.12, 0.22, 0.45),
  });
  y -= 22;

  currentPage.drawText('Name: Garvit Chaudhary', {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.15, 0.2, 0.3),
  });
  y -= 16;

  currentPage.drawText('UID: 25BAI10055', {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.2, 0.3, 0.5),
  });
  y -= 24;

  const wrapAndDraw = (text: string, x: number, fontSize = 9.5, isBold = false, isOblique = false, color = rgb(0.2, 0.25, 0.3), maxW = pageWidth - 2 * margin) => {
    const font = isBold ? fontBold : isOblique ? fontOblique : fontRegular;
    const lines = text.split('\n');
    for (const rawLine of lines) {
      if (!rawLine.trim()) {
        y -= 8;
        continue;
      }
      const words = rawLine.split(' ');
      let cur = '';
      for (const w of words) {
        const test = cur ? `${cur} ${w}` : w;
        if (font.widthOfTextAtSize(test, fontSize) > maxW) {
          checkPageBreak(fontSize + 6);
          currentPage.drawText(cur, { x, y, size: fontSize, font, color });
          y -= fontSize + 5;
          cur = w;
        } else {
          cur = test;
        }
      }
      if (cur) {
        checkPageBreak(fontSize + 6);
        currentPage.drawText(cur, { x, y, size: fontSize, font, color });
        y -= fontSize + 5;
      }
    }
  };

  for (const item of questions) {
    checkPageBreak(40);
    y -= 6;
    // Question title
    wrapAndDraw(item.title, margin, 11, true, false, rgb(0.1, 0.15, 0.28));
    y -= 4;

    if (item.text) {
      wrapAndDraw(item.text, margin, 9.5, false, false, rgb(0.2, 0.25, 0.3));
      y -= 4;
    }

    if (item.bulletsTitle) {
      wrapAndDraw(item.bulletsTitle, margin, 10, true, false, rgb(0.15, 0.2, 0.3));
      y -= 2;
    }

    if (item.bullets) {
      for (const b of item.bullets) {
        checkPageBreak(25);
        currentPage.drawText('•', { x: margin + 4, y, size: 9.5, font: fontBold, color: rgb(0.3, 0.4, 0.6) });
        wrapAndDraw(b, margin + 14, 9.5, false, false, rgb(0.2, 0.25, 0.3), pageWidth - 2 * margin - 14);
      }
      y -= 4;
    }

    if (item.examples) {
      wrapAndDraw('Examples', margin, 10, true, false, rgb(0.15, 0.2, 0.3));
      y -= 2;
      for (const ex of item.examples) {
        checkPageBreak(20);
        currentPage.drawText('•', { x: margin + 4, y, size: 9.5, font: fontBold, color: rgb(0.3, 0.4, 0.6) });
        wrapAndDraw(ex, margin + 14, 9.5, false, false, rgb(0.2, 0.25, 0.3), pageWidth - 2 * margin - 14);
      }
      y -= 4;
    }
    y -= 8;
  }

  const pdfBytes = await pdfDoc.save();
  const dir = path.resolve('public/documents');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'garvit_chaudhary_coa_assignment.pdf'), pdfBytes);
  console.log('Successfully generated garvit_chaudhary_coa_assignment.pdf');
}

async function main() {
  await generateResumePdf();
  await generateCoaAssignmentPdf();
}

main().catch(console.error);
