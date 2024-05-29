import { Router } from 'express';
import githubService from '../service/githubService.js';




class GithubRouter {
    static #instance;

    constructor() {
        if (!GithubRouter.#instance) {
            GithubRouter.#instance = this;
            this.router = Router();
            this.setupRoutes();
        }

        return GithubRouter.#instance;
    }

    setupRoutes() {


    }

    getRouter() {
        return this.router;
    }
}

export default new GithubRouter().getRouter();