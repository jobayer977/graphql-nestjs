
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserModel {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface IMutation {
    createUser(input?: Nullable<CreateUserModel>): Nullable<UserModel> | Promise<Nullable<UserModel>>;
}

export interface IQuery {
    getAllUsers(): Nullable<Nullable<UserModel>[]> | Promise<Nullable<Nullable<UserModel>[]>>;
}

export interface UserModel {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
}

type Nullable<T> = T | null;
