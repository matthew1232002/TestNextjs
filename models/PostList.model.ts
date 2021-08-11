import {PostModel} from "./Post.model";

export interface PostListModel extends PostModel {
    props: PostModel
}