"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(id, url, title, description, userId) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.description = description;
        this.userId = userId;
    }
    getId() {
        return this.id;
    }
    getURL() {
        return this.url;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getUserId() {
        return this.userId;
    }
}
exports.Video = Video;
