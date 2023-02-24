import React, { FormEvent } from "react";
export * from "./LoginForm";
export * from "./RegisterForm";

/**
 * Forms event
 */
export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * Type of the submit event
 */
export type OnSubmitEvent = FormEvent<HTMLFormElement>;

/**
 * This interface describes the register data
 *
 * @typeParam age: number | undefined - User age
 * @typeParam birthDate: Date - User birth date
 * @typeParam email: string - User email
 * @typeParam name: string - User name
 * @typeParam password: string - User password
 * @typeParam passwordConfirmed: string - Verified user password
 */
export interface IRegisterData {
  age: number | undefined;
  birthDate: Date;
  email: string;
  name: string;
  password: string;
  passwordConfirmed: string;
}

/**
 * This interface describes the user credentials to open session
 *
 * @typeParam email: string - User email
 * @typeParam password: string - User password
 */
export interface ICredentials {
  email: string;
  password: string;
}

/**
 * Default register data
 */
export const defaultRegisterData: IRegisterData = {
  age: undefined,
  birthDate: new Date(),
  email: "",
  name: "",
  password: "",
  passwordConfirmed: "",
};
