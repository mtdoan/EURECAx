export const isAuthenticated = () => {
    return localStorage.getItem('User') !== null;
};