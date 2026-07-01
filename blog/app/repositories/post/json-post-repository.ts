import { PostModel } from "@/app/models/post/post-model";
import { PostRepositoty } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepositoty {
  private async readFromDisc() {}

  async findAll(): Promise<PostModel[]> { }
}

export const postRepository = new JsonPostRepository();

console.log('Olá mundo');
