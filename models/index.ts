import Knex from "knex";
import { Model } from "objection";
import { Environment } from "types";
import knexConfig from "../knexfile";

const setUpDb = (environment: Environment) => {
  const knex = Knex(knexConfig[environment]);
  Model.knex(knex);
};

export default setUpDb;
