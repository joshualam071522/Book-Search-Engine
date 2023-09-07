const { gql } = require('@apollo/client');

export const CREATE_USER = gql`
    mutation createUser(username: String!, email: String!, password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                }
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login(username: String!, email: String!, password: String!) {
        login(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(authors: [String], description: String!, title: String!, bookId: String!, image: String, link: String) {
        saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook(bookId: String!) {
        deleteBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
