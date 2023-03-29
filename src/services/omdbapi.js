

  //fetch data from API asynchronous keyword async/await, pause and wait to run code 
  export const getMovie = async (searchTerm) => {
    //try, catch, catch error
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=98e3fb1f&t=${searchTerm}`);
    //   console.log(response);
    //   const data = await response.json();
    //   setMovie(data); 
    return await response.json();
    } catch (e) {
      console.error(e);
    }
      };