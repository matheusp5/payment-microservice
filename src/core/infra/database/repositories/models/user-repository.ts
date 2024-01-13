import { User } from "@prisma/client";
import { DataRepository } from "../data-repository";

export interface IUserRepository extends DataRepository<User, string> {};