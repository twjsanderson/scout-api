import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import helmet from 'helmet';
// import dotenv from 'dotenv';

// dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Application = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// app.use(helmet());
app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let db = {
  users: [
    {
      id: 1,
      name: 'Tom',
      email: 'twjsanderson@yahoo.ca',
      organization: null,
      position: null,
      admin: true
    },
    {
      id: 2,
      name: 'Sam',
      email: 'samthechief@hotmail.ca',
      organization: 'Toronto Sharks',
      position: 'owner',
      admin: false
    },
    {
      id: 3,
      name: 'Joe',
      email: 'Joe@hotmail.ca',
      organization: 'Toronto Sharks',
      position: 'scout',
      admin: false
    },
  ],
  games: [],
  players: [],
  arenas: [],
  organizations: [
    {
      id: 1,
      name: 'Toronto Sharks'
    }
  ]
};

// app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Ping</h1>');
});

// POST is always for creating a resource ( does not matter if it was duplicated) 
// PUT is for checking if resource exists then update, else create new resource 
// PATCH is always for updating a resource

/**
 *  USER 
 */

// get user
app.get('/user/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  const { users } = db;
  if (users.length) {
    for (let user of users) {
      if (user.id === Number(userId)) {
        res.json(user);
        return 
      }
    }
    res.json('user not found').status(400);
    return
  }
});

// create a new user
app.post('/user/new', (req: Request, res: Response) => {
  res.send('<h1>create user</h1>');
});

// updates a user profile
app.patch('/user/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`<h1>update user with id ${userId}</h1>`);
});

// delete user profile ADMINS and ORG OWNERS ONLY
app.delete('/user/:id', (req: Request, res: Response) => {
  const userId = req.params.id;
  res.send(`<h1>delete user with id ${userId}</h1>`);
});

/**
 * GAME
 */

// get game 
app.get('/game/:gameId', (req: Request, res: Response) => {
  console.log(req.body)
});

// create a new game 
app.post('/game/new', (req: Request, res: Response) => {
  res.send('<h1>create game</h1>');
});

// updates a game
app.patch('/game/:gameId', (req: Request, res: Response) => {
  res.send('<h1>update game</h1>');
});

// delete game
app.delete('/game/:gameId', (req: Request, res: Response) => {
  res.send('<h1>delete game</h1>');
});

/**
 * GAMES
 */

// get all games from an organization 
app.get('/games/:orgId', (req: Request, res: Response) => {
  res.send('<h1>get games for an org</h1>');
});


/**
 * PLAYER
 */

// get player 
app.get('/player/:playerId', (req: Request, res: Response) => {
  res.send('<h1>get player</h1>');
});

// create a new player 
app.post('/player/new', (req: Request, res: Response) => {
  res.send('<h1>create player</h1>');
});

// updates a player
app.patch('/player/:playerId', (req: Request, res: Response) => {
  res.send('<h1>update player</h1>');
});

// delete player 
app.delete('/player/:playerId', (req: Request, res: Response) => {
  res.send('<h1>delete player</h1>');
});

/**
 * PLAYERS
 */

// get all players from org
app.get('/players/:orgId', (req: Request, res: Response) => {
  res.send('<h1>get players from an org</h1>');
});


/**
 * ORGANIZATIONS
 */

// get org 
app.get('/org/:orgId', (req: Request, res: Response) => {
  res.send('<h1>get org</h1>');
});

// create a new org 
app.post('/org/new', (req: Request, res: Response) => {
  res.send('<h1>create org</h1>');
});

// updates an org
app.patch('/org/:orgId', (req: Request, res: Response) => {
  res.send('<h1>update org</h1>');
});

// delete org OWNERS and ADMINS ONLY
app.delete('/org/:orgId', (req: Request, res: Response) => {
  res.send('<h1>delete org</h1>');
});

/**
 * ARENAS
 */

// get arena 
app.get('/arena/:arenaId', (req: Request, res: Response) => {
  res.send('<h1>get arena</h1>');
});

// create a new arena 
app.post('/arena/new', (req: Request, res: Response) => {
  res.send('<h1>create arena</h1>');
});

// updates an arena
app.patch('/arena/:arenaId', (req: Request, res: Response) => {
  res.send('<h1>update arena</h1>');
});

// delete arena OWNERS and ADMINS ONLY
app.delete('/arena/:arenaId', (req: Request, res: Response) => {
  res.send('<h1>delete arena</h1>');
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));