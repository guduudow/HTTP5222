const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending?extended=full`;
  console.log(reqUrl);
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

async function getUserData(slug, token) {
  let reqUrl = `${trakt}/users/${slug}`;
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID,
        "Authorization": `Bearer ${token}`,
      }
    }
  );
  return await response.json();
}

//function to retrieve movie ratings
async function getMovieRatings(ImdbId) {
  const reqUrl = `${trakt}/movies/${ImdbId}/ratings`;
  let options = {
    method: "get",
    headers: {
      "Content-type": "application/json",
      "trakt-api-version": 2,
      "trakt-api-key": process.env.TRAKT_CLIENT_ID
    }
  };
  let response = await fetch(reqUrl, options);
  return response.json();
}

//lab 4: function to retrieve popular shows
async function getPopularShows() {
  const reqUrl = `${trakt}/shows/popular?page=1&limit=15`;
  console.log(reqUrl);
  let options = {
    method: 'get',
    headers: {
      "Content-type": "application/json",
      "trakt-api-version": 2,
      "trakt-api-key": process.env.TRAKT_CLIENT_ID,
      "X-Pagination-Page": 1,
      "X-Pagination-Limit": 15
    }
  };
  let response = await fetch(reqUrl, options);
  return response.json();
}

module.exports = {
  getTrendingMovies,
  getUserData,
  getMovieRatings,
  getPopularShows
};