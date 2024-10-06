import prismaClient from "../prisma";

interface CreateCustomerServiceProps{
    name: string;
    email: string;
    status: boolean
}

class CreateCustomerService{
    async execute({ name, email, status }: CreateCustomerServiceProps){
        
        if(!name || !email){
            throw new Error("Preencha todos os campos");
        };

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status,
            }
        })

        return customer
    }
};

export { CreateCustomerService }