const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return {}
  }
  const maxLikes = blogs.reduce((numLikes, blog) => {
    return blog.likes > numLikes ? blog.likes : numLikes
  }, 0)

  const maxLikedBlog = blogs.find(blog => blog.likes === maxLikes)
  return {
    title: maxLikedBlog.title,
    author: maxLikedBlog.author,
    likes: maxLikedBlog.likes
  }
}

const mostBlogs = blogs => {
  if (blogs.length === 0) {
    return {}
  }

  const authorWithMostBlogs = lodash.chain(blogs)
    .countBy('author')
    .map((blogs, author) => ({ author, blogs }))
    .sortBy('blogs')
    .last()
    .value()
  return authorWithMostBlogs
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs
}