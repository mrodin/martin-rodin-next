import Author from "./Author";

type BlogPost = {
    title: string;
    slug: string;
    heroImage: any;
    description: string;
    body: any;
    author: Author;
    publishDate: Date;
};

export default BlogPost;
