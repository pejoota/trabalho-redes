import fetch from 'node-fetch';

class Handler {
    private baseUrl: String = 'https://pokeapi.co/api/v2/'

    public GETResource = async (resource: String) => {
        const response = await fetch(`${this.baseUrl}/resource`);
        const data = await response.json();
        return data;
    }
}