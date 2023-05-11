import env from 'dotenv';
env.config();

const {
  PORT,
  DB_CONNECTION
} = process.env;

if(!PORT || !DB_CONNECTION){
  throw new Error('Please define varibales in \.env file');
}

const config = {
  server: {
    port: PORT
  },
  db: {
    mongo: {
      connectionString: DB_CONNECTION
    }
  }
}

export default config 