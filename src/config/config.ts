import dotenv from 'dotenv'
dotenv.config()

const {
    PORT,
    POSTGRESS_DB,
    POSTGRESS_HOST,
    POSTGRESS_USER,
    POSTGRESS_PASSWORD,
    POSTGRESS_DB_TEST,
    POSTGRESS_PORT,
    ENV
}= process.env

const config= {
    port:PORT,
    db:ENV ==='dev' ?POSTGRESS_DB : POSTGRESS_DB_TEST,
    db_port:parseInt(POSTGRESS_PORT as string),
    db_user:POSTGRESS_USER,
    db_password:POSTGRESS_PASSWORD,
    db_host:POSTGRESS_HOST,
}
export default config;