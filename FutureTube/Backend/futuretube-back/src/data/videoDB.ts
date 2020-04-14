import { BaseDB } from "./baseDB";
import { VideoGateway } from "../business/gateways/videoGateway";
import { Video } from "../business/entities/video";
import { response } from "express";


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

    public async getVideoByUserId(userId: string): Promise<Video[] | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.videoTableName} WHERE userId = '${userId}'
        `)

        if (!result[0][0]) {
            return undefined
        }

        return result[0].map((video: any) => {
            return new Video(
                video.id,
                video.url,
                video.title,    
                video.description,
                video.userId
            )
        })
    }

    public async editVideoInfo(userId: string, videoId: string, title: string, description: string): Promise<void> {
        await this.connection.from(this.videoTableName)
        .where({
          userId: `${userId}`,
          id: `${videoId}`
        })
        .update({
          title: `${title}`,
          description: `${description}`
        })
    }










}