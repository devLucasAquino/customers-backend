import prismaClient from "../prisma";

class CreateCustomerService{
    async execute(){
        console.log("rota ativa");

        return { ok: true}
    }
};

export { CreateCustomerService }