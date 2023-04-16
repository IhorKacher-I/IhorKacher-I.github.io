/**
 * This class uses The Singleton pattern
 * learn more -> https://refactoring.guru/uk/design-patterns/singleton
 */
import { BASE_URL } from "../constants/const.js";

export default class Request {
  static #instance;
  static #HEADERS = { "Content-Type": "application/json" };
  #token = "";

  constructor() {
    if (Request.#instance) {
      return Request.#instance;
    }
    this.url = BASE_URL;
    Request.#instance = this;
  }

  set token(token) {
    this.#token = token;
  }

  get token() {
    return this.#token;
  }

  #getHeaders() {
    if (this.#token !== "") {
      return { ...Request.#HEADERS, Authorization: `Bearer ${this.#token}` };
    }
    return Request.#HEADERS;
  }

  async post(entity, dataObj, jsonResponse = true) {
    try {
      const response = await fetch(`${this.url}/${entity}`, {
        method: "POST",
        headers: this.#getHeaders(),
        body: JSON.stringify(dataObj),
      });
      if (![200, 201].includes(response.status)) {
        throw new Error(await response.text());
      }
      return jsonResponse ? response.json() : response.text();
    } catch (error) {
      alert(error.message);
    }
  }

  async get(entity) {
    try {
      const response = await fetch(`${this.url}/${entity}`, {
        method: "GET",
        headers: this.#getHeaders(),
      });
      return await response.json();
    } catch (error) {
      alert(error.message);
    }
  }

  async put(entity, dataObj) {
    try {
      const response = await fetch(`${this.url}/${entity}`, {
        method: "PUT",
        headers: this.#getHeaders(),
        body: JSON.stringify(dataObj),
      });
      return await response.json();
    } catch (error) {
      alert(error.message);
    }
  }

  async delete(entity) {
    try {
      const response = await fetch(`${this.url}/${entity}`, {
        method: "DELETE",
        headers: this.#getHeaders(),
      });
      return await response;
    } catch (error) {
      alert(error.message);
    }
  }
}
