import { BaseDB } from "./baseDB";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";


export class VideoDB extends BaseDB implements VideoGateway {
    private videoTableName = "video_futuretube"

    public async createVideo(video: Video): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${this.videoTableName} (id, name, email, password, birthDate, picture)
        VALUES(
            '${video.getId()}',
            '${video.getURL()}',
            '${video.getTitle()}',
            '${video.getDescription()}'
        )`);
    }

    








}