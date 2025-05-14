// import { Injectable } from '@nestjs/common';
// import OpenAI from 'openai';
// import * as pdfParse from 'pdf-parse';

// @Injectable()
// export class ResumeService {
//   private readonly openai: OpenAI;

//   constructor() {
//     this.openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });
//   }

//   async analyzePdf(buffer: Buffer): Promise<string> {
//     const pdfData = await pdfParse(buffer);
//     const extractedText = pdfData.text;

//     const completion = await this.openai.chat.completions.create({
//       model: 'gpt-4o',
//       messages: [
//         {
//           role: 'user',
//           content: `Analise esse currículo e me diga os principais pontos fortes e fracos em quais pontos eu posso melhorar e quero que você me fale de 0 a 100 quantos pontos esse currículo está bom:\n\n${extractedText}`,
//         },
//       ],
//     });

//     return completion.choices[0].message.content || 'Nenhuma resposta gerada.';
//   }
// }
