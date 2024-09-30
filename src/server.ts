import Fastify from 'fastify';

const app = Fastify({ logger: true });

const start = async () => {

    try{
        await app.listen({ port: 3333 });
        console.log("server running!")
    }catch(err){
        process.exit(1);
    };
};

start();