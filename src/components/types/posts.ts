export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    text: string;
    date: string;
    comments: PostComment[];

}
export interface PostComment {
    id: string;
    body: string;
    Username: string;
    date: string;
}