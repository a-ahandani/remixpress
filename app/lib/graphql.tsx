import { GraphQLClient } from "graphql-request";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;
export const graphql = new GraphQLClient(GRAPHQL_ENDPOINT);
