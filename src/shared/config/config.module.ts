import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModuleRoot } from '@nestjs/config';
import dev from 'src/configuration/dev';

import { ProjectConfigService } from './config.service';

const NestConfigModule = NestConfigModuleRoot.forRoot({
  load: [dev],
  isGlobal: true,
  //ignoreEnvFile: true,
});

@Global()
@Module({
  imports: [NestConfigModule],
  providers: [ProjectConfigService],
  exports: [ProjectConfigService],
})
export class ProjectConfigModule {}
