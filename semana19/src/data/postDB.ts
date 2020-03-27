import { BaseDB } from "./baseDB";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/post";

export class PostDB extends BaseDB implements PostGateway {
    private postTableName = "futureBookPosts"

    async createPost(post: Post) {
        
    }
}