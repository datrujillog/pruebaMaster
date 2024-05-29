import axios from 'axios';

class GithubService {
    static #instance;

    constructor() {
        if (!GithubService.#instance) {
            GithubService.#instance = this;
        }

        return GithubService.#instance;
    }

    async getPopularRepositories(owner) {

    }

}
export default new GithubService();