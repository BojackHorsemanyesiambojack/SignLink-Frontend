const constantDisplayFetch = async() => {
    const url = import.meta.env.VITE_FASTAPI;
    const response : Response = await fetch(`${url}/sign-dec`);
    console.log(response.json());
}

export default {constantDisplayFetch};