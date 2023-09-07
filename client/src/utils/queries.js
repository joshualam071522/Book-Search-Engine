const { gql } = require('@apollo/client');

export const QUERY_USER = gql`
    query user($username: String, $userId: ID) {
        user(username: $username, userId: $userId) {
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
