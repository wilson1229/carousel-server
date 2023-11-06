import { Module, Global } from '@nestjs/common';
import { dbProviders, repoProviders } from './provider/db.provider';

@Global()
@Module({
  providers: [...dbProviders, ...repoProviders],
  exports: [...dbProviders, ...repoProviders],
})
export class DatabaseModule {}
