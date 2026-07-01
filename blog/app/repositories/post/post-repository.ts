import { PostModel } from "@/app/models/post/post-model";

export interface PostRepositoty {
  findAll(): Promise<PostModel[]>
}
