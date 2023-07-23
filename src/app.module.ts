import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProjectConfigModule } from './shared/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { CarsModule } from './modules/cars/cars.module';
import { KafkaModule } from './modules/kafka/kafka.module';
import { KafkaService } from './products/modules/kafka/kafka.service';
import { KafkaService } from './products/modules/kafka/kafka.service';

@Module({
  imports: [UsersModule, AuthModule, ProjectConfigModule, DatabaseModule, CarsModule, KafkaModule],
  controllers: [AppController],
  providers: [AppService, KafkaService],
})
export class AppModule {}
