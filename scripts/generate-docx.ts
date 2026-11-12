import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType } from 'docx';
import fs from 'fs';
import path from 'path';

async function generateCaseStudyDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Case Study 3: Cache Memory Performance Analysis",
                bold: true,
                size: 32,
                color: "142D4E",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Student Name: ", bold: true }),
              new TextRun("Garvit Chaudhary\n"),
              new TextRun({ text: "UID: ", bold: true }),
              new TextRun("25BAI10055\n"),
              new TextRun({ text: "Class: ", bold: true }),
              new TextRun("25BAI-601\n"),
              new TextRun({ text: "Subject: ", bold: true }),
              new TextRun("Computer Organisation and Architecture"),
            ],
            spacing: { after: 300 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "Scenario and Problem", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "A processor performs 1,000 memory accesses while running a program. Out of these accesses, 850 are found in cache memory and 150 are not found in the cache. The cache hit time is 2 ns, and every cache miss adds an additional miss penalty of 50 ns. The system designer wants to measure how effectively the cache is serving memory requests and understand how the hit ratio affects the average time needed to access memory."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "Case Study Questions & Answers", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "11. What is cache memory and why is it used?", bold: true }),
            ],
            spacing: { before: 100, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Cache memory is a small and very fast memory placed inside or close to the processor. It keeps copies of data and instructions that the CPU is likely to use again. The main memory (RAM) has a much larger capacity, but it is slower to access. If the processor had to wait for RAM for every instruction or data request, it would spend a lot of time idle. Cache reduces this waiting time by keeping useful information close to the CPU.\n\nMost computers use more than one cache level. L1 is normally the smallest and fastest cache and is located closest to the execution units. L2 is usually larger but a little slower, while L3 is often larger again and may be shared by processor cores. All these levels have the same basic purpose: to reduce the average delay between a memory request and the delivery of the required data."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "12. Differentiate between a cache hit and a cache miss.", bold: true }),
            ],
            spacing: { before: 100, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "A cache hit happens when the CPU requests a memory location and the required data is already present in the cache. The processor can read the data using the cache access time (2 ns in this scenario).\n\nA cache miss happens when the requested data is not available in the cache. The processor then has to obtain the data from a lower level of the memory hierarchy, such as RAM, adding the miss penalty (50 ns in this scenario)."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "13. Calculate the cache hit ratio for the given processor.", bold: true }),
            ],
            spacing: { before: 100, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Cache Hit Ratio = Number of Cache Hits / Total Memory Accesses\n= 850 / 1,000 = 0.85 = 85%\nTherefore, the cache hit ratio is 85%."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "14. Calculate the cache miss ratio for the given processor.", bold: true }),
            ],
            spacing: { before: 100, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Cache Miss Ratio = Number of Cache Misses / Total Memory Accesses\n= 150 / 1,000 = 0.15 = 15%\nAlternatively: Miss Ratio = 100% - Hit Ratio = 100% - 85% = 15%."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "15. Why is locality of reference important in cache memory?", bold: true }),
            ],
            spacing: { before: 100, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Locality of reference is the tendency of a program to access the same memory locations repeatedly (Temporal Locality), locations adjacent to recently accessed ones (Spatial Locality), or sequential instructions in order (Sequential Locality). Locality enables caches with limited physical capacity to satisfy 80–95%+ of memory references without accessing RAM."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({ text: "Cache Effectiveness & Average Memory Access Time (AMAT)", bold: true, size: 22, color: "142D4E" }),
            ],
            spacing: { before: 150, after: 80 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "AMAT = Hit Time + (Miss Rate × Miss Penalty)\nAMAT = 2 + (0.15 × 50) = 2 + 7.5 = 9.5 ns\n\nIf the hit ratio improves from 85% to 90%, miss rate drops to 10%:\nAMAT = 2 + (0.10 × 50) = 2 + 5 = 7.0 ns (a 26.3% reduction in average memory delay)."
              ),
            ],
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('public/documents/Garvit_Chaudhary_Case_Study_3_Cache_Memory.docx', buffer);
  console.log('Generated Garvit_Chaudhary_Case_Study_3_Cache_Memory.docx');
}

async function generateAmatDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Assignment: Average Memory Access Time (AMAT)",
                bold: true,
                size: 32,
                color: "142D4E",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Student Name: ", bold: true }),
              new TextRun("Garvit Chaudhary\n"),
              new TextRun({ text: "UID: ", bold: true }),
              new TextRun("25BAI10055\n"),
              new TextRun({ text: "Class: ", bold: true }),
              new TextRun("25BAI-601\n"),
              new TextRun({ text: "Subject: ", bold: true }),
              new TextRun("Computer Organisation and Architecture"),
            ],
            spacing: { after: 300 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "Introduction", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "Average Memory Access Time (AMAT) is the average time taken by a processor to complete a memory access. It includes the time required to check the cache and the additional delay when requested data is not found there. A lower AMAT means that the processor spends less time waiting for data."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "(a) Calculation of Average Memory Access Time", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "The processor performs 1,000 memory accesses. Out of these, 850 are cache hits and 150 are cache misses. The cache hit time is 2 ns and the additional miss penalty is 50 ns.\n\n" +
                "Step 1: Calculate the cache miss rate\n" +
                "Miss Rate = Cache Misses / Total Memory Accesses = 150 / 1,000 = 0.15 (15%)\n\n" +
                "Step 2: Apply the AMAT formula\n" +
                "AMAT = Hit Time + (Miss Rate × Miss Penalty)\n" +
                "AMAT = 2 + (0.15 × 50) = 2 + 7.5 = 9.5 ns\n\n" +
                "Therefore, the Average Memory Access Time of the processor is 9.5 nanoseconds."
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "(b) CPU–Cache–RAM Architecture Diagram", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "+--------------------------+\n" +
                "|           CPU            |\n" +
                "+--------------------------+\n" +
                "             |\n" +
                "             v\n" +
                "+--------------------------+\n" +
                "|       CACHE MEMORY       |\n" +
                "+--------------------------+\n" +
                "      /              \\\n" +
                "   HIT                MISS\n" +
                "    |                  |\n" +
                "    v                  v\n" +
                "+---------------+  +------------------+\n" +
                "| Return to CPU |  |       RAM        |\n" +
                "+---------------+  +------------------+\n" +
                "                           |\n" +
                "                           v\n" +
                "                  Data returned to CPU"
              ),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "(c) Three Performance Observations", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "1. Most requests are served by cache: ", bold: true }),
              new TextRun("The cache hit ratio is 85%, satisfying most memory requests directly and avoiding slow RAM bus traversal.\n\n"),
              new TextRun({ text: "2. Cache misses increase access time: ", bold: true }),
              new TextRun("Although only 15% are misses, each miss adds a heavy 50 ns penalty, contributing 7.5 ns (78.9%) of total AMAT.\n\n"),
              new TextRun({ text: "3. A higher hit ratio improves performance: ", bold: true }),
              new TextRun("Increasing the hit ratio to 90% drops AMAT from 9.5 ns to 7.0 ns, reducing processor stall time significantly."),
            ],
            spacing: { after: 200 },
          }),
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({ text: "Conclusion", bold: true, size: 24, color: "2563EB" }),
            ],
            spacing: { before: 200, after: 120 },
          }),
          new Paragraph({
            children: [
              new TextRun(
                "For the given processor, the cache hit ratio is 85% and the miss ratio is 15%. With a hit time of 2 ns and miss penalty of 50 ns, the calculated AMAT is 9.5 ns. This demonstrates that cache design and hit efficiency directly govern overall processor memory throughput."
              ),
            ],
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync('public/documents/Garvit_Chaudhary_AMAT_Assignment.docx', buffer);
  console.log('Generated Garvit_Chaudhary_AMAT_Assignment.docx');
}

async function main() {
  await generateCaseStudyDocx();
  await generateAmatDocx();
}

main().catch(console.error);
