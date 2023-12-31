import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from "./profile/profile.module";
import { ChatModule } from './chat/chat.module';
import { SearchModule } from './search/search.module';
import { HomeModule } from './home/home.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [AuthModule, GameModule, SettingsModule, ProfileModule, ChatModule, SearchModule, HomeModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}