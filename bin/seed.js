const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/node-real-notification', { useNewUrlParser: true });

const faker = require('faker');
const Post = require('../models/post');

// empty the collection first
Post.deleteMany({})
    .then(() => {
        const posts = [];
        for (let i = 0; i < 5; i++) {
            posts.push({
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph()
            });
        }
        return Post.create(posts);
    })
    .then(() => {
        process.exit();
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });