import { Video } from "../entities/video";

export interface VideoGateway {
    createVideo(video: Video): Promise<void>;
    
}