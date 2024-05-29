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

        try {

            const response = await axios.get(`https://api.github.com/users/${owner}/repos`, {
                // params: {
                //     sort: 'stars',
                // per_page: 10
                // },
            });
            const popularRepos = response.data
                .map(repo => ({
                    name: repo.name,
                    stars: repo.stargazers_count,
                    url: repo.html_url,
                }))
                .sort((a, b) => b.stars - a.stars)
                .slice(0, 10);
            console.log(popularRepos);
            return {
                popularRepos: popularRepos,
            }

        } catch (error) {
            console.error('Error al obtener los repositorios:', error.message);
        }
    }

}
export default new GithubService();