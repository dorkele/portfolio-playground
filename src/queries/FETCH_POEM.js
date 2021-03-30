import { gql } from "@apollo/client";

export default gql`
    query FetchPoem($id: String!) {
        poem(id: $id) {
            title
            content
        }
    }
`;
