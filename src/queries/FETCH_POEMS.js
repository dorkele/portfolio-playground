import { gql } from "@apollo/client";

export default gql`
    {
        poemCollection {
            items {
                title
                sys {
                    id
                }
            }
        }
    }
`;
