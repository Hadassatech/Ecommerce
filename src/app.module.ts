import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { CartItem } from './cart-items/entities/cart-item.entity';
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { Category } from './category/entities/category.entity';
import { AuthModule } from './auth/auth.module';
import { AccessControlModule } from 'nest-access-control';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Product,
        Cart,
        CartItem,
        Category,
      ],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    CategoryModule,
    ProductModule,
    CartModule,
    CartItemsModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
