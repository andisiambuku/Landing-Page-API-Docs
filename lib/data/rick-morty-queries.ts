import { gql } from '@/src/__generated__/gql';

export const GET_ALL_CHARACTERS:any = gql(/* GraphQL */ `
    query Character($page: Int!) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
            }
        }
}`
)

export const GET_PAGE_INFO:any = gql(/* GraphQL */`
    query Character {
        characters {
            info {
                pages
            }
        }
    }
`)

