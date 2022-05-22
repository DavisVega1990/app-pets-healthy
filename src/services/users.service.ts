import { environments } from './../environments';
class UsersService {
    login(payload: {email: string, password: string}) {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        };
        return fetch(`${environments.apiUrl}/auth/login`, options);
    }

    getAll() {
        return fetch(`${environments.apiUrl}/usuario`);
    }

    getById(id: number) {
        return fetch(`${environments.apiUrl}/usuario/${id}`);
    }

    createUser(payload: any) {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        };
        return fetch(`${environments.apiUrl}/usuario`, options);
    }

    deleteUser(id: number) {
        const options = {
            method: 'DELETE'
        };
        return fetch(`${environments.apiUrl}/usuario/${id}`, options);
    }
}

export default new UsersService();