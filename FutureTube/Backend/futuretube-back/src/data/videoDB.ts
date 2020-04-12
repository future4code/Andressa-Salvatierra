import { BaseDB } from "./baseDB";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";


export class VideoDB extends BaseDB implements VideoGateway {
    private videoTableName = "videos_futuretube"

    public async uploadVideo(video: Video): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${this.videoTableName} (id, url, title, description, userId)
        VALUES(
            '${video.getId()}',
            '${video.getURL()}',
            '${video.getTitle()}',
            '${video.getDescription()}',
            '${video.getUserId()}'
        )`);
    }










}