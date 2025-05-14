// import {
//   BadRequestException,
//   Controller,
//   Post,
//   UploadedFile,
//   UseInterceptors,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { ResumeService } from './resume.service';

// @Controller('resume')
// export class ResumeController {
//   constructor(private readonly resumeService: ResumeService) {}

//   @Post('upload-pdf')
//   @UseInterceptors(FileInterceptor('file'))
//   async uploadPdf(@UploadedFile() file: Express.Multer.File) {
    
//     if (!file) {
//       throw new BadRequestException('Nenhum arquivo enviado.');
//     }

//     const result = await this.resumeService.analyzePdf(file.buffer);
//     return result;
//   }
// }
  