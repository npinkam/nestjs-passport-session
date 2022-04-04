import { Module } from '@nestjs/common';
import { REDIS } from './redis.constants';
import * as Redis from 'redis';

@Module({
  providers: [
    {
      provide: REDIS,
      useValue: Redis.createClient({ port: 6380, host: 'localhost' }),
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
