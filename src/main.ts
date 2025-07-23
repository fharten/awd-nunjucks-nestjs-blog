import { NestFactory } from '@nestjs/core';
import { BlogEntriesModule } from './blogEntries/blog.entries.module';
import nunjucks from 'nunjucks';
import { connectDB } from './db/database';

async function bootstrap() {
  const app = await NestFactory.create(BlogEntriesModule);

  nunjucks.configure('src/views', {
    autoescape: true,
    express: app,
  });

  // configurePassport();

  await app.listen(3232);
  console.log(`Server ist running on port ${await app.getUrl()}`);

  connectDB();
}

bootstrap();
