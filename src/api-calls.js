const getData = async (country = '') => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (res.status !== 200){
            throw new Error('oops!');
        } else {
            return res.json();
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getData;