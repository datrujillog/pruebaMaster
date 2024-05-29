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
        this.router.get("/GitHub", async (req, res) => {
            try {
                const owner = req.query.owner;

                // const owner = 'google'

                const response = await githubService.getPopularRepositories(owner);
                res.json({
                    data: response,
                });

            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        });
    }

    getRouter() {
        return this.router;
    }
}

export default new GithubRouter().getRouter();