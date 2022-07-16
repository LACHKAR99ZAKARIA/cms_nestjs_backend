import * as mongoose from 'mongoose';

export const ArticleShema = new mongoose.Schema({
    title : String,
    content : String,
    author : String,
    creationDate : String,
});