"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseDB_1 = require("./baseDB");
const video_1 = require("../business/entities/video");
class VideoDB extends baseDB_1.BaseDB {
    constructor() {
        super(...arguments);
        this.videoTableName = "videos_futuretube";
        this.userTableName = "users_futuretube";
    }
    uploadVideo(video) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
        INSERT INTO ${this.videoTableName} (id, url, title, description, userId)
        VALUES(
            '${video.getId()}',
            '${video.getURL()}',
            '${video.getTitle()}',
            '${video.getDescription()}',
            '${video.getUserId()}'
        )`);
        });
    }
    getVideoByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT * FROM ${this.videoTableName} WHERE userId = '${userId}'
        `);
            if (!result[0]) {
                return undefined;
            }
            return result[0].map((video) => {
                return new video_1.Video(video.id, video.url, video.title, video.description, video.userId);
            });
        });
    }
    editVideoInfo(userId, videoId, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.from(this.videoTableName)
                .where({
                userId: `${userId}`,
                id: `${videoId}`
            })
                .update({
                title,
                description
            });
        });
    }
    deleteVideo(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            DELETE FROM ${this.videoTableName} WHERE id = '${videoId}'
        `);
        });
    }
    getAllVideos(page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const offset = (page - 1) * 10;
                const result = yield this.connection.raw(`
                SELECT id, title, url FROM ${this.videoTableName}
                LIMIT 10
                OFFSET ${offset}
            `);
                if (!result[0] || result[0] === []) {
                    return undefined;
                }
                return result[0];
            }
            catch (err) {
                throw new Error(err.sqlMessage);
            }
        });
    }
    getVideoInfoById(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT ${this.videoTableName}.*, ${this.userTableName}.name, ${this.userTableName}.picture
            FROM ${this.videoTableName} JOIN ${this.userTableName} ON userId = ${this.userTableName}.id
            WHERE ${this.videoTableName}.id = '${videoId}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return {
                id: result[0][0].id,
                userId: result[0][0].userId,
                url: result[0][0].url,
                description: result[0][0].description,
                title: result[0][0].title,
                name: result[0][0].name,
                picture: result[0][0].picture
            };
        });
    }
}
exports.VideoDB = VideoDB;
