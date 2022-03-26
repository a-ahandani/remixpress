import { GraphQLClient } from "graphql-request";

const API_URL = process.env.API_URL;

export const graphql = new GraphQLClient("http://blog.ahandani.com/?");
