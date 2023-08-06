import axios from "axios";

export default class PostService {
    static async getAllPost() {
        const response = await axios.get("https://localhost:44382/Get");
        return response.data;
    }
    static async getPost(id: string | number| undefined) {
        const response = await axios.get("https://localhost:44382/GetById", { params: { postId: id } });
        return response.data;
    }
}