import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("NBARosterHub"); // select database

//////////////////////////////////////////
// NBA Database Functions
//////////////////////////////////////////

// Get all teams
async function getTeams() {
  let teams = [];
  try {
    const collection = db.collection("nba_teams");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    teams = await collection.find(query).toArray();
    teams.forEach((team) => {
      team._id = team._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return teams;
}

// Get team by id
async function getTeam(id) {
  let team = null;
  try {
    const collection = db.collection("nba_teams");
    const query = { _id: new ObjectId(id) }; // filter by id
    team = await collection.findOne(query);

    if (!team) {
      console.log("No team with id " + id);
      // TODO: errorhandling
    } else {
      team._id = team._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return team;
}

// update team
// returns: id of the updated team or null, if team could not be updated
async function updateTeam(team) {
  try {
    let id = team._id;
    delete team._id; // _id darf nicht direkt aktualisiert werden
    const collection = db.collection("nba_teams");
    const query = { _id: new ObjectId(String(id)) };
    const result = await collection.updateOne(query, { $set: team });

    if (result.matchedCount === 0) {
      console.log("No team with id " + id);
    } else {
      console.log("Team with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.error("UpdateTeam error:", error.message);
  }
  return null;
}

// Get all players
async function getPlayers() {
  let players = [];
  try {
    const collection = db.collection("nba_players");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    players = await collection.find(query).toArray();
    players.forEach((player) => {
      player._id = player._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return players;
}

// Get player by id
async function getPlayer(id) {
  let player = null;
  try {
    const collection = db.collection("nba_players");
    const query = { _id: new ObjectId(id) }; // filter by id
    player = await collection.findOne(query);

    if (!player) {
      console.log("No player with id " + id);
      // TODO: errorhandling
    } else {
      player._id = player._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return player;
}

// create player
async function createPlayer(player) {
  try {
    const collection = db.collection("nba_players");
    const result = await collection.insertOne(player);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update player
// returns: id of the updated player or null, if player could not be updated
async function updatePlayer(player) {
  try {
    let id = player._id;
    delete player._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("nba_players");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: player });

    if (result.matchedCount === 0) {
      console.log("No player with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Player with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete player by id
// returns: id of the deleted player or null, if player could not be deleted

async function deletePlayer(id) {
  try {
    const collection = db.collection("nba_players");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No player with id " + id);
    } else {
      console.log("Player with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}


// export all functions so that they can be used in other files
export default {
  getTeams,
  getTeam,
  updateTeam,
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
};
